newton
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/newton.svg)](https://npmjs.org/package/newton)
[![Downloads/week](https://img.shields.io/npm/dw/newton.svg)](https://npmjs.org/package/newton)
[![License](https://img.shields.io/npm/l/newton.svg)](https://github.com/tdsprogramming/newton/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g newton
$ newton COMMAND
running command...
$ newton (-v|--version|version)
newton/1.0.0 win32-x64 node-v10.13.0
$ newton --help [COMMAND]
USAGE
  $ newton COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`newton createsuperuser`](#newton-createsuperuser)
* [`newton help [COMMAND]`](#newton-help-command)
* [`newton startapp APPNAME`](#newton-startapp-appname)
* [`newton startproject PROJECTNAME`](#newton-startproject-projectname)

## `newton createsuperuser`

Create a SuperUser

```
USAGE
  $ newton createsuperuser
```

_See code: [src\commands\createsuperuser.js](https://github.com/tdsprogramming/newton/blob/v1.0.0/src\commands\createsuperuser.js)_

## `newton help [COMMAND]`

display help for newton

```
USAGE
  $ newton help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `newton startapp APPNAME`

Create a Newton App

```
USAGE
  $ newton startapp APPNAME
```

_See code: [src\commands\startapp.js](https://github.com/tdsprogramming/newton/blob/v1.0.0/src\commands\startapp.js)_

## `newton startproject PROJECTNAME`

Create a Newton Project

```
USAGE
  $ newton startproject PROJECTNAME

OPTIONS
  -t, --type=type  Get started with default or custom
```

_See code: [src\commands\startproject.js](https://github.com/tdsprogramming/newton/blob/v1.0.0/src\commands\startproject.js)_
<!-- commandsstop -->
