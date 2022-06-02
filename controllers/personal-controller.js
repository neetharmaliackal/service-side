const config=require('config');

const personalsurvey = function(req,res){
    const personalsurvey=JSON.parse(JSON.stringify(config.personalsurvey));
    res.send(pesonalconfig);
    
};
module.exports = personalsurvey;