---
id: kata-cli-introduction
title: Introduction to Kata-CLI 2.0
---

Kata Command Line Interface (Kata CLI) is a tool for creating bots with Kata Markup Language (Kata ML) and helps managing the bots with command line/shell of various operating systems.
For more information, check our website (http://kata.ai/en).

Soon, we will implement Kata-CLI 2.0 because of our updated platform to 3.0. In Kata-CLI 2.0, we introduce Project Environment on the top of the Bots. Hence, before running Kata-CLI main command, such as: `kata init`,`kata push`, `kata console`, etc., user have to define the Project that they are working on.

# Changelog

- [Changelog](CHANGELOG.md)

# Installation

To install Kata-CLI in global mode, run this command in your terminal:

```shell
npm install -g Kata-CLI
```

This is the preferred method to install Kata-CLI, as it will always install the most recent stable release.

# Command Listings

Use `kata --help` into your command line to see the list of commands offered by Kata-CLI.

The list of command below is accessible by user with role as **user** :

| Commands                      | Functionalities                                 |
| ----------------------------- | ----------------------------------------------- |
| `kata login [options]`        | the parameter `options` can be `user` or `team` |
| `kata whoami`                 | to see the current user login informations      |
| `kata pwd`                    | to change user's password                       |
| `kata create-team <teamName>` | to create team                                  |
| `kata logout`                 | to logout from the platform                     |

This command is accessible by user with role as **admin** :

| Commands           | Functionalities                      |
| ------------------ | ------------------------------------ |
| `kata create-user` | to set spesific role and create user |

Command as **team** :

| Commands                                       | Functionalities                  |
| ---------------------------------------------- | -------------------------------- |
| `kata add-member <userName> [options] --admin` | to assign user as the teammember |
| `kata remove-member <userName>`                | to remove member from the team   |

The list of command below is accessible by user with role as **user** and **team**:

**Project environment related command**
We implement several new commands to manage Project:

| Commands              | Functionalities                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------- |
| `kata create-project` | to create a project                                                                       |
| `kata list-project`   | to display current projects that you have                                                 |
| `kata select-project` | to select project that you want to use, any bot operation will be related to that project |

**Bot related command**
Please notice that there are also updated commands from the Bot Environment:

| Commands                                             | Functionalities                                                                          |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `kata init <botName>`                                | to initialize the bot                                                                    |
| `kata revisions`                                     | to list the revisions of the bot                                                         |
| `kata config-view`                                   | to view user configurations                                                              |
| `kata list-bots`                                     | to list the bots                                                                         |
| `kata push`                                          | to push the bot revision                                                                 |
| `kata pull [revision]`                               | to pull the bot with specified name and version                                          |
| `kata remove-bot`                                    | to delete selected bot                                                                   |
| `kata test [fileName]`                               | to run a test for the bot                                                                |
| `kata console [revision]`                            | to converse with the bot                                                                 |
| `kata deploy <botName> [version]`                    | to deploy the bot                                                                        |
| `kata add-channel [options] <botName> <channelName>` | to add bot channel                                                                       |
| `kata remove-channel <botName> <channelName>`        | to remove bot channel                                                                    |
| `kata drop <botName>`                                | to drop bot                                                                              |
| `kata set <prop> <value>`                            |
| `kata switch <roleType> [userName or teamName]`      | to switch between `user` and `team` role. Parameter <roleType> must be `user` or `team`. |

**Deprecated Commands**

Sad to say that there are several commands which are no longer in use :(

_Temporary deprecated:_

- `kata deploy <name> [version]`
- `kata list-deployment`
- `kata add-channel [options] <name> <channelName>`
- `kata remove-channel <name> <channelName>`

_Permanently deprecated:_

- `kata session-get <id> [deploymentId]`
- `kata session-create <id> [deploymentId]`
- `kata session-update <id> [deploymentId]`
- `kata session-delete <id> [deploymentId]`

# Best Practice

We hope that you can get a smooth experience in working with Kata-CLI by following several best practice steps:

**1. Login to the platform**

First of all, we need to login into platform using `kata login`

```
➜ kata login
? username:  your-username
? password:  *************
Logged in as your-username
```

**2. Create the Project**

Welcome to your workspace. Now, it is time to create a project on it.

```shell
➜ kata create-project
? Project name: your-project-name
? Timezone (UTC) 7
? Project description: your-project-desc
? NLU Language id
? Is private Nlu? Yes
Project "your-project-name" (5c9ea2b9-ab79-4aa8-aaa0-a831bbb175de) is successfully created
```

Voila, your first project is there. To see the list of your project, run this command:

```shell
➜ kata select-project
```

then select the existing projects that you're gonna working on.

**3. Create the Bot**

Once the project is selected, then it is the turn to build the bot!

```shell
➜ kata init your-bot-name
```

This command will generate a `bot.yml` file containing a simple hi-bot, as the first revision of your bot.

To see the list of bot revisions, run this command:

```shell
➜ kata-revisions
```

**4. Push your bot changes**

Customize your bot on `bot.yml` file, then push the bot:

```shell
➜ kata push
Push Bot Success. Revision : 6bb61b7
```

**5. Make a conversation with your bot!**

Once you pushed the latest revision of your bot, that means you are ready to test a conversation with your bot. Run this command on your terminal

```shell
➜ kata console
your-bot-name>text("hi")
{ messages:
   [ { type: 'text',
       content: 'hi',
       id: 'd5a1a010-fb60-42cf-96c8-c648fc557443',
       intent: 'greeting',
       attributes: {} } ],
  responses:
   [ { type: 'text',
       content: 'hialo!',
       action: 'text',
       id: '1f7caf54-ee6f-4aa6-9696-bdcced9e406a',
       refId: 'd5a1a010-fb60-42cf-96c8-c648fc557443',
       flow: 'hello',
       intent: 'greeting' } ],
  session:
   { id: 'test~from~console',
     states: {},
     contexes: {},
     history: [],
     current: null,
     meta: { lastFlow: 'hello', lastState: 'greet', end: true },
     timestamp: 0,
     data: {} },
  duration: 86 }
your-bot-name>
(To exit, press ^C again or type .exit)
```

Kata-CLI will create a session that alive along the conversation and generate a `.katasession` file in your home directory for further debugging (if needed).

To view your current session, you can either run this command:

```shell
➜  cat ~/.katasession
{"id":"test~from~console","states":{},"contexes":{},"history":[],"current":null,"meta":{"lastFlow":"hello","lastState":"other","end":true},"timestamp":0,"data":{}}%
```

or this command, for a better JSON alignment:

```shell
➜  `kata console`
    your-bot-name>current()
    { id: 'test~from~console',
    states: {},
    contexes: {},
    history: [],
    current: null,
    meta: { lastFlow: 'hello', lastState: 'other', end: true },
    timestamp: 0,
    data: {} }
```

**6. Logout**

Congratulations that you finish your first revision of the bot. Now, it is the time to logout from the platform.

```shell
➜  kata logout
```
