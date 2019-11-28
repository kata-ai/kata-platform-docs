---
id: channel-slack
title: Slack
next: channel-telegram
---

Slack is where work flows. It's where the people you need, the information you share, and the tools you use come together to get things done. In this section, we will learn to connect our bot with Telegram. You can use the bot you created in the [Hello World tutorial](/tutorial/hello-world/) to start integrating your bot with Telegram.

## Create Slack Channel

First thing first, you need to [sign in](https://slack.com/signin) into your Slack Team to create a new
app and get its token.
After logged in, open this [URL:](https://api.slack.com/slack-apps)

1. Click "Start here" then "Create a Slack app"

![Start here](./images/slack/start.png)
![Create Slack Apps](./images/slack/create-slack-app.png)

2. Fill "App Name". choose your "Development Slack Team" and click "Create App"

![App Name](./images/slack/pop_up.png)

3. From "Basic Information" in App Credentials section you can see Verification Token, we will use it Later to deploy our bot.

![Verification Token](./images/slack/App_credential.png)

4. Open "OAuth & Permissions" and in "Scopes" section you should fill the scope permission by adding below scopes.

![Filling Scopes](./images/slack/scopes_fill_fix.png)

5. Open "Bot User" in Features from the sidebar menu. Fill the "Display name" and "Default username" of your bot. don't forget to set "Always Show My Bot as Online" to "On" and press "Add Bot User" button to finish.

![Bot User](./images/slack/bot_user.png)

6. Go back to "Oauth & Permissions" and Select "Install App to Workspace" then click "Allow".

![Install App to Workspace](./images/slack/install_app.png)
![request_access](./images/slack//request_access.png)

7. Still in the "Oauth & Permissions" you will get "OAuth Access Token" and "Bot User OAuth Access Token". we will use "Bot User OAuth Access Token" to deploy our bot using Kata Platform.

## Create Slack Channnel in Kata Platform

First, login to Kata Platform and select the project that you want to integrate with Telegram. Then, go to the Environment page by selecting "Deploy" > "Environment".

![Platform 3](./images/slack/deploy_kata.png)

In the Environments screen, select your desired environment to create Slack channel.

Click "Create Channel". You will now see the "Create Channel" screen. Insert the channel name, and select Slack as the channel type. Then, copy and paste the previously acquired bot token, and click "Create".

![Create Channel](./images/slack/create_channel.png)
![Select Slack](./images/slack/slack_channel.png)
![Fill Token](./images/slack/bottoken.png)
![Create Token](./images/slack/createbot.png)

## Setup Webhook URL in Slack Bot

Once finished, you will see the newly-created channel in the list. You will also see a Webhook URL for your channel. This webhook URL will be added to the Slack bot. Copy the webhook URL by clicking "View Channel" and clicking the copy button next to the Webhook URL field.

![Copy Webhook](./images/slack/copy_webhoook.png)

Next, back to the browser, and go to "Event Subscriptions" tab then switch "Enable Events" to "on"

![Event Subcriptions](./images/slack/event.png)
![Enable Events](./images/slack/toggle_on.png)

You will see "Request URL" field. Then put the webhook URL that previously copied here.

![Request URL](./images/slack/setwebhook.png)

Expand the "Subscribe to bot events" then add selected User Event like in the below image

![Subscribe bot events](./images/slack/final.png)

Now you can search for your bot in your slack Workspace

![Workspace Search](./images/slack/bot_deployed.png)

It works! You can now share your newly created chatbot with your friends.

![It Works](./images/slack/bot_reply.png)
