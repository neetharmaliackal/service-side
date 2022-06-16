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
const {v4 : uuidv4} = require('uuid')

app.get('/api/home/personalsurvey/form', (req, res) => {       
    res.sendFile('survey_personal.json', {root: __dirname});     
                                                     
});
app.post('/api/home/personalsurvey/formsubmission', (req, res) => { 
    const userId = uuidv4();
    controller.writeDataToFile(req.body, userId );
    console.log(req.body, userId);
    res.send("success");
});
app.get('/api/home/personalsurvey/userdata', (req, res) => {  
    // res.json({status: 'success'})   ;  
    res.sendFile('persondata.json', {root: __dirname});     
                                                     
});

app.put('/api/home/personalsurvey/approved', (req, res) => { 
    // console.log(req.body);
    controller.ReadApproveUserdata(req.body);
    res.send(req.body);
 

    // const {firstName, middleName,lastName,radio,address} = req.body 
    // const userId = uuidv4();
    // console.log(userId,req.body);
    // controller.writeApprovedUsersToFile(req.body, userId );
    // repo.create({
    //     userId,
    //     firstName, 
    //     middleName,
    //     lastName,
    //     radio,
    //     address
    //   })
    //   res.send('Information submitted!');
    //   res.sendFile('ApprovedPersons.json', {root: __dirname}); 
    //   res.send(ApprovedPersons.json);
  
     
                                                     
});
app.put('/api/home/personalsurvey/rejected', (req, res) => {  
    // res.json({status: 'success'})   ;  
     
                                                     
});

app.listen(port, () => {         
    console.log(`Now listening on port ${port}`); 
});