const nodemailer = require("nodemailer");
const auth = require("xoauth2");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    xoauth2: auth.createXOAuth2Generator({
      user: "francescocommisso1996@gmail.com",
      clientId:
        "855271108184-h38e0772kqe9g0hdlgnlciggi2n1kvto.apps.googleusercontent.com",
      clientSecret: "poT0BOP9R6bZm49tV6yB4_hP",
      refreshToken: "http://developers.google.com/oauthplayground"
    })
  }
});

var mailOptions = {
  from: "Francesco <francescocommisso1996@gmail.com>",
  to: "Francesco <francesco_commisso@hotmail.com>",
  subject: "Some Subject",
  text: "Hello Mailing World!"
};

transporter.sendMail(mailOptions, function(err, res) {
  if (err) {
    console.log("Mail Error");
  } else {
    console.log("Email Sent!");
  }
});
