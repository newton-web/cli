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
$ npm install -g @newton-web/cli
$ newton-admin COMMAND
running command...
$ newton-admin (-v|--version|version)
@newton-web/cli/1.0.0 win32-x64 node-v10.13.0
$ newton-admin --help [COMMAND]
USAGE
  $ newton-admin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`newton-admin createsuperuser`](#newton-admin-createsuperuser)
* [`newton-admin help [COMMAND]`](#newton-admin-help-command)
* [`newton-admin startapp APPNAME`](#newton-admin-startapp-appname)
* [`newton-admin startproject PROJECTNAME`](#newton-admin-startproject-projectname)

## `newton-admin createsuperuser`

Create a SuperUser

```
USAGE
  $ newton-admin createsuperuser
```

_See code: [src\commands\createsuperuser.js](https://github.com/codexplore-io/newton/blob/v1.0.0/src\commands\createsuperuser.js)_

## `newton-admin help [COMMAND]`

display help for newton-admin

```
USAGE
  $ newton-admin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `newton-admin startapp APPNAME`

Create a Newton App

```
USAGE
  $ newton-admin startapp APPNAME
```

_See code: [src\commands\startapp.js](https://github.com/codexplore-io/newton/blob/v1.0.0/src\commands\startapp.js)_

## `newton-admin startproject PROJECTNAME`

Create a Newton Project

```
USAGE
  $ newton-admin startproject PROJECTNAME

OPTIONS
  -t, --type=type  Get started with default or custom
```

_See code: [src\commands\startproject.js](https://github.com/codexplore-io/newton/blob/v1.0.0/src\commands\startproject.js)_
<!-- commandsstop -->
