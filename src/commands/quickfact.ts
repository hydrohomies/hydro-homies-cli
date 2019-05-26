/**
 * Quick facts generator for water
 */

import {Command, flags} from '@oclif/command'

/**
 * Description of new command
 */
export default class QuickFact extends Command {
  static description = 'Gives you a random quick fact about water and allows you to submit new facts'
  static waterFacts = [
    '30% of fresh water is in the ground',
    ''
  ]

  /**
   * Example of command use
   */
  static examples = [
    `$ hydro quickfact
Water covers 71% of the earth!
$ hydro quickfact -s Your New Waterfact
`,
  ]
  /**
   * List of flag options possible
   */
  static flags = {
    // Help Flag
    help: flags.help({char: 'h'}),
    // Flag for submitting fact
    newFact: flags.string({char: 's', description: 'Submit Fact'}),
  }

  static args = [{name: 'newFact'}]

  async run() {
    const {args, flags} = this.parse(QuickFact)
    this.log(`Water covers 71% of the ocean`)
    if (flags.newFact || args.newFact) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
