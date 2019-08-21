const {Command, flags} = require('@oclif/command')
const fs = require('fs');
const path = require('path');

let BASEDIR = path.join(__dirname, "/../");

class StartProject extends Command {
    async run() {
        const {flags} = this.parse(StartProject);
        const {args} = this.parse(StartProject);
        const projectName = args.projectName;
        this.log(`Running newton startproject for`, args.projectName)

        //Create project Directory
        let projectDir = await fs.mkdir(projectName, err => {
            if(err){
                this.log(err);
            }
            else{
                this.log(`Created ${projectName} directory.`);
            }
        });
        //Initialize Node Project
        await fs.readFile(BASEDIR +'newtonTemplate/newtonPackage.json', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/projectName/g, projectName)
                fs.writeFile(projectName + '/'+'package.json', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created package.json for ${projectName}.`)
                    }
                });
            }
        });

        //Create app.js
        await fs.readFile(BASEDIR +'newtonTemplate/app.js', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/projectName/g, projectName)
                fs.writeFile(projectName + '/'+'app.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created app.js for ${projectName}.`)
                    }
                });
            }
        });

        //Create project
        let mainDir = await fs.mkdir(projectName + '/main', err => {
            if(err){
                this.log(err);
            }else{
                this.log(`Created main directory.`);
            }
        })

        //Create main/settings.js
        await fs.readFile(BASEDIR + 'newtonTemplate/newtonProject/settings.js', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                let randomHash = 'RANDOM';
                data = data.replace(/projectName/g, projectName).replace('someSecretKey', randomHash);

                fs.writeFile(projectName + '/main/settings.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created main/settings.js for ${projectName}.`)
                    }
                });
            }
        });

        //Create main/db.js
        await fs.readFile(BASEDIR + 'newtonTemplate/newtonProject/db.js', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/projectName/g, projectName)
                fs.writeFile(projectName + '/main/db.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created main/db.js for ${projectName}.`)
                    }
                });
            }
        });

        //Create main/routes.js
        await fs.readFile(BASEDIR + 'newtonTemplate/newtonProject/routes.js', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/projectName/g, projectName)
                fs.writeFile(projectName + '/main/routes.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created main/routes.js for ${projectName}.`)
                    }
                });
            }
        });

        //Create main/views.js
        await fs.readFile(BASEDIR + 'newtonTemplate/newtonProject/views.js', 'utf-8', (err, data)=>{
            if(err){
                this.log(err);
            }else{
                data = data.replace(/projectName/g, projectName)
                fs.writeFile(projectName + '/main/views.js', data, (err, data)=>{
                    if(err){
                        this.log(err);
                    }else{
                        this.log(`Created main/views.js for ${projectName}.`)
                    }
                });
            }
        });
    }
}

StartProject.description = `Create a Newton Project`
StartProject.args = [
    {
        name:'projectName',
        required: true
    }
];
StartProject.flags = {
  type: flags.string({char: 't', description: 'Get started with default or custom'}),
}

module.exports = StartProject
