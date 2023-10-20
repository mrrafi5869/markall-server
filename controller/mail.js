const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { name, email, phone, message } = req.body;
  // console.log(name, phone);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  

  const info = await transporter.sendMail({
    from: "mrrafi5869@gmail.com",
    to: "assignment@spreadinindia.in",
    subject: `Message from ${name} - Phone: ${phone}`,
    text: message,
  });
  console.log("Message sent: %s", info.messageId);
  res.send(info);
};
module.exports = sendMail;
