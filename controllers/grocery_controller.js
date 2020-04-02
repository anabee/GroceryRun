var express = require("express");

// just an express method 
var router = express.Router();

// importing grocery allows for us to make a connection with the db 
var grocery = require("../models/grocery");

router.get("/", function(req, res){
    grocery.selectAll(function(data){
        var groceryObg = {
            goceries: data
        };
        console.log(groceryObg);
        res.render('index', groceryObg);
    });
});

router.post("/api/groceries", function(req, res){
    grocery.insertOne(function(data){

    });
});

router.put("/", function(req, res){
    grocery.updateOne();
});

module.exports = router;