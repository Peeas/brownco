const express = require('express');
const Page = require('../models/Page');

const { validationResult } = require('express-validator');
const aws = require('aws-sdk');
const fs = require('fs');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const s3 = new aws.S3();

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
    const { name, metaTitle, metaDescription } = req.body;
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
            file: image.location,
            meta: {
                title: metaTitle,
                description: metaDescription
            }
        });
        const newPage = await page.save();
        res.json(newPage)

    } catch(err) {
        console.log(err);
        res.status(500).send('server error')
    }
}

exports.editPage = async(req, res, next) => {
    const { name, metaTitle, metaDescription} = req.body;
    const image = req.file;
    console.log('IMAGE',image)
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
        page.meta.title = metaTitle;
        page.meta.description = metaDescription;
        if (image) {
            page.file = image.location;
        }
        const newPage = await page.save();
        if (image) {
            let key = page.file.split('/').pop();
            let params = {Bucket: process.env.AWS_BUCKET_NAME, Key: key}
            s3.deleteObject(params, (err, data) => {
                if (err) console.log(err, err.stack);  // error
                else console.log('deleted'); 
            })
        }
        res.json(newPage);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}

exports.deletePage = async(req, res, next) => {
    try {
        const page = await Page.findById(req.params.id);
        if (!page) {
            return res.status(404).json({ msg: 'error deleting page not found'});
        }
        let key = page.file.split('/').pop();
        let params = {Bucket: process.env.AWS_BUCKET_NAME, Key: key}
        s3.deleteObject(params, (err, data) => {
            if (err) console.log(err, err.stack);  // error
            else console.log('deleted'); 
        })
        await page.remove();
        res.json({ msg: "Page successfully removed"})
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
}