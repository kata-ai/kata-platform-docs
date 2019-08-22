---
id: channel-fb-messenger
title: Facebook Messenger
prev: channel-telegram
---

In this section, we will learn to connect our bot with Facebook Messenger. You can use the bot you created in the [Hello World tutorial](/tutorial/hello-world/) to start integrating your bot with Telegram.

## Create a Messenger App with Facebook Developer Console

After you have successfully created your Facebook Developer account, you can continue to deploy on Facebook Messenger. Enter https://developers.facebook.com/ and click on the top right to create a new application.

[...]

You can now integrate Facebook Messenger with your newly created app. Create a new product and click "Set Up" in "Messenger".

[...]

Next, create an app page by going to the advanced settings. In the "App Page" section, click "Create New Page".

[...]

You can now set up your page by following through the page creation steps. You can also skip these steps and do them later if you want. Once finished, you will now be redirected to your newly-created Facebook page.

[...]

Now go back to the Settings menu in Facebook Developer Console and navigate to Access Token. In this step, you will be asked to choose the Facebook page to create the Page Access Token for. Choose the page that was created before, then click on the “Edit Permissions” button for allowing the bot to access the page.

[...]

Enable the "Manage and access Page conversations in Messenger" permission, and click OK to finish setting permissions.

[...]

Your new Page Access Token is now created. Copy and save this for later when we'll use it to create the channel in Kata Platform.

[...]

## Create Facebook Messenger Channel in Kata Platform

Open your Kata Platform and choose the project you wanted to integrate then choose "Deploy" menu to get to deployment. Choose "Environment" and choose your desired environment and then click it. Choose "Create Channel" button.

[...]

In the Create Channel screen, choose FB Messenger as the channel type, and copy the "Page Access Token" from before.

[...]

You will now need an App Secret key. To get it, go back to the Facebook Developer Console your app and open the Basic settings.

Click "Show" button beside the App Secret field to reveal your App Secret key. You might be asked to enter your account password. Copy the App Secret you get to the remaining "App Secret" field in Kata Platform and click "Create".

Once you created your Messenger Facebook channel, a webhook URL will be created. You need to enter this into your Facebook Messenger product to be able to send/receive messages. To do this, go to the "Webhooks" section in the Facebook Developer Console settings, then click "Subscribe to events".

You will see a dialog box which we have to fill the "Callback URL" and the "Verify Token" fields. We need to check the "messages" and "messaging_postbacks" too.
