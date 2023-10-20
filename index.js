require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const sendMail = require('./controller/mail')

app.post('/sendemail', sendMail);

app.get("/", async (req, res) => {
  res.send("server is running");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
