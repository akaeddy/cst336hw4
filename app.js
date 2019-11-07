// important part
const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//faker part
const faker = require("faker");


app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/fortnite", function(req, res) {
    res.render("fortnite.html");
});

app.get("/mw", function(req, res) {
    res.render("mw.html");
});

app.get("/nba2k20", function(req, res) {
    res.render("nba2k20.html");
});

app.get("/faker", function(req, res) {

    res.render("partials/fakerFile.ejs" , {"randName":faker.name.findName()} );
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...")
})
