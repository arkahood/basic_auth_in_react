const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/reactUserDB', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = new mongoose.Schema({
    username : String,
    password : String
});
const Users = new mongoose.model("User",Schema);

///////////////////////////////////////////////////////////
app.route("/")
    .get((req,res)=>{
        Users.find((err,results)=>{
            if(!err){
                res.send(results);
            }
        })
    })
    .post((req,res)=>{
        console.log(req.body);
        const newUser = new Users({
            username : req.body.username,
            password : req.body.password
        })
        newUser.save((err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("element added");
            }
        });
    })
///////////////////////////////////////////////////////////////////
app.route("/login")
    .post((req,res)=>{
        console.log(req.body);
        const pass = req.body.password;
        Users.find({username : req.body.username},(err,results)=>{
            console.log(results);
            if(results[0].password === pass){
                console.log("Succesfully logged in");
            }else{
                console.log("wrong password");
            }
            
        })
    })
app.listen(9000,()=>{
    console.log("server is up and running at port 9000");
});