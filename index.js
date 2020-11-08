var http = require('http');
var express = require('express');
var app=express();
var bodyparser = require('body-parser');

var calcadd = require('./addn');
var calcsub = require('./subn');
var calcmult = require('./multn');
var calcdiv = require('./divn');
var cale = require('./eval')

app.use(bodyparser.urlencoded({extended : true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/input.html');
})

app.post("/",function(req,res){
    var nums=req.body.txt;
    console.log(nums);
    var evalres=eval(nums);
    console.log(evalres);
})

app.listen(3000,function(){
    console.log("starting server on port 3000 visit:http://localhost:3000");
});