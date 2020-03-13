const express = require("express");
const path = require("path");

const app = express();
const Port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.listen(Port, function() {
    console.log("App listening on PORT " + Port);
  });