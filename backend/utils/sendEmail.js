const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, text) => {
  try {
    console.log("Email:", process.env.EMAIL_USER); // Check email user from env
    console.log("Pass:", process.env.EMAIL_PASS); // Check email pass from env

    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"HR Notification" <${process.env.EMAIL_USER}>`, // Sender email
      to,
      subject,
      html: text, 
    });

    console.log(`✅ Email sent to ${to}`);  // Confirmation of email sent
    console.log(info); // Additional info from nodemailer
  } catch (error) {
    console.error(`❌ Error sending email to ${to}:`, error);
  }
};

module.exports = sendEmail;
