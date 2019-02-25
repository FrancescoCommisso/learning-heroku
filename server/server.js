const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public/build"));
app.use(cors());

const mailer = require("./mailer.js");

app.post("/mail", function(req, res) {
  console.log("Email request received");
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var text = req.body.text;

  res.send(mailer.send(name, email, text));
});

app.listen(process.env.PORT || 8080, () => console.log("All is Ok bbg"));
