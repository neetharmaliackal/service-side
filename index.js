const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const router=express.Router();
//Idiomatic expression in express to route and respond to a client request
app.get('/api/home', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('survey_personal.json', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
// var personalSurvey=require('personal/api');
// router.use("personal/api",personalSurvey);
// app.use("personal/api",personalSurvey);
// app.get('*', function(req, res) {        
// res.sendFile('survey_personal.json', {root: __dirname});     
 
// });
// var personalSurvey=require('personal/api')
// app.get('/', (req, res) => { 

// });
//helmet
// app.use(nocache());
// app.use("personal/api");
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});