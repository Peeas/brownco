const express = require('express');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

exports.postContactemail = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const { firstName, lastName, companyName, email, phone, service, message } = req.body;
        console.log(req.body)
        const newEmail = await transporter.sendMail({
            to: 'rcdurazo@gmail.com', 
            from: email,
            subject: `brownco contact us: ${service}`,
            html: `<div>Hello Brownco,</div> <br>
            <div>I am contacting you from ${companyName}</div>
            <div>I am interested in the following service: ${service}</div>
            <br>
            <div>${message}</div>
            <br>
            <div>${firstName} ${lastName},</div>
            <div>${email}</div>
            <div>${phone}</div>`
        });
        console.log(newEmail)
        res.status(200).send('email sent')
    } catch(err) {
        res.status(500).send('sendgrid error')
    }

}