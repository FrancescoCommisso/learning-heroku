const express = require("express");

const app = express();

app.use(express.static("public/build"));
app.get("/", function(req, res) {
  res.render("index", {});
});

app.listen(process.env.PORT || 8080, () => console.log("All is Ok bbg"));
