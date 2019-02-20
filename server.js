const express = require("express");

const app = express();

app.use(express.static("public/build"));

app.listen(process.env.PORT || 8080, () => console.log("All is Ok bbg"));
