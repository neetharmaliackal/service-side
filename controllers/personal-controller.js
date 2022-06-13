// const config=require('config');
const fs=require('fs'); 
// const express = require('express');

// const app = express();              
// const port = 5000;                  
// const router=express.Router();
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

function writeToFile(data) {
console.log("data", data);
// fs.writefileSync('persondata.txt',data); 
 fs.writeFile('persondata.txt',data, function (err) {
  if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
   });
}
// app.post('/api/home/personalsurvey/formsubmission', (req, res) => { 
//          //get requests to the root ("/") will route here
// //  var FirstName = req.body.FirstName;
// // var MiddleName = req.body.MiddleName;  
// // var lastName= req.body.lastName; 
// // var user=req.body; 
// console.log("req.body",req.body);
// // fs.writefileSync('persondata.txt',user); 
// // fs.writeFile('persondata.txt',user, function (err) {
// //     if (err) return console.log(err);
// //     console.log('Hello World > helloworld.txt');
// //   });
// });




// async function openFile() {
//     try {
//         var user=req.body; 
//       await fs.writeFile('persondata.txt',user); 
//     } catch (error) {
//       console.error(`Got an error trying to write to a file: `);
//     }
//   }

// app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
//     console.log(`Now listening on port ${port}`); 
// });

module.exports = {
    writeToFile
}