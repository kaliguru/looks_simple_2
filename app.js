const express = require('express');
const app = express.Router();

app.use('/',(req,res,next)=>
{
    res.status(200).json("Running")
})


module.exports = app;