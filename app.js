// require calls
const express = require('express');
const handlebars = require("express-handlebars").engine;
const bodyParser = require('body-parser')

// create an instance of the express module
const app = express();

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// initialize express to parse form data to JSON
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// sends handlebars file as response
app.get("/", (req, res) => {
  res.render("index")
});

app.get("/search", (req, res) => {
  res.render("search")
});

//app.get("/search", function(req, res){
//  post.findAll().then(function(post){
//    res.render("search", {post})
//  }).catch(function(err){
//    console.log(err)
//  })
//})


app.listen(8080);
