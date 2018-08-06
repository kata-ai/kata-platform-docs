---
id: bot-template-tutorial
title: Bot Template Tutorial
prev: nl-studio-tutorial
next: fb-messenger-integration
---

Broadly speaking, Kata Platform has 3 templates namely API bot, Button bot and Shopping Bot. We will explain them one by one starting from API Bot.

## API Bot template

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HsM2g9R1ml0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The function of this bot is to provide an example to use API integration. In this template, we will learn how the bot answering a question from an user who inquires about city weather. We will use API which is :

```
https://api.openweathermap.org/data/2.5/weather?q=$(context.location)&appid=beb536b6a3f98bb2bfde28ac6d99c6fc
```

Before entering this tutorial, we should understand the conversation tree as below

![bte-1](./images/bot-template/bte-1.png)

### Create a new bot

Firstly, click on "Create with This Template" and update the bot name and adjust timezone depends on your location.

![bte-2](./images/bot-template/bte-2.png)

Once you've created a template, find your bot by searching "weatherbotTest" and click it to see details

![bte-3](./images/bot-template/bte-3.png)

Next, on top right corner click on "Publish" button. By clicking this button, it will push latest version

![bte-4](./images/bot-template/bte-4.png)

For emulator testing, you must deploy your chat bot. Click on "Deployment" sub-menu which located on left side of the page. You may put "weatherBotDeployment" in the name field

![bte-5](./images/bot-template/bte-5.png)

After you successfully add deployment, you are able to test the emulator to check whether your chat bot is working properly or not. Click "Test chatbot" located at the bottom right corner.

Enter the word "info cuaca" to get started

![bte-6](./images/bot-template/bte-6.png)

Congratulations, your bot is working successfully. You may continue to try it on LINE platform

### Settings on LINE Developer Console

