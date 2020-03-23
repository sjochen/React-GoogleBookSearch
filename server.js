const express = require("express");
const path = require("path");
const db = require("./models");

const app = express();
const Port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


db.sequelize.sync({force: true}).then(function () {
    app.listen(Port, function () {
        console.log("App listening on PORT " + Port);
    });
})
