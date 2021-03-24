---
id: channel-fb-messenger
title: Facebook Messenger
next: channel-slack
---

Facebook Messenger (commonly known as Messenger) is a messaging app and platform developed by Facebook. In this section, we will learn to connect our bot with Messenger. You can use the bot you created in the [Hello World tutorial](/tutorial/hello-world/) to start integrating your bot with Messenger.

## Create Messenger Channel in Kata Platform

First, login to Kata Platform and select the project that you want to integrate with Messenger. Then, go to the Deployment page by selecting “Deploy” > “Overview”. And then, click “New Deployment” to make a new deployment.

![f1](./images/fb/f1.png)

![f2](./images/fb/f2.png)

Move to Environment page. In the Environments screen, select your desired environment to create the Messenger channel.
Click “Create Channel”. You will now see the “Create Channel” screen. Insert the Deployment Version and Environment URL. Go to “+Create Channel” and select Messenger as the channel type. You can find the Page Access Token and App Secret in Facebook Developer.

![f3](./images/fb/f3.png)

![f4](./images/fb/f4.png)

![f5](./images/fb/f5.png)

## Setup Webhook URL

First, you have to sign in (register first, if you don’t have a Facebook account) to https://developers.facebook.com/ and then, create a new app for your bot.

![f6](./images/fb/f6.png)

Go to “Messenger” → “Settings”.  You will see Access Tokens field. You need to add a Facebook Page. You can click “Create New Page” If you don’t have Page for your bot.

![f7](./images/fb/f7.png)

![f8](./images/fb/f8.png)

![f9](./images/fb/f9.png)

Click “Generate Token”. Here you can find the Access Token. Copy the Token and paste it to the new channel’s field in Kata Platform you’ve made before.

![f10](./images/fb/f10.png)

![f11](./images/fb/f11.png)

Go to “Settings” → “Basic” to find the App Secret. Click “Show”. Copy the App Secret and paste it to the new channel’s field in Kata Platform you’ve made before.

![f12](./images/fb/f12.png)

Then, move to Webhooks field in the “Messenger” → “Settings”. Fill the “Callback URL” with “Webhook” from channel you’ve made in Kata Platform. And fill “Verify Token” with “Challenge Token” form channel you’ve made in Kata Platform. Just copy and paste it.

After that, click “Add Subscription” and checklist the “messages” box and “messaging_postbacks” box.

![f13](./images/fb/f13.png)

![f14](./images/fb/f14.png)

![f15](./images/fb/f15.png)

You’re all set! Let’s try the chatbot!

![f16](./images/fb/f16.png)

It works! You can now share your newly created chatbot with your friends.
