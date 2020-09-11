const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
// app.use(bodyParser.json());
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
        
        Users.find(req.body.name,(err,results)=>{
            if(!err){
                res.send(results.username);
            }
        })
        console.log(id);
    })
    .post((req,res)=>{
        console.log(req.body);
        const newUser = new Users({
            username : req.body.name,
            password : req.body.pass
        })
        newUser.save((err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("element added");
                res.send(true);
            }
        });
    })
///////////////////////////////////////////////////////////////////
app.route("/login")
    .post((req,res)=>{
        console.log(req.body);
        const pass = req.body.pass;
        Users.find({username : req.body.name},(err,results)=>{
            console.log(results);
            if(results.length>0){
                if(results[0].password === pass){
                    console.log("Succesfully logged in");
                    const token = jwt.sign({
                        data:results[0]._id
                    },"secret", { expiresIn: '1h' });
                    //console.log(token);
                    res.send({login: true, token:token});
                }else{
                    console.log("wrong password");
                    res.send({login: false});
                 }
            }else{
                console.log("User doesn't exist");
                res.send({login:false});
            }
        })
    })
app.listen(9000,()=>{
    console.log("server is up and running at port 9000");
});