const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

const auth = require("xoauth2");

var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      xoauth2: auth.createXOAuth2Generator({
        user: "francescocommisso1996@gmail.com",
        clientId:
          "855271108184-h38e0772kqe9g0hdlgnlciggi2n1kvto.apps.googleusercontent.com",
        clientSecret: "poT0BOP9R6bZm49tV6yB4_hP",
        refreshToken: "1/sBwZh187i2kcsrpfwy-Ns1RFmc8eyAGyGqv6jZZFceg",
        accessToken:
          "ya29.Glu3BuKDf0V7QRL0qT-rX2rj5rNpFuo7OOtb_VXnKgpKu6ggRt4ER7qdTjXut52dOeEqIonYDE7jaR30w8M1a03z2HgfycaM50OqVTOLcIYnUfxx06ozTNq2ODlM"
      })
    }
  })
);

var mailOptions = {
  from: "Francesco <francescocommisso1996@gmail.com>",
  to: "<Fcommisso@ryerson.ca>",
  subject: "Some Subject",
  text: "Hello Mailing World!"
};

transporter.sendMail(mailOptions, function(err, res) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Email Sent!");
  }
});
