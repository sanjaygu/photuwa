// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

var express = require('express');
var app = express();

// const app = express();

app.use(express.json());
// app.use(cors());
app.get('/', function(req,res) {
    res.send("First Build!!");
})
// mongoose.connect();

app.listen(4000,()=> console.log("Mecicore Web App Backend")); 