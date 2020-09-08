const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("<h1>Working </h1>");
})
app.listen(9000,()=>{
    console.log("server is up and running at port 9000");
});