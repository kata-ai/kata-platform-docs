---
id: integration-chatbot-with-nl-studio
title: Integration Chatbot with NL Studio Tutorial
prev: nl-studio-tutorial
---

## Introduction

In this tutorial, we will create a simple conversation bot and integrated to NL studio. For pre-condition, you must create a bot by follow this tutorial in here [Bot studio tutorial](/tutorial/bot-studio/). You will create a NLModel which able to process pizza ordering orders. Further explanation for NLStudio, you may see in here [NL Studio Guideline](/tutorial/nl-studio/)

Let's start !

## Create Entity

Assumed you already logged in and visit your project. Go to NL Studio menu by click NL menu
![bnl-1](/images/tutorial/bot-nl/bnl-1.png)

Then, click on Create Entity to start.
![bnl-2](/images/tutorial/bot-nl/bnl-2.png)

Click on Create. Here is a view after you create intent `entity`
![bnl-3](/images/tutorial/bot-nl/bnl-3.png)

## Conduct Data Training

After you created the entity, the next step is data training. You have to enter a sentence to train `intent` trait. Click on Training menu
![bnl-4](/images/tutorial/bot-nl/bnl-4.png)

Then, you are able to enter sentence to train data. Put a sentence “I want to order pizza” and press enter in your keyboard
![bnl-5](/images/tutorial/bot-nl/bnl-5.png)

Afterward, click on Add Trait and select `intent:order` .
![bnl-6](/images/tutorial/bot-nl/bnl-6.png)

Next, click “Train” button to train entity you has created. The final display will look like this
![bnl-7](/images/tutorial/bot-nl/bnl-7.png)

Entity shall train a lot for precisely understanding user's input, if you're doing training data in several sentences.
![bnl-8](/images/tutorial/bot-nl/bnl-8.png)

If you've done enough training, you are able to try testing by click "Test NLU" button. This feature will support you to predict more data.
![bnl-9](/images/tutorial/bot-nl/bnl-9.png)

## Publish Your NL

Then, publish your NL for save training data and NL model.
![bnl-10](/images/tutorial/bot-nl/bnl-10.png)

## Integration with NLUs

Next step is start integration with your bot using created entity. To get started, go to Bot menu and click NLUs sub-menu.
![bnl-11](/images/tutorial/bot-nl/bnl-11.png)

Click on Create NLU and fill in as follow
![bnl-12](/images/tutorial/bot-nl/bnl-12.png)

NLUid is found in NL menu in Setting. Click on NL menu, then click Settings
![bnl-13](/images/tutorial/bot-nl/bnl-13.png)

Afterward, copy NLUid into NLUid field in Create NLU drawer as follow
![bnl-14](/images/tutorial/bot-nl/bnl-14.png)

Click Create to continue. Successfully created NLUs will be appeared as follow
![bnl-15](/images/tutorial/bot-nl/bnl-15.png)

## Integration with Bot

Next, go to Conversation Flows and click on tab Intents. Select `orderTxt` that you've created earlier to handle user input (you may see this tutorial [Bot studio tutorial](/tutorial/bot-studio/)), then add a new classifier as below
![bnl-16](/images/tutorial/bot-nl/bnl-16.png)

Click Update to save updated Intent.

## Testing Your Bot

Click on Publish bot to save your bot.
![bnl-17](/images/tutorial/bot-nl/bnl-17.png)

Voila, your bot is successfully integrated. Let's start in bot emulator
![bnl-18](/images/tutorial/bot-nl/bnl-18.png)

Then testing to your channel
