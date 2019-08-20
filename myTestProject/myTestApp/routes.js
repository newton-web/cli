const myTestApp = require('express').Router();
const myTestAppController = require('./controllers');

myTestApp.get('/', myTestAppController.index);

module.exports = myTestApp;
