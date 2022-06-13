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
                                              //get requests to the root ("/") will route here
//  var FirstName = req.body.FirstName;
// var MiddleName = req.body.MiddleName;  
// var lastName= req.body.lastName; 
// var user=req.body; 
// console.log("req.body",req.body);
// fs.writefileSync('persondata.txt',user); 
// fs.writeFile('persondata.txt',user, function (err) {
//     if (err) return console.log(err);
//     console.log('Hello World > helloworld.txt');
//   });
});
app.get('/api/home/personalsurvey/userdata', (req, res) => {       
    res.sendFile('persondata.txt', {root: __dirname});     
                                                     
});




// async function openFile() {
//     try {
//         var user=req.body; 
//       await fs.writeFile('persondata.txt',user); 
//     } catch (error) {
//       console.error(`Got an error trying to write to a file: `);
//     }
//   }

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});