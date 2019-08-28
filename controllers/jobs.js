const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const { validationResult } = require('express-validator');

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