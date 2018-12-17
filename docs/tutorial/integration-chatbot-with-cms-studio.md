---
id: integration-chatbot-with-cms-studio
title: Integration Chatbot with CMS Studio Tutorial
prev: integration-chatbot-with-nl-studio
---

## Introduction

CMS Studio allows you to build a dashboard for your chatbot. This dashboard lets your clients to add, edit, or remove certain contents of your bot.

Previously, from [Bot studio tutorial](/tutorial/bot-studio/) we have learned how to create a Pizza Bot. So, in this tutorial we will learn how to set up a dashboard where your clients can edit bot response for “confirmPizza” and “Fallback” state.

Before we begin, you need to read [CMS Studio](/cms-studio/about/) docs to learn the basic concepts of CMS Studio.

## Set up CMS Studio

We assume at this stage you already deployed your bot. If you haven't, you can learn how to on [Bot studio tutorial](/tutorial/bot-studio/).

### Create Environment

Click on Create Environment.
![bcms-1](./images/bot-cms/bcms-1.png)

Environment URL will be used as a web address where your client can access the dashboard. For demo purpose, we will name it “my-cms”
![bcms-2](./images/bot-cms/bcms-2.png)

Click on Create to submit data. Successfully created environment will be seen as follow
![bcms-3](./images/bot-cms/bcms-3.png)

### Create CMS Pages and Forms

Go to CMS menu and select Pages. This menu is a place for you to arrange pages, forms and elements.
![bcms-4](./images/bot-cms/bcms-4.png)

Click “+” button to start a new page. In this use case, we will create a page named “Text Response” with label “textResponse”. Click Create then enter the page.
![bcms-5](./images/bot-cms/bcms-5.png)

There is a breadcrumb on top left to indicate which page you are in. Click on “+” button to create a form
![bcms-6](./images/bot-cms/bcms-6.png)

Fill in the fields as follows
![bcms-7](./images/bot-cms/bcms-7.png)

Then, click on “Order Pizza” form you've just created
![bcms-8](./images/bot-cms/bcms-8.png)

### Introduction to text boX element

For the first use case, we will use Text Box elements to change bot response in confirmPizza State.

Click on Text Box element in left sidebar to add it to your form.
![bcms-9](./images/bot-cms/bcms-9.png)

Added element is shown as above. Our next step is to fill in label and ID, and default value.

- Label is a title for the element, so try to use any word that is easy to understand.
- ID is used to define the element in bot. Every element's ID is unique, and will be used as a code later on.
- Default value is the value you want to put on the bot, for example the copywriting.

### Add Asking Confirmation Text to Form

Fill in text box element as follow
![bcms-10](./images/bot-cms/bcms-10.png)

### Add Fallback Text to Form

Fill in text box element as follow
![bcms-11](./images/bot-cms/bcms-11.png)

Then, click on Save button to save the structure.

### Publish CMS

After you saved your CMS structure, go to Pages. Afterwards, click Publish.
![bcms-12](./images/bot-cms/bcms-12.png)

Publish is a term that similar with commit in Git. You must publish your saved CMS before you create a deployment. Further explanation can be seen on [Deployment Guide](./deployment-guide/introduction/)

## Invite User to CMS Client

You can only invite Kata Platform users to Kata Dashboard. So make sure your client already has registered account on Kata Platform before you invite them. In the future update, we will support inviting non-Kata Platform users.

Click on Users menu under CMS Studio
![bcms-13](./images/bot-cms/bcms-13.png)

Then, click on Add User button
![bcms-14](./images/bot-cms/bcms-14.png)

Next, Add User drawer will show
![bcms-15](./images/bot-cms/bcms-15.png)

Fill in e-mail and choose Development environment . Then click Add to send an invitation to that user's email.
![bcms-16](./images/bot-cms/bcms-16.png)

## Integrate Elements to Bot

There are 3 things that we have defined on CMS, which are:

- `Page_label` in Page (ex: `textResponse`)
- `Form_label` in Form (ex: `orderPizza`)
- `ID` in Element. (ex: `askingConfirmation`)

This information will be used in Bot Studio to sync a value from your dashboard. To do that, we have to enter a code with this format on the action we want to sync:

```
$(cms.pages.[page_label].[form_label].[element_ID].value)
```

### Change Value in confirmPizza State

In this case, this is what we will put on `confirmPizza` action on Bot Studio.

```
$(cms.pages.textResponse.orderPizza.askingConfirmation.value)
```

To update the action, you have to go back to Bot Studio and click on confirmPizza state.
![bcms-17](./images/bot-cms/bcms-17.png)

Then, click on confirmPizza state. Replace the original text which is this:

```
Do you want to order $(context.pizza)?
```

with this code:

```
$(cms.pages.textResponse.orderPizza.askingConfirmation.value)
```

![bcms-18](./images/bot-cms/bcms-18.png)

Click Update Action to update your action. **Then click on Update** to update state.

### Change Value in Fallback State

Click on init state in fallback flow.
![bcms-19](./images/bot-cms/bcms-19.png)

Click on init state to update the action's value. Fill in the value as follows

```
$(cms.pages.textResponse.orderPizza.sorryMessage.value)
```

![bcms-20](./images/bot-cms/bcms-20.png)

Click Update Action to update your action. **Then click on Update** to update state.

### Publish Your Bot

Afterward, publish your bot by clicking Publish.

## Deploy CMS & BOT Revision

Go to Deploy menu to deploy the newest version of your bot. Click on New Deployment, choose any deployment version and fill in change log. Then, click on Submit.
![bcms-21](./images/bot-cms/bcms-21.png)

Then, go to Environment to change deployment. Click on more button to update.
![bcms-22](./images/bot-cms/bcms-22.png)

Next, click Update. Update environment drawer will appear.
![bcms-23](./images/bot-cms/bcms-23.png)

Choose latest deployment then click Update. Changes will be shown as follow
![bcms-24](./images/bot-cms/bcms-24.png)

## Customize Content in CMS Client

Your invited user will receive an email containing the dashboard's URL or you can give them direct URL yourselves.

### Enter CMS using E-mail

If you get an e-mail, click on Accept Invitation then you will be redirected to login page

### Enter CMS using Link

Click on link for CMS client such as dashboard.kata.ai/(namespace). For this tutorial, we will access [https://dashboard.kata.ai/login/my-cms](https://dashboard.kata.ai/my-cms)

The front page of Kata Dashboard looks like this
![bcms-25](./images/bot-cms/bcms-25.png)

Click on Login after you filled in username/e-mail and password.
![bcms-26](./images/bot-cms/bcms-26.png)

### Edit Content in CMS Client

Click on available form which is “Order Pizza”
![bcms-27](./images/bot-cms/bcms-27.png)

Fill in those elements with sentences that you want. For example:

```
Asking confirmation : You're almost done. Do you want to order $(context.pizza)?
Fallback : Hmm, I don't understand that. How about we talk other things?

```

Click on Save icon to save in each element.

## Show Changes in LINE

After you changed your deployment in environment, you can test directly in your bot's LINE account.

Testing for confirmation :
![bcms-28](./images/bot-cms/bcms-28.png)

Testing for fallback :
![bcms-29](./images/bot-cms/bcms-29.png)
