const {Command, flags} = require('@oclif/command')

class CreateSuperUser extends Command {
  async run() {
      this.log(`Running newton createsuperuser`)
  }
}

CreateSuperUser.description = `Create a SuperUser`

module.exports = CreateSuperUser
