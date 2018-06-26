var express = require('express');
var router = express.Router();
var burger = require("../models/burgers.js");

//When the user goes to the home page, run the burger.selectAll func
router.get("/", function(req,res){
    //We're going to pass in a callback func (function(burger_data))
    burger.selectAll(function(burger_data){
        console.log({burgers: burger_data});   
        //taking the response from the callback func and sending it to index.handlebars for rendering.
        res.render("index", {burgers: burger_data});
    })
});

router.put("/burgers/update", function(req, res) {
    burger.update(req.body.burger_id, function(response){
        console.log(response);
        res.redirect('/');
    })
})

router.post("/burgers/insert", function(req, res) {
    console.log(req.body.burger_name);
    burger.insertOne(req.body.burger_name, function(response) {
        res.redirect('/');
    })
})

module.exports = router;
