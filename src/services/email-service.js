/* 'use strict';

var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: true,
    auth: {
        user: "juliocezark12@gmail.com",
        pass: "senha"
    }
});

exports.send = async (to, subject, body) => {
    transporter.sendMail({
        to: to,
        from: 'juliocezark12@gmail.com <juliocezark12@gmail.com>',
        subject: subject,
        html: body,
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    });
}; */