First of all, you need to create a LINE account. To sign up for the account, you must enter LINE developer console (https://developers.line.me/console/).

![bte-7](./images/bot-template/bte-7.png)

Once you have registered your LINE account, continue to log in to console by entering your username and password.

![bte-8](./images/bot-template/bte-8.png)

Then, you must create a provider by click this link https://developers.line.me/console/register/provider/ and enter provider name you want.

![bte-9](./images/bot-template/bte-9.png)

Once you have created your bot provider, click on "MessagingAPI" button above the page.

![bte-10](./images/bot-template/bte-10.png)

This feature is useful for adding new channels. Fill in all channel information based on your needs. Please note that you must choose “Developer Trial” in Plan section

![bte-11](./images/bot-template/bte-11.png)

Afterwards, bot display will be changed as below

![bte-12](./images/bot-template/bte-12.png)

To view channel detail, you may hit the channel button. Then in detail channel, you will see Messaging Settings. In that section, you must do "enable Webhooks" and click Issues button on channel access token

![bte-13](./images/bot-template/bte-13.png)

You will find channel access token fill already filled by a link.

![bte-14](./images/bot-template/bte-14.png)

In "Using LINE Features" section, you need to disable some features on LINE as shown below

![bte-15](./images/bot-template/bte-15.png)

Now, your channel is ready and can be integrated with the chatbot.

In "Deployment" menu, click on "View channel" button to see integrated channels list. If you see nothing, your bot has never been integrated before.

To add a new channel, click on "+" button in the lower right corner of your page. Enter the `line` name and select channel `line`

![bte-16](./images/bot-template/bte-16.png)

There is an empty field that you have to fill, so you must reopen LINE developer console to enter the data on it.

Access Token Channel can be found here

![bte-17](./images/bot-template/bte-17.png)

Channel Secret can be found here

![bte-18](./images/bot-template/bte-18.png)

Then, click "create" to create a channel and the final look shown as below

![bte-19](./images/bot-template/bte-19.png)

The final step is we must insert webhook that created from the bot to LINE. Click on eye symbol on Action column to see channel detail which created by you and copy the displayed webhook.

![bte-20](./images/bot-template/bte-20.png)

Then, paste URL's webhook in the LINE console. Click the "verify" button to connection check whether success or failure in your bot as shown below.

![bte-21](./images/bot-template/bte-21.png)

On the same page, look for QR code images. Then, this QR code can be used to add your artificial bot as a friend.

### Testing on LINE

After you added the chat bot as a friend, send a message containing the word "weather info"

![bte-22](./images/bot-template/bte-22.png)

Congratulations! Now your bot using API template bot is done

## Button Bot Template

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BtPPYkgmVPA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In this template, we will learn how to create bot using action button. The concept used is user will be given a question "Who is current president of Indonesia?", Then, a user must choose answers by pressing provided options button. As above, we will see the conversation tree first from this template.

![bte-23](./images/bot-template/bte-23.png)

### Create a new bot

Firstly, click on "Create with This Template" and update the bot name and adjust timezone depends on your location.

![bte-24](./images/bot-template/bte-24.png)

Once you've created a template, find your bot by searching “buttonBotTemplate" and click it to see details

![bte-25](./images/bot-template/bte-25.png)

Next, on top right corner click on "Publish" button. By clicking this button, it will push latest version

![bte-26](./images/bot-template/bte-26.png)

For emulator testing, you must deploy your chat bot. Click on "Deployment" sub-menu which located on left side of the page. You may put "buttonBotDeployment" in the name field

![bte-27](./images/bot-template/bte-27.png)

### Settings on Line Developer Console

First of all, you need to create a LINE account. To sign up for the account, you must enter LINE developer console (https://developers.line.me/console/).

![bte-28](./images/bot-template/bte-28.png)

Once you have registered your LINE account, continue to log in to console by entering your username and password.

![bte-29](./images/bot-template/bte-29.png)

Then, you must create a provider by click this link https://developers.line.me/console/register/provider/ and enter provider name you want.

![bte-30](./images/bot-template/bte-30.png)

Once you have created your bot provider, click on "MessagingAPI" button above the page.

![bte-31](./images/bot-template/bte-31.png)

This feature is useful for adding new channels. Fill in all channel information based on your needs
Please note that you must choose “Developer Trial” in Plan section

![bte-32](./images/bot-template/bte-32.png)

Afterwards, bot display will be changed as below

![bte-33](./images/bot-template/bte-33.png)

To view channel detail, you may hit the channel button. Then, in detail channel you will see Messaging Settings. In that section, you must do "enable Webhooks" and click Issues button on channel access token

![bte-34](./images/bot-template/bte-34.png)

You will find channel access token fill already filled by a link.

![bte-35](./images/bot-template/bte-35.png)

In "Using LINE Features" section, you need to disable some features on LINE as shown below

![bte-36](./images/bot-template/bte-36.png)

Now, your channel is ready and can be integrated with the chatbot.

In "Deployment" menu, click on "View channel" button to see integrated channels list. If you see nothing, your bot has never been integrated before.To add a new channel, click on "+" button in the lower right corner of your page. Enter the `line` name and select channel `line`

![bte-37](./images/bot-template/bte-37.png)

There is an empty field that you have to fill, so you must reopen LINE developer console to enter the data on it.

Access Token Channel can be found here

![bte-38](./images/bot-template/bte-38.png)

Channel Secret can be found here

![bte-39](./images/bot-template/bte-39.png)

Then, click "create" to create a channel and the final look shown as below

![bte-40](./images/bot-template/bte-40.png)

The final step is we must insert webhook that created from the bot to LINE. Click on eye symbol on Action column to see channel detail which created by you and copy the displayed webhook.

![bte-41](./images/bot-template/bte-41.png)

Then, paste URL's webhook in the LINE console. Click the "verify" button to connection check whether success or failure in your bot as shown below.

![bte-42](./images/bot-template/bte-42.png)

You are now have a conversation with the bot. On the same page, look for QR code images. Then, this QR code can be used to add your artificial bot as a friend.

### Testing on LINE

After you added the chat bot as a friend, send a message containing the word "main”

![bte-43](./images/bot-template/bte-43.png)

Congratulations! Now your bot using button bot template bot is done

## Shopping Bot Template

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AazPtNe-kn8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You could try shopping bot template to create a simple concept of place orders from consumers to bot. We will learn how to make a bot using action button. Similar with above image, we will see conversation tree first from this template.

![bte-44](./images/bot-template/bte-44.png)

### Create a new bot

Firstly, click on "Create with This Template" and update the bot name and adjust timezone depends on your location.

![bte-45](./images/bot-template/bte-45.png)

Once you've created a template, find your bot by searching “shoppingBotTemplate" and click it to see details

![bte-46](./images/bot-template/bte-46.png)

Next, on top right corner click on "Publish" button. By clicking this button, it will push latest version

![bte-47](./images/bot-template/bte-47.png)

For emulator testing, you must deploy your chat bot. Click on "Deployment" sub-menu which located on left side of the page. You may put "shoppingBotDeployment" in the name field

![bte-48](./images/bot-template/bte-48.png)

After you successfully add deployment, you are able to test the emulator to check whether your chat bot is working properly or not. Click "Test chatbot" located at the bottom right corner.

Enter the word "morning" to get started

![bte-49](./images/bot-template/bte-49.png)

Congratulations, your bot is working successfully. You may continue to try it on LINE platform

### Settings on LINE Developer Console

First of all, you need to create a LINE account. To sign up for the account, you must enter LINE developer console (https://developers.line.me/console/).

![bte-50](./images/bot-template/bte-50.png)

Once you have registered your LINE account, continue to log in to console by entering your username and password.

![bte-51](./images/bot-template/bte-51.png)

Then, you must create a provider by click this link https://developers.line.me/console/register/provider/ and enter provider name you want.

![bte-52](./images/bot-template/bte-52.png)

Once you have created your bot provider, click on "MessagingAPI" button above the page. This feature is useful for adding new channels. Fill in all channel information based on your needs. Please note that you must choose “Developer Trial” in Plan section

![bte-53](./images/bot-template/bte-53.png)

Afterwards, bot display will be changed as below

![bte-54](./images/bot-template/bte-54.png)

To view channel detail, you may hit the channel button. Then, in detail channel you will see Messaging Settings. In that section, you must do "enable Webhooks" and click Issues button on channel access token

![bte-55](./images/bot-template/bte-55.png)

You will find channel access token fill already filled by a link.

![bte-56](./images/bot-template/bte-56.png)

In "Using LINE Features" section, you need to disable some features on LINE as shown below

![bte-57](./images/bot-template/bte-57.png)

Now, your channel is ready and can be integrated with the chatbot.

In "Deployment" menu, click on "View channel" button to see integrated channels list. If you see nothing, your bot has never been integrated before.

To add a new channel, click on "+" button in the lower right corner of your page. Enter the `line` name and select channel `line`

![bte-58](./images/bot-template/bte-58.png)

There is an empty field that you have to fill, so you must reopen LINE developer console to enter the data on it.

Access Token Channel can be found here

![bte-59](./images/bot-template/bte-59.png)

Channel Secret can be found here

![bte-60](./images/bot-template/bte-60.png)

Then, click "create" to create a channel and the final look shown as below

![bte-61](./images/bot-template/bte-61.png)

The final step is we must insert webhook that created from the bot to LINE. Click on eye symbol on Action column to see channel detail which created by you and copy the displayed webhook.

![bte-62](./images/bot-template/bte-62.png)

Then, paste URL's webhook in the LINE console. Click the "verify" button to connection check whether success or failure in your bot as shown below.

![bte-63](./images/bot-template/bte-63.png)

You are now have a conversation with the bot. On the same page, look for QR code images. Then, this QR code can be used to add your artificial bot as a friend.

### Testing on LINE

After you added the chat bot as a friend, send a message containing the word "hi”

![bte-64](./images/bot-template/bte-64.png)

Congratulations! Now your bot using Shopping bot template is done

---
