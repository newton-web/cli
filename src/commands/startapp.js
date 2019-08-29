const {Command, flags} = require('@oclif/command')
const fs = require('fs');
const path = require('path');

let BASEDIR = path.join(__dirname, "/../");


class StartApp extends Command {
    async run() {
        const {flags} = this.parse(StartApp);
        const {args} = this.parse(StartApp);
        const appName = args.appName;
        this.log(`Running newton startapp for`, args.appName);

        await fs.readFile('package.json', 'utf-8', async (err, data) => {
            if(err || !JSON.parse(data).hasOwnProperty('newtonProject')){
                this.log("Must run 'newton startapp' within a Newton project");
            }
            else{

                this.createApp(appName);
            }
        })
    }

    async createApp(appName){
        let appDir = await fs.mkdir(appName, err => {
            if(err){
                this.log(err);
            }
            else{
                this.log(`Created ${appName} directory!`);
            }
        });
        const data = "";
        await fs.readFile(BASEDIR +'newtonTemplate/newtonApp/routes.js', 'utf-8', async (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/appName/g, appName)
                await fs.writeFile(appName + '/'+'routes.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created routes.js for ${appName}.`)
                    }
                });
            }
        });

        await fs.writeFile(appName+'/controllers.js', data, (err, data)=>{
            if(err){
                this.log(err);
            }
            else{
                this.log(`Created controllers.js`)
            }
        });
        await fs.writeFile(appName+'/models.js', data, (err, data)=>{
            if(err){
                this.log(err);
            }
            else{
                this.log(`Created models.js`)
            }
        });

    }
}

StartApp.description = `Create a Newton App`

StartApp.args = [
    {
        name:'appName',
        required: true
    }
];

module.exports = StartApp
