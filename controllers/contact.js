const express = require('express');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const dotenv = require('dotenv').config();
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}));

exports.postContactemail = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { firstName, lastName, companyName, email, phone, service, comment } = req.body;
        const newEmail = await transporter.sendMail({
            to: 'abrown@browncoinc.com', 
            from: email,
            subject: `brownco contact us: ${service}`,
            html: `<div>Hello Brownco,</div> <br>
            <div>I am contacting you from ${companyName}</div>
            <div>I am interested in the following service: ${service}</div>
            <br>
            <div>${comment}</div>
            <br>
            <div>${firstName} ${lastName},</div>
            <div>${email}</div>
            <div>${phone}</div>`
        });
        res.status(200).send('email sent')
    } catch(err) {
        console.error(err)
        res.status(500).send('sendgrid error')
    }

}