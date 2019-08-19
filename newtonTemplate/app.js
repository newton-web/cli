const express = require('express');
const app = express();

const settings = require('./projectName/settings');

app.use(express.static(__dirname + settings.staticURL));

// Configure Database
require('./projectName/db');

//Your template engine as defined in settings.js
app.set('view engine', settings.templates.templateEngine);

app.get('/', (request, response)=>{
    response.json(`Welcome to Newton! You are running your server at ${settings.port}`);
})

app.listen(settings.port, ()=>{
    console.log(`Your app is now running at localhost:${settings.port}`);
})
