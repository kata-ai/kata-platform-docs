---
id: kata-cli-best-practice
title: Best Practice
prev: kata-cli-command-listings
---

We hope that you can get a smooth experience in working with Kata-CLI by following several best practice steps:

## 1. Login to the platform

First of all, we need to login into platform using `kata login`

```
➜ kata login
? username:  your-username
? password:  *************
Logged in as your-username
```

## 2. Create the Project

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

## 3. Create the Bot

Once the project is selected, then it is the turn to build the bot!

```shell
➜ kata init your-bot-name
```

This command will generate a `bot.yml` file containing a simple hi-bot, as the first revision of your bot.

To see the list of bot revisions, run this command:

```shell
➜ kata-revisions
```

## 4. Push your bot changes

Customize your bot on `bot.yml` file, then push the bot:

```shell
➜ kata push
Push Bot Success. Revision : 6bb61b7
```

## 5. Make a conversation with your bot!

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

## 6. Logout

Congratulations that you finish your first revision of the bot. Now, it is the time to logout from the platform.

```shell
➜  kata logout
```
