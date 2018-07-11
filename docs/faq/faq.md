---
id: faq
title: FAQs
prev: bot-template-tutorial-id
---

## What is the best practice for making a flow ?

A flow should be “volatile” which means automatically end a flow when changed to other flow.

![faq-1](./images/faq-1.png)

## How to make a context can be cleared in specific time?

You may use `invalidate` function and filled it with timestamp type

## How to handle the intent that cannot catch user's input ?

Always use a transition to the state itself named “default” if there are any branching state.

![faq-2](./images/faq-2.png)

![faq-3](./images/faq-3.png)

Also, you must to create `reenter` intent with `command` type. This intent will help the bot ask a question again to user. Also, it will help you to maintain the active session longer.

![faq-4](./images/faq-4.png)

## Could it be possible if a user triggers a flow by a command?

Here is an example of using a command to trigger flow `login` in `greet` action

![faq-4](./images/faq-4.png)

## How to make a different response in each channel?

We may use metadata for specific channel response. Each metadata consists of :

- Channel type
- Channel access token
- Sender id

![faq-5](./images/faq-5.png)

## I found out my bot respond incorrectly for first-time users who add the bot. How to handle this condition?

You have to add below code to resolve the condition

Intent code to handle user's input :

![faq-6](./images/faq-6.png)

Code to adjust Facebook Messenger :

![faq-7](./images/faq-7.png)

## How to create a best practice action to call an API from a bot?

API that called from bot must be returned with status code 200 and JSON Response Body. Otherwise, the result in payload will be null.

![faq-8](./images/faq-8.png)

## How to get the username from each platform?

You have to use API action in the bot to use specified API

- LINE: https://developers.line.me/en/docs/messaging-api/reference/#get-profile
- FB Messenger: https://developers.facebook.com/docs/messenger-platform/identity/user-profile
- For Telegram: access metadata.telegramSenderName

For example, you may see below :

![faq-9](./images/faq-9.png)

![faq-10](./images/faq-10.png)
