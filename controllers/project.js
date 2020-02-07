const express = require('express');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');
const Page = require('../models/Page');
const aws = require('aws-sdk');
const fs = require('fs');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const s3 = new aws.S3();

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
    const { title, description, imagePosition, pageId } = req.body;
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
            file: req.file.location,
            imagePosition: imagePosition,
            pageId: pageId
        });
        const newProject = await project.save();
        const page = await Page.findById(pageId);
        page.projects.push(newProject._id);
        await page.save();
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
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ msg: 'project not found'});
        }
        project.title = title;
        project.description = description;
        project.imagePosition = imagePosition;
        if (image) {
            project.file = image.location;
        }
        const updatedProject = await project.save();
        if (image) {
            let key = project.file.split('/').pop();
            let params = {Bucket: process.env.AWS_BUCKET_NAME, Key: key}
            s3.deleteObject(params, (err, data) => {
                if (err) console.log(err, err.stack);  // error
                else console.log('deleted'); 
            })
        }
        res.json(updatedProject)
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}

exports.deleteProject = async(req, res, next) => {    
    try {
        const project = await Project.findById(req.params.id);
        const page = await Page.findById(req.params.pageId);
        await page.projects.pull(req.params.id);
        await page.save();
        if (!project) {
            return res.status(404).json({ msg: 'cannot delete project not found'})
        }
        let key = project.file.split('/').pop();
        let params = {Bucket: process.env.AWS_BUCKET_NAME, Key: key}
        s3.deleteObject(params, (err, data) => {
            if (err) console.log(err, err.stack);  // error
            else console.log('deleted'); 
        })
        await project.remove();
        res.json({ msg: 'Project successfully removed' });
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error')
    }
}