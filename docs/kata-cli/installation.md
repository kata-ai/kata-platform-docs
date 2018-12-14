---
id: kata-cli-installation
title: Installation Kata CLI
next: kata-cli-command-listings
---

Kata Command Line Interface (Kata CLI) is a tool for creating bots with Kata Markup Language (Kata ML) and helps managing the bots with command line/shell of various operating systems.
For more information, check our website ([http://kata.ai/en](http://kata.ai/en)).

## Installation

To install Kata-CLI in global mode, run this command in your terminal:

```sh-session
$ npm install -g kata-cli
```

This is the preferred method to install Kata-CLI, as it will always install the most recent stable release.

## Upgrading to 2.0

We upgraded Kata-CLI version into 2.0 along with our Platform to 3.0. There are a number of small backwards incompatible changes with version 2.0. See the full descriptions [here](https://github.com/kata-ai/kata-cli/blob/develop/CHANGELOG.md). _Make sure to update Kata-CLI to our latest stable version before doing some fun with your Bot_.

```sh-session
// check kata-cli current version
$ kata --version
Kata CLI version 1.2.3
```

```sh-session
// upgrade kata-cli to the latest version
$ npm i -g kata-cli
```

or to be exact, you can add `@version-number`

```sh-session
$ npm i -g kata-cli@2.x.x
```

Then, check kata-cli upgraded version.

```sh-session
$ kata --version
Kata CLI version 2.0.4
```

In Kata-CLI 2.0, we introduce Project Environment on the top of the Bots, NLU and CMS. Hence, before running Kata-CLI main command, such as: `kata init`,`kata push`, `kata console`, etc., user have to define the Project that they are working on using this command.

```
$ kata select-project
```
