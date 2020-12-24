const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/cv-project'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/cv-project/index.html'))
});