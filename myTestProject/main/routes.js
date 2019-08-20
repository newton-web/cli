const settings = require('./settings');
const myAppRouter = require('../myTestApp/routes');

module.exports = (app) => {
    app.get('/', (request, response)=>{
        response.send(`Welcome to Newton! You are running your server at ${settings.port}`);
    });
    app.use('/mytest', myAppRouter);
    //Put your other routes/routers here
}
