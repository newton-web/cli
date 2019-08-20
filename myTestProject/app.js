const express = require('express');
const app = express();
const session = require('express-session');

const settings = require('./main/settings');

app.use(express.static(__dirname + settings.staticURL));

//Setting Template dirs
let templateDirs = [];

settings.views.directories.forEach((item, index)=>{
    templateDirs.push(__dirname + "/" + item);
})

app.set('views', templateDirs);

//Your template engine as defined in settings.js
app.set('view engine', settings.views.templateEngine);

//Routes
require('./main/routes')(app);

app.set('trust proxy', 1);
app.use(session({
  secret: settings.sessionSecretKey,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Configure Database
require('./main/db');

app.listen(settings.port, ()=>{
    console.log(`Your app is now running at localhost:${settings.port}`);
})
