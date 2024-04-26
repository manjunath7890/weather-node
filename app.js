const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

dotenv.config({path: './config.env'});

require('./db doc/atlas_conn');
app.use(express.json()); 
app.use(bodyParser.json());

const router = require('./router/router');
app.use(router);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'clientweather@gmail.com',
      pass: 'zqls cpdj rhpp uiew'
  }
});

app.post('/send-email', (req, res) => {

  const { to, subject, text } = req.body;
  let mailOptions = {
      from: 'clientweather@gmail.com',
      to: to,
      subject: subject,
      text: text
  };

  transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
          console.log(err);
          res.status(500).send('Error sending email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
  });
});

app.listen(PORT, () => {
  console.log('server is running at http://localhost:4000');
});
