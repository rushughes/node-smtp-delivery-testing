const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const aws = require('aws-sdk');
const moment = require('moment');

dotenv.config();
aws.config.loadFromPath('config.json');

var testID = moment().valueOf();

var mt_smtp_transport = nodemailer.createTransport({
  host: process.env.MAILTRAP_SMTP_HOST,
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD
  }
});

var aws_api_transport = nodemailer.createTransport({
    SES: new aws.SES({
        apiVersion: '2010-12-01'
    })
});

var aws_smtp_transport = nodemailer.createTransport({
  host: process.env.AWS_MAIL_SERVICE_HOST,
  port: process.env.AWS_MAIL_SERVICE_PORT,
  auth: {
    user: process.env.AWS_MAIL_SERVICE_USER,
    pass: process.env.AWS_MAIL_SERVICE_PASS
  }
});

aws_smtp_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.MAILTRAP_EMAIL,
    subject: 'aws_smtp_transport ' + testID,
    text: "Time: " + moment().valueOf(),
    ses: { // optional extra arguments for SendRawEmail
        Tags: [{
            Name: 'tag name',
            Value: 'tag value'
        }]
    }
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});

aws_api_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.MAILTRAP_EMAIL,
    subject: 'aws_api_transport ' + testID,
    text: "Time: " + moment().valueOf()
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});

aws_smtp_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.OTHER_EMAIL,
    subject: 'aws_smtp_transport ' + testID,
    text: "Time: " + moment().valueOf(),
    ses: { // optional extra arguments for SendRawEmail
        Tags: [{
            Name: 'tag name',
            Value: 'tag value'
        }]
    }
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});

aws_api_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.OTHER_EMAIL,
    subject: 'aws_api_transport ' + testID,
    text: "Time: " + moment().valueOf()
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});

mt_smtp_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.MAILTRAP_EMAIL,
    subject: 'mt_smtp_transport ' + testID,
    text: "Time: " + moment().valueOf(),
    ses: { // optional extra arguments for SendRawEmail
        Tags: [{
            Name: 'tag name',
            Value: 'tag value'
        }]
    }
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});

mt_smtp_transport.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.OTHER_EMAIL,
    subject: 'mt_smtp_transport ' + testID,
    text: "Time: " + moment().valueOf(),
    ses: { // optional extra arguments for SendRawEmail
        Tags: [{
            Name: 'tag name',
            Value: 'tag value'
        }]
    }
}, (err, info) => {
  if (err) {
    console.log(err);
  } else if (info) {
    console.log(info);
  }
});
