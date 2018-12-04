---
id: kata-cli-command-listings
title: Command Listings
prev: kata-cli-installation
next: kata-cli-best-practice
---

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

## Command as **team**

| Commands                                       | Functionalities                  |
| ---------------------------------------------- | -------------------------------- |
| `kata add-member <userName> [options] --admin` | to assign user as the teammember |
| `kata remove-member <userName>`                | to remove member from the team   |

The list of command below is accessible by user with role as **user** and **team**:

## **Project environment related command**

We implement several new commands to manage Project:

| Commands              | Functionalities                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------- |
| `kata create-project` | to create a project                                                                       |
| `kata list-project`   | to display current projects that you have                                                 |
| `kata select-project` | to select project that you want to use, any bot operation will be related to that project |

## **Bot related command**

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

## **Deprecated Commands**

Sad to say that there are several commands which are no longer in use :(

### _Temporary deprecated:_

- `kata deploy <name> [version]`
- `kata list-deployment`
- `kata add-channel [options] <name> <channelName>`
- `kata remove-channel <name> <channelName>`

### _Permanently deprecated:_

- `kata session-get <id> [deploymentId]`
- `kata session-create <id> [deploymentId]`
- `kata session-update <id> [deploymentId]`
- `kata session-delete <id> [deploymentId]`
