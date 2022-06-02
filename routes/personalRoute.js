const express = require('express');
const persoonalController = require("../controllers/personal-controller")
function routes(){
    const personalRoute=express.Router();
    personalRoute.route('personal/api')
    .post(persoonalController.personalsurvey)

    return personalRoute
}

module.exports = routes;