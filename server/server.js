const express = require("express");

const app = express();

app.use(express.static("public/build"));

const mailer = require("./mailer.js");

app.post("/mail", function(req, res) {
  console.log("Email request received");
  console.log(req.body);
  var name = req.param("name");
  var email = req.param("email");
  var text = req.param("text");

  //   res.send(user_id + " " + token + " " + geo);
  mailer.send(name, email, text);
});

app.listen(process.env.PORT || 8080, () => console.log("All is Ok bbg"));
