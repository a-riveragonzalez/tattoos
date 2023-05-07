const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3001;

const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/send-email', upload.single('selectedFile'), (req, res) => {
  const { firstName, lastName, email, phoneNum, tatDes, approxSize, placement, option } = req.body;
  const selectedFile = req.file;

  // configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  // configure nodemailer mail options
  const mailOptions = {
    from: 'Your Name <lettucepressplay@gmail.com>',
    to: 'lettucepressplay@gmail.com',
    subject: 'New message from your contact form',
    html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email Address: ${email}</p>
      <p>Phone Number: ${phoneNum}</p>
      <p>Tattoo Description: ${tatDes}</p>
      <p>Approximate Size: ${approxSize}</p>
      <p>Desired Placement: ${placement}</p>
      <p>Over 18 years old? ${option}</p>
    `,
    attachments: [
      {
        filename: selectedFile.originalname,
        content: selectedFile.buffer
      }
    ]
  };

  // send email using nodemailer transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
