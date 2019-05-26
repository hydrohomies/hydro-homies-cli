import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'

import {Firebase} from '../services/firebase'

export default class Signup extends Command {
  static description = 'Signup for Hydro-Homies'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const email = await cli.prompt("What's Your Email?")
    const username = await cli.prompt('Choose your username')
    const password = await cli.prompt('Enter your password', {type: 'hide'})
    status = Firebase.createUserEmailPassword(email, password, username)
  }
}
