const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.static("public/build"));
app.use(cors());

const mailer = require("./mailer.js");

app.post("/mail", function(req, res) {
  console.log("Email request received");
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var text = req.body.text;

  //   res.send(user_id + " " + token + " " + geo);

  res.send(mailer.send(name, email, text));
});

app.listen(process.env.PORT || 8080, () => console.log("All is Ok bbg"));
