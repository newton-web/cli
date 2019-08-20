const {Command, flags} = require('@oclif/command');
const exec = require('child_process')
class RunServer extends Command{
    async run(){
        const {flags} = this.parse(RunServer);
        const {args} = this.parse(RunServer);
        await fs.readFile('package.json', 'utf-8', async (err, data) => {
            if(err || !JSON.parse(data).hasOwnProperty('newtonProject')){
                this.log("Must run 'newton startapp' within a Newton project");
            }
            else{

            }
        })

    }
}
