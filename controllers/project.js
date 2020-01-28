const express = require('express');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');


exports.getProjects = async (req, res, next) => {
    Project.find()
      .sort({
        date: -1
      })
      .then(projects => res.json(projects))
      .catch(err => res.status(404).json({
        nojobsfound: 'no projects found'
      }))
} 

exports.postProject = async(req, res, next) => {
    const { title, description, imagePosition} = req.body;
    const image = req.file;
    if (!image) {
        return res.status(422).json({errors: [{msg: 'Failed to store Image'}]});
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {   

        const project = new Project({
            title: title,
            description: description,
            file: image.path,
            imagePosition: imagePosition
        });
        const newProject = await project.save();
        res.json(newProject)

    } catch(err) {
        console.log(err);
        res.status(500).send('server error')
    }
}

exports.editProject = async(req, res, next) => {
    const { title, description, imagePosition} = req.body;
    const image = req.file;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {   
        let project = Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'project not found'});
        }
        project.title = title;
        project.description = description;
        project.imagePosition = imagePosition;
        if (image) {
            project.file = image.path
        }
        const updatedProject = await project.save();
        res.json(updatedProject)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}