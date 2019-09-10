const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}));
// router.get('/', isAuth ,(req, res) => {
//     Job.find()
//       .sort({
//         date: -1
//       })
//       .then(jobs => res.json(jobs))
//       .catch(err => res.status(404).json({
//         nojobsfound: 'no jobs found'
//       }))
// })

exports.getJobs = async (req, res, next) => {
    Job.find()
      .sort({
        date: -1
      })
      .then(jobs => res.json(jobs))
      .catch(err => res.status(404).json({
        nojobsfound: 'no jobs found'
      }))
} 

exports.postJob = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const job = await Job.findById(req.params.id);

        const { title, responsibilities, requirements } = req.body;
    
        const jobPost = new Job({
            title: title,
            responsibilities: responsibilities,
            requirements: requirements
        });

        const newPost = await jobPost.save();
        res.json(newPost);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}

exports.editJob = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'job post not found'});
        }
        const { title, responsibilities, requirements } = req.body;
        job.title = title;
        job.responsibilities = responsibilities;
        job.requirements = requirements;

        const newPost = await job.save();
        res.json(newPost);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('server error')
    }
}

exports.postResume = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const job = await Job.findById(req.params.id);
       
        const newEmail = await transporter.sendMail({
            to: 'Lladow@browncoinc.com',
            from: 'browncodev@gmail.com',
            subject: `application recieved for ${job.title}`,
            html: `<div>Hello Brownco,</div> <br>
            <div>you've recieved a resume for the following</div>
            <ul>
                <li>
                    Job ID: ${job.id}
                </li>
                <li>
                    Job Title: ${job.title}
                </li>
            </ul>
            `,
            attachments: [
                {
                    filename: req.file.originalname,
                    content: new Buffer.from(req.file.buffer, 'utf-8')
                }
            ]
        })
        res.json(newEmail)
    } catch(err) {
        console.error(err);
        res.status(500).send('server error')
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: 'job post not found'});
        }
        await job.remove();
        res.json({ msg: "Job successfully removed"})
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
}