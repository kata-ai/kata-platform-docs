---
id: fb-messenger-integration
title: Integration with FB Messenger
prev: bot-template-tutorial
next: connecting-with-telegram
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/57JO8sPdlLQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In this tutorial, we will learn to connect our bot with Facebook Messenger which is a conversation platform created by Facebook. Since Kata Platform provides bot template, we will use API Bot template for case study.

## Create Conversation Bot

Firstly, click "Create with This Template" and modify the bot name and adjusting your timezone.

![fb-1](/images/tutorial/fb-messenger-integration/fb-1.png)

Afterwards, find a bot which has "weatherbotTesting" title and click to open the detail. Then, you have to create a deployment.

![fb-2](/images/tutorial/fb-messenger-integration/fb-2.png)

## Integration with Facebook Developer Console

After you have successfully added a deployment, you can continue to try testing on Facebook Messenger platform. Enter https://developers.facebook.com/ and click on the top right to create a new application

![fb-3](/images/tutorial/fb-messenger-integration/fb-3.png)

Then, enter the content as follows

![fb-4](/images/tutorial/fb-messenger-integration/fb-4.png)

After you add an App ID to Facebook Developer Console account, you must add "Product" named "Messenger" to configure your bot with Facebook Messenger platform.

![fb-5](/images/tutorial/fb-messenger-integration/fb-5.png)

For your bot installation, you must create a Facebook page located in the "Settings" section and the "Advanced" sub-menu. Follow the instructions from Facebook to create a Facebook page.

![fb-6](/images/tutorial/fb-messenger-integration/fb-6.png)

First of all, you must select "Page Category". Choose a category from your Facebook page by adjusting your needs. You can fill in the content as follows and click "Continue" to continue.

![fb-7](/images/tutorial/fb-messenger-integration/fb-7.png)

When you've created the page successfully you'll be redirected to that page.

![fb-8](/images/tutorial/fb-messenger-integration/fb-8.png)

Then, go to the Settings menu and navigate to "Token Generation". In this step, you will be asked to choose a Facebook page.

![fb-9](/images/tutorial/fb-messenger-integration/fb-9.png)

Then, Facebook Platform will display "Page Access Token" which will be filled into your bot.

![fb-10](/images/tutorial/fb-messenger-integration/fb-10.png)

## Create Channel with Facebook Messenger Type

Next step is you have to create a channel for integration with Facebook Messenger.

![fb-11](/images/tutorial/fb-messenger-integration/fb-11.png)

We could see that there is an empty field named "App Secret" in Kata Platform. This section can be found in the "Settings" menu with the "Basic" sub-menu in Facebook Developer Console. Similar to the previous step, copy the "App Secret" code from Facebook platform into Kata platform.

![fb-12](/images/tutorial/fb-messenger-integration/fb-12.png)

![fb-13](/images/tutorial/fb-messenger-integration/fb-13.png)

Once you created your Messenger Facebook channel, you still need a webhook link from the Kata platform. To install the webhook link, enter the "Settings" sub-menu and find the "Webhook" section in Facebook Developer Console. Next, click "Setup webhooks" to continue.

![fb-14](/images/tutorial/fb-messenger-integration/fb-14.png)

You will see a dialog box with Callback URL and Verify Token fields to fill.

![fb-5](/images/tutorial/fb-messenger-integration/fb-15.png)

You can get the Webhook information from the Webhook field in Channel Detail.

![fb-16](/images/tutorial/fb-messenger-integration/fb-16.png)

Then, to fill in the "Verify Token" you can retrieve it in the "Challenge Token" field.

![fb-17](/images/tutorial/fb-messenger-integration/fb-17.png)

Then, you have to choose which Facebook page to be connected with the webhook.

![fb-18](/images/tutorial/fb-messenger-integration/fb-18.png)

## Conversation Simulation for Users

In order to test the direct conversation on Facebook Messenger, we have to configure messaging mechanism in Facebook page. This stage will be divided into 2 stages according to the user interface. First of all, go to your Facebook page and click on "Add button"

![fb-19](/images/tutorial/fb-messenger-integration/fb-19.png)

Choose "Send Message" in "Contact you" section.

![fb-20](/images/tutorial/fb-messenger-integration/fb-20.png)

Almost there! You are ready to test the bot. Go to home on your Facebook page and click "Send Message" button. You will be provided several options to continue, then click "Test button". Try to chat "info cuaca" keyword to train the bot response.

![fb-21](/images/tutorial/fb-messenger-integration/fb-21.png)

Congratulations! Your bot is now connected to Facebook Messenger platform.
