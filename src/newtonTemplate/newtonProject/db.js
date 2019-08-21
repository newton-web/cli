const mongoose = require('mongoose');
const settings = require('./settings');

mongoose.connect(settings.database.databaseURL, { useNewUrlParser: true });

let appsPath = '../';
settings.apps.forEach((appName)=>{
    console.log(appsPath + appName + "/models.js");
    require(appsPath + appName + "/models.js");
});
