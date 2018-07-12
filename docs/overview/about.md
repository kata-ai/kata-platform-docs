---
id: about
title: About Kata Bot Platform
prev: release-notes
next: getting-started
---

Kata Bot Platform is a platform for building enterprise scale bots with ease. The platform allows you to:

- Build your bots using Bot Studio or KataML and Javascript
- Deploy and connect your bot to Messaging Services
- Create and train Natural Language Understanding Models using NL Studio
- Monitor your bots with our Bot Analytics
- Do automated testing with our testing framework

## What is Chatbot

A bot is an application that interact with user in a conversational way. A bot react to a message sent by user with a response. What truly differentiate bot and traditional application is the statefulness: a bot usually keep track of the context of the conversation as messages without context are normally meaningless.

![Figure 1](./images/about/figure-1.png)

In Kata Bot Platform, the processing of user message is divided into three pipelined steps:

1.  Intent Recognition Converting raw message into structured information (in form of intent and attributes)
2.  State Mapping Determining the state of the bot and the context variables
3.  Choosing Action Generate response by executing defined action

![Figure 2](./images/about/figure-2.png)

## Create Once, Chat Anywhere

Kata Bot Platform allows you to craft highly capable bot. With \*create once, chat anywhere\* concept, the platform completely abstract messaging specific capabilities like displaying carousel, button, image etc. so that you can fully focus on creating the best bot experience. We manage the infrastructure for you, so you don't have to worry about scaling to millions of users.

![Figure 3](./images/about/figure-3.png)

## Kata Markup Language

Developing a simple chatbot is easy, but how do you scale with ever growing features and capabilities? To answer that we developed KataML, a YAML based markup language tailored for bot builders. Writing your bots in KataML allows you to focus on the user experience instead of the code structure, and you will less likely to produce spaghetti code while growing your bot capabilities. KataML also let you embed javascript code in case you need more powerful scripting capability.

![Figure 4](./images/about/figure-4.png)

## Kata CLI

Meet your devops assistant: **Kata CLI.** If you are a developer and already using git or heroku, you will be familiar with Kata CLI. With the CLI, you can easily deploy, update and integrate your bots. Just type the appropriate command in the terminal.

![Figure 5](./images/about/figure-5.png)

## Automated Testing

The Bot Platform includes a YAML based testing framework for developers and QA to easily write automated testing. With this, you can ensure the robustness of the bot you built.
