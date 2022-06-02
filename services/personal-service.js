const config=require('./config');

const getPersonalSurveyData=function(req,res){
const pesonalconfig=JSON.parse(JSON.stringify(config.getPersonal));
res.send(pesonalconfig);
}

module.exports = getPersonalSurveyData;