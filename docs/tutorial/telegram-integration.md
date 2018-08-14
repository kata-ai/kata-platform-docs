---
id: telegram-integration
title: Integration with Telegram
prev: fb-messenger-integration
next: faq
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3NRZcyl7erM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Telegram as one of the social media that is currently becoming citizen choice, has become an option for a brand to engage the customer. Therefore, this tutorial featured how to connect our chatbot to Telegram. In this tutorial, we will use API Bot template which is a bot to inform weather in big cities such as Jakarta, Bandung and Surabaya.

## Create Chatbot

Firstly, go to bot studio in Kata Platform and click “Create with This Template” in API Bot card. Fill in all fields as below

![tel-1](./images/connecting-with-telegram/tel-1.png)

Then, you have to test you chatbot by creating a deployment. Go to deployment menu in sidebar and click “Create Deployment”

![tel-2](./images/connecting-with-telegram/tel-2.png)

![tel-3](./images/connecting-with-telegram/tel-3.png)

## Integration with Telegram

You have to download telegram app in desktop (download link : https://desktop.telegram.org/) before integration process. Remember, you must have Telegram account to sign in. After you signed in to Telegram, search BotFather account to register your chatbot.

![tel-4](./images/connecting-with-telegram/tel-4.png)

Then, type “/newbot” and BotFather will ask your chatbot name. Feel free to use any name you like.

![tel-5](./images/connecting-with-telegram/tel-5.png)

Lastly, you will ask to enter your chatbot username.

![tel-6](./images/connecting-with-telegram/tel-6.png)

Final step is you will see a bot token to access HTTP API

![tel-7](./images/connecting-with-telegram/tel-7.png)

## Create Channel with Telegram

In this step, you have to create channel in Kata Platform. Go to “Deployment” menu and click “View Channel”. Then, create a channel as below

![tel-8](./images/connecting-with-telegram/tel-8.png)

You have to enter Bot Token which generated from Telegram. Copy the bot token from BotFather window chat. The created channel can be seen as follows.

![tel-9](./images/connecting-with-telegram/tel-9.png)

Click the eye icon to open generated webhook from Kata Platform. You may see a webhook URL. This URL shall be inserted later to Telegram.

![tel-10](./images/connecting-with-telegram/tel-10.png)

Next, open a new tab and enter this URL.

```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}
```

Afterward, change “my_bot_token” into your own bot token. Also, change webhook URL from Kata Platform into the URL.

![tel-11](./images/connecting-with-telegram/tel-11.png)

Click “Go” or press enter on keyboard. You may see successful message as follows.

![tel-12](./images/connecting-with-telegram/tel-12.png)

You're all set ! Let's try our chatbot in Telegram by searching your bot username and start to chat

## Conversation Simulation to User

Search your username and type “info cuaca” and continue to city name.

![tel-13](./images/connecting-with-telegram/tel-13.png)

Congratulation! Your bot is well prepared and you may try it in Telegram desktop or mobile.
