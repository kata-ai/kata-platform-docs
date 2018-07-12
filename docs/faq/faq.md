---
id: faq
title: FAQs
prev: bot-template-tutorial
---

## What is the best practice for making a flow?

A flow should be “volatile” which means it gets closed when switching to another flow.

![faq-1](./images/faq-1.png)

## How to remove a context after a specific time?

You may use `invalidate` function and filled it with timestamp type

## How to handle the intent that cannot catch user's input?

Always use a transition to the state itself named “default” if there are any branching state.

![faq-2](./images/faq-2.png)

![faq-3](./images/faq-3.png)

Also, you must create `reenter` intent with `command` type. This intent will help the bot ask a question again to user. Also, it will help you to maintain the active session longer.

![faq-4](./images/faq-4.png)

## Is it possible to let users trigger a flow by a command?

Here is an example of using a command to trigger flow `login` in `greet` action

![faq-5](./images/faq-5.png)

![faq-6](./images/faq-6.png)

## How to make a different response on each channel?

We may use metadata for specific channel response. Each metadata consists of:

- Channel type
- Channel access token
- Sender id

![faq-7](./images/faq-7.png)

## I found out my bot respond incorrectly for first-time users who add the bot. How to handle this?

You have to add below code to resolve the condition

Intent code to handle user's input:

![faq-8](./images/faq-8.png)

Code to adjust Facebook Messenger :

![faq-9](./images/faq-9.png)

## What's the best practice to create an action that calls API from a bot?

API that was called from bot must be returned with status code 200 and JSON Response Body. Otherwise the result in payload will be null.

![faq-10](./images/faq-10.png)

## How to get the username from each channel?

You have to use API action in the bot to use specified API

- LINE: https://developers.line.me/en/docs/messaging-api/reference/#get-profile
- FB Messenger: https://developers.facebook.com/docs/messenger-platform/identity/user-profile
- For Telegram: access metadata.telegramSenderName

For example:

![faq-11](./images/faq-11.png)

![faq-12](./images/faq-12.png)
