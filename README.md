hydro-homies-cli
================

Get quick water facts and monitor water intake

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hydro-homies-cli.svg)](https://npmjs.org/package/hydro-homies-cli)
[![Downloads/week](https://img.shields.io/npm/dw/hydro-homies-cli.svg)](https://npmjs.org/package/hydro-homies-cli)
[![License](https://img.shields.io/npm/l/hydro-homies-cli.svg)](https://github.com/caelinsutch/hydro-homies-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hydro-homies-cli
$ hydro COMMAND
running command...
$ hydro (-v|--version|version)
hydro-homies-cli/0.0.0 darwin-x64 node-v8.11.3
$ hydro --help [COMMAND]
USAGE
  $ hydro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hydro hello [NEWFACT]`](#hydro-hello-newfact)
* [`hydro help [COMMAND]`](#hydro-help-command)
* [`hydro tracker [FILE]`](#hydro-tracker-file)

## `hydro hello [NEWFACT]`

Gives you a random quick fact about water and allows you to submit new facts

```
USAGE
  $ hydro hello [NEWFACT]

OPTIONS
  -h, --help             show CLI help
  -s, --newFact=newFact  Submit Fact

EXAMPLE
  $ hydro quickfact
  Water covers 71% of the earth!
  $ hydro quickfact -s Your New Waterfact
```

_See code: [src/commands/quickfact.ts](https://github.com/caelinsutch/hydro-homies-cli/blob/v0.0.0/src/commands/hello.ts)_

## `hydro help [COMMAND]`

display help for hydro

```
USAGE
  $ hydro help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `hydro tracker [FILE]`

describe the command here

```
USAGE
  $ hydro tracker [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/tracker.ts](https://github.com/caelinsutch/hydro-homies-cli/blob/v0.0.0/src/commands/tracker.ts)_
<!-- commandsstop -->
