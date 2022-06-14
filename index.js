const express = require('express');
// const fs=require('fs'); 
// import fs from 'fs';
const controller = require('./controllers/personal-controller');
// import {fs} from 'fs';
const app = express();              
const port = 5000;                  
const router=express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/home/personalsurvey/form', (req, res) => {       
    res.sendFile('survey_personal.json', {root: __dirname});     
                                                     
});
app.post('/api/home/personalsurvey/formsubmission', (req, res) => { 
    controller.writeDataToFile(req.body);
    res.send("success");
});
app.get('/api/home/personalsurvey/userdata', (req, res) => {  
    // res.json({status: 'success'})   ;  
    res.sendFile('persondata.json', {root: __dirname});     
                                                     
});

app.listen(port, () => {         
    console.log(`Now listening on port ${port}`); 
});