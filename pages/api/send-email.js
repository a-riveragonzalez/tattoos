import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

export default async function sendEmail(req, res) {
  const {
    firstName,
    lastName,
    email,
    phoneNum,
    tatDes,
    approxSize,
    placement,
    option,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    // configure nodemailer mail options
    const mailOptions = {
      from: "lettucepressplay@gmail.com",
      to: "lettucepressplay@gmail.com",
      subject: "New message from your contact form",
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
    //   attachments: [
    //     {
    //       filename: selectedFile.originalname,
    //       content: selectedFile.buffer,
    //     },
    //   ],
    };

    // send email using nodemailer transporter
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
