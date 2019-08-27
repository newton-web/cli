const settings = require('./settings');

mainRouter = (app) => {
    app.get('/', (request, response)=>{
        response.send(`Welcome to Newton! You are running your server at ${settings.port}`);
    });
    //Put your other routes/routers here
}

module.exports = mainRouter;
