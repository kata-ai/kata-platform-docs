---
id: telegram-integration
title: Integration with Telegram
prev: fb-messenger-integration
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3NRZcyl7erM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In this tutorial, we will use API Bot template to inform weather in big cities and deploy it to Telegram.

## Create Chatbot

Firstly, go to bot studio in Kata Platform and click "Create with This Template" in API Bot card. Fill in all fields as follows:

![tel-1](/images/tutorial/connecting-with-telegram/tel-1.png)

Then, you have to test you chatbot by creating a deployment. Go to deployment menu in sidebar and click "Create Deployment".

![tel-2](/images/tutorial/connecting-with-telegram/tel-2.png)

![tel-3](/images/tutorial/connecting-with-telegram/tel-3.png)

## Integration with Telegram

You have to download telegram app in desktop (download link : https://desktop.telegram.org/) before integration process. Remember, you must have Telegram account to sign in. After you signed in to Telegram, register your chatbot with BotFather [https://telegram.me/BotFather](https://telegram.me/BotFather).

![tel-4](/images/tutorial/connecting-with-telegram/tel-4.png)

Type in `/newbot` and BotFather will ask your chatbot name.

![tel-5](/images/tutorial/connecting-with-telegram/tel-5.png)

Lastly, you will ask to enter your chatbot username.

![tel-6](/images/tutorial/connecting-with-telegram/tel-6.png)

When you're done, BotFather will give you the HTTP API access token.

![tel-7](/images/tutorial/connecting-with-telegram/tel-7.png)

## Create Channel with Telegram

In Kata Platform, you can add Channels in a Deployment. Go to "Deployment" menu and click "View Channel". Here you can add new Channel.

![tel-8](/images/tutorial/connecting-with-telegram/tel-8.png)

On this step, you can paste the HTTP API access token given by BotFather in the previous step.

![tel-9](/images/tutorial/connecting-with-telegram/tel-9.png)

Click on the eye icon to open generated webhook on Kata Platform. Copy this Webhook URL for the next step.

![tel-10](/images/tutorial/connecting-with-telegram/tel-10.png)

Open a new tab and enter this URL.

```
https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}
```

Remember to change `my_bot_token` into your own bot token and the webhook URL from Kata Platform into the `url_to_send_updates_to`.

![tel-11](/images/tutorial/connecting-with-telegram/tel-11.png)

Click "Go" or press enter on keyboard. You may see successful message as follows.

![tel-12](/images/tutorial/connecting-with-telegram/tel-12.png)

You're all set! Let's try our chatbot in Telegram by searching your bot username.

Type "info cuaca" to your bot and continue to city name.

![tel-13](/images/tutorial/connecting-with-telegram/tel-13.png)

Congratulations! Your bot is well prepared and you may try it in Telegram desktop or mobile.
