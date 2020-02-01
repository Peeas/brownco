const express = require('express');
const Page = require('../models/Page');

const fileHelper = require('../util/file');
const { validationResult } = require('express-validator');

exports.getPages = async(req, res, next) => {
    Page.find()
        .sort({
            date: -1
        })
        .then(pages => res.json(pages))
        .catch(err => res.status(404).json({
            nopagesfound: 'no pages found'
        }))
}

exports.getPage = (req, res, next) => {
    return Page.findById(req.params.id)
        .populate('projects')
        .exec(
            (err, page) => {
                if (err) {
                    res.status(500).send('server error')
                } else {
                    res.json(page);
                }
            })
}

exports.postPage = async(req, res, next) => {
    const { name } = req.body;
    const image = req.file;
    if (!image) {
        return res.status(422).json({errors: [{msg: 'Failed to store Image'}]});
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {   
        const page = new Page({
            name: name,
            file: image.path,
        });
        const newPage = await page.save();
        res.json(newPage)

    } catch(err) {
        console.log(err);
        res.status(500).send('server error')
    }
}

exports.editPage = async(req, res, next) => {
    const { name } = req.body;
    const image = req.file;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const page = await Page.findById(req.params.id);
        if (!page) {
            return res.status(404).json({ msg: 'page not found'});
        }
        page.name = name;
        if (image) {
            fileHelper.deleteFile(page.file);
            page.file = image.path;
        }

        const newPage = await page.save();
        res.json(newPage);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}

exports.deletePage = async(req, res, next) => {
    try {
        const page = await Page.findById(req.params.id);
        if (page.file) {
            fileHelper.deleteFile(page.file);            
        }
        if (!page) {
            return res.status(404).json({ msg: 'error deleting page not found'});
        }
        await page.remove();
        res.json({ msg: "Page successfully removed"})
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
}