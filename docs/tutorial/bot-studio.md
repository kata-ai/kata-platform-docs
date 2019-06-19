---
id: bot-studio-tutorial
title: Bot Studio Tutorial
next: nl-studio-tutorial
---

## Introduction

Building a chatbot on Kata | Platform is quick and easy, even with a lack of programming knowledge. In this tutorial, we will learn how to create a simple bot on LINE Messenger to order a pizza. We will also learn how to train your bot with NL Studio.

Let's start by looking at this bot diagram, or commonly called “conversation tree.” Conversation tree is an overview of chatbot functionalities. In this conversation tree, we break down the process of ordering pizza and the types of bot action we want to use on each state.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

## Sign up to Kata | Platform

Create an account on Kata | Platform to start building chatbot.

On your browser, open [_http://platform.kata.ai/login_](http://new-platform.katalabs.io/login) and click “Sign Up”

<img src="/images/tutorial/bot-studio/bse-2.png" alt="bse-2" width="50%" />

Then fill the form with a username, an email, and an account type. Continue by clicking "Sign Up."

<img src="/images/tutorial/bot-studio/bse-3.png" alt="bse-3" width="50%" />

You will get a confirmation email once our team has verified your account.

You may follow the instructions provided in the confirmation email to activate and start using your account.

## Create a Project

### Login to Kata | Platform

On your browser, open [_http://platform.kata.ai/login_](http://new-platform.katalabs.io/login) and enter your username & password.

<img src="/images/tutorial/bot-studio/bse-4.png" alt="bse-4" width="50%" />

Click "Login" to continue.

### Create a project

After you logged in, you will be taken to the Project Page.

<img src="/images/tutorial/bot-studio/bse-5.png" alt="bse-5" width="100%" />

Click on “Create Project” and fill in the form. Each project contains one bot design, one NL, and one CMS.

<img src="/images/tutorial/bot-studio/bse-6.png" alt="bse-6" width="50%" />

NLU language is used to determine which language model you want to use. Currently, we support Bahasa Indonesia and English.

You can also choose NLU Visibility to be public or private. If you choose public, **all Kata | Platform users** can utilize your NLU using root and inherit function.

## Create Fallback Flow

### Create fallback flow

Once you create a project, you will be redirected to the Bot Studio menu.

Now we are going to learn how to create a flow. Flow is a container of **intent, state, and action**. A flow typically represents a linear process.

The first flow that we will create is a Fallback Flow. Its purpose is to handle undefined users input, or commonly called “else condition” state. In this case, the “else condition” is everything that is not “Start Order”.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

You may find a flow that is created automatically by the system or default flow. We will delete that flow by pressing more button and then “Delete.”

<img src="/images/tutorial/bot-studio/bse-8.png" alt="bse-8" width="100%" />

Next, click “Create Flow” button to create `fallback` flow. Set flow to active, persistent, and default.

<img src="/images/tutorial/bot-studio/bse-9.png" alt="bse-9" width="50%" />

### Create fallback intent

After you have created `fallback` flow, we will create new intent by pressing the Intents tab on the sub-menu. Then, we will create a new intent for `fallback` flow. Click “Create Intent” button to create.

<img src="/images/tutorial/bot-studio/bse-10.png" alt="bse-10" width="100%" />

Then, fill in the form as follows

<img src="/images/tutorial/bot-studio/bse-11.png" alt="bse-11" width="50%" />

### Create State init

Next, we will create a state called `init`. Click the ”+” button at the bottom right of your screen.

<img src="/images/tutorial/bot-studio/bse-12.png" alt="bse-12" width="100%" />

Fill state with name `init` on Overview tab and set it to initial state and end state (as shown below).

Enabling Initial State and End State will make `init` the first and the last flow to be checked by the bot when there isn't any flow that matches a user's input.

<img src="/images/tutorial/bot-studio/bse-13.png" alt="bse-13" width="50%" />

Now we will create a bot response to display an apology message. Click “Add actions” button to create a response.

<img src="/images/tutorial/bot-studio/bse-14.png" alt="bse-14" width="50%" />

Container for creating action will appear

<img src="/images/tutorial/bot-studio/bse-15.png" alt="bse-15" width="50%" />

### Create Action Text in State init

Click on “+” button to create a new action.

<img src="/images/tutorial/bot-studio/bse-16.png" alt="bse-16" width="50%" />

Choose action type “Text”

<img src="/images/tutorial/bot-studio/bse-17.png" alt="bse-17" width="50%" />

Then, fill in the form

<img src="/images/tutorial/bot-studio/bse-18.png" alt="bse-18" width="50%" />

Click on “Create Action” button.

<img src="/images/tutorial/bot-studio/bse-19.png" alt="bse-19" width="50%" />

### Create Self Transition in State Init

The last step to finalize `fallback` flow is to create self-transition for `init` state. Self transition is required to avoid error when the next state is not available. Click on “Transitions” and enable Self Transition.

<img src="/images/tutorial/bot-studio/bse-20.png" alt="bse-20" width="50%" />

Click “Create” button. Your screen should look like this

<img src="/images/tutorial/bot-studio/bse-21.png" alt="bse-21" width="100%" />

## Create Order Flow

Next, we will create `Start Order` flow to handle pizza order.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create Flow Order

First step is to create another flow called `order` .

<img src="/images/tutorial/bot-studio/bse-22.png" alt="bse-22" width="50%" />

Created flow will be shown like this

<img src="/images/tutorial/bot-studio/bse-23.png" alt="bse-23" width="100%" />

### Create Keyword NLUs for 'Order'

In this step, we will define the NLU (Natural Language Understanding) to trigger `order` flow. NLU is used to translate user inputs into data that machine can understand. There are many types of NLU, but the type that we will use in this particular flow is called `keyword`. To define the NLU, go to NLUs menu.

<img src="/images/tutorial/bot-studio/bse-24.png" alt="bse-24" width="100%" />

Next, click on “Create NLU”

<img src="/images/tutorial/bot-studio/bse-25.png" alt="bse-25" width="100%" />

Choose Keyword type and enter keywords that represents `order`, such as “order”, “pls order”, “order pza”.

<img src="/images/tutorial/bot-studio/bse-26.png" alt="bse-26" width="50%" />

Successfully created NLU looks like this

<img src="/images/tutorial/bot-studio/bse-27.png" alt="bse-27" width="100%" />

### Create Intent for Order

Each flow requires an `intent` to classify user's inquiry and trigger matching flow. So our next step is to set initial intent for `order` flow.

Go back to Conversation Flow menu and click on `order` flow, then click on “Intents” tab.

<img src="/images/tutorial/bot-studio/bse-28.png" alt="bse-28" width="100%" />

Previously, you already created keyword NLUs called `order`. We will set that keyword as intent in `order` flow. Map the NLU on classifier section.

<img src="/images/tutorial/bot-studio/bse-29.png" alt="bse-29" width="50%" />

Click “Create” to create the intent. Your screen should look like this

<img src="/images/tutorial/bot-studio/bse-30.png" alt="bse-30" width="100%" />

### Create a State Named init

Every flow must have at least one state. Because we haven't created any state in `order` flow, we have to create one. Let's create a state called `init`.

<img src="/images/tutorial/bot-studio/bse-31.png" alt="bse-31" width="50%" />

Click “Create” button to create initial state.

Next, we will define how the bot will respond to user who entered `order` flow.

## Create Action for Pizza Menu

As seen on the conversation tree below, the first message in `order` flow is “Show Pizza Type”

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create a State to Show Pizza type in Text Action Type

To get started, we need to create a state named `showPizza` on `order` flow. Click on “+” button in Conversation Flow menu.

<img src="/images/tutorial/bot-studio/bse-33.png" alt="bse-33" width="50%" />

Let's begin by creating an action called `pizzaOptions`. This action will inform users in **text about our available pizza menu**.

Click on “+” button to create an action and choose Text as action type.

<img src="/images/tutorial/bot-studio/bse-34.png" alt="bse-34" width="50%" />

Fill in Text action type to inform our pizza menu

<img src="/images/tutorial/bot-studio/bse-35.png" alt="bse-35" width="50%" />

Click on “Create Action” to finalize. Next step is to create an action called `askOptions`

<img src="/images/tutorial/bot-studio/bse-36.png" alt="bse-36" width="50%" />

Click on “Create Action” button. Your form should look like this

<img src="/images/tutorial/bot-studio/bse-37.png" alt="bse-37" width="50%" />

Then you have to make self-transition in Transition tab as follow

<img src="/images/tutorial/bot-studio/bse-37-1.png" alt="bse-37-1" width="50%" />

Click “Create” to create the state. Successfully created state will look like this

<img src="/images/tutorial/bot-studio/bse-38.png" alt="bse-38" width="100%" />

### Update showPizza state Into Show Pizza Menu in Carousel Action Type

Previous step is an example to create action to **show pizza menu in text.** Let's try to update the state into Carousel action type.

To update the state, click on `showPizza` state and an update state form will appear

<img src="/images/tutorial/bot-studio/bse-39.png" alt="bse-39" width="50%" />

Then, remove all actions in the state by clicking “x” on each action.

<img src="/images/tutorial/bot-studio/bse-40.png" alt="bse-40" width="50%" />

After removing available actions, we will create an action called `pizzaMenu` as Carousel action type.

Click on “Add” actions button then click on “+” button to create a new action. Choose Carousel action type to continue.

<img src="/images/tutorial/bot-studio/bse-41.png" alt="bse-41" width="50%" />

Enter `pizzaMenu` as name

<img src="/images/tutorial/bot-studio/bse-42.png" alt="bse-42" width="50%" />

Fill in the carousel content by clicking “Add carousel” button, then click on “Add action” button to define the **label and type**. Next, click on Add Payload button to enter **key and value**.

Fill in first carousel with this data

```
Title: Pepperoni
Text: This is the favorite of Peps
Thumbnail Image Url: https://www.wikihow.com/images/thumb/a/a7/Make-Pepperoni-Pizza-Step-19-Version-2.jpg/aid1074004-v4-728px-Make-Pepperoni-Pizza-Step-19-Version-2.jpg.webp
Actions:
  Label: Pepperoni
  Type: Postback
  Payload:
    - key: type
      value: pizza
    - key: pizza
      value: Pepperoni
```

Fill in second carousel with this data

```
Title: Veggie Lovers
Text: Vegie vegie stay healthy
Thumbnail Image Url: https://www.calcuttaweb.com/store/image/data/calcutta/pizza/veggie-lovers-pizza-pihu-7.jpg
Actions:
  Label: Veggie Lovers
  Type: Postback
  Payload:
    - key: type
      value: pizza
    - key: pizza
      value: Veggie Lovers
```

Your first form should look like this

<img src="/images/tutorial/bot-studio/bse-43.png" alt="bse-43" width="50%" />

Your second form should look like this

<img src="/images/tutorial/bot-studio/bse-44.png" alt="bse-44" width="50%" />

Finalize this step by clicking “Create Action.”

It should look like this

<img src="/images/tutorial/bot-studio/bse-45.png" alt="bse-45" width="50%" />

Once the bot displays a carousel containing the type for pizza menu, its next step is to ask user to select the pizza. Click “Add actions” button to trigger drop-down list, then choose `askOptions`

<img src="/images/tutorial/bot-studio/bse-46.png" alt="bse-46" width="50%" />

After you select `askOptions` action click “Create Action” button to finalize this step.

<img src="/images/tutorial/bot-studio/bse-47.png" alt="bse-47" width="50%" />

Your form should look like this

<img src="/images/tutorial/bot-studio/bse-48.png" alt="bse-48" width="50%" />

Click “Update” to update the state.

### Create Intent to Choose A Pizza

Now we have to create an intent called `pizzaChosen` to handle user's input after they have selected a pizza type. Click on Intent menu in `order` flow.

<img src="/images/tutorial/bot-studio/bse-49.png" alt="bse-49" width="100%" />

Click on Create Intent and create intent as follow

<img src="/images/tutorial/bot-studio/bse-50.png" alt="bse-50" width="50%" />

Successfully created intent looks like this

<img src="/images/tutorial/bot-studio/bse-51.png" alt="bse-51" width="100%" />

### Create Transition between init and showPizza

Now, we will create a transition between two states that we have created before.

Click the green dot on `init` state, and a connector line will appear. Connect that line to `showPizza` state. If you do it right, a Create Transition form will appear.

<img src="/images/tutorial/bot-studio/bse-52.png" alt="bse-52" width="100%" />

Fill in the form with these data, and click “Create”

<img src="/images/tutorial/bot-studio/bse-52-1.png" alt="bse-52-1" width="100%" />

### Create 'reenter' intent

Next, we will add `reenter` intent so the bot can return to its previous state after triggering fallback state. Create the intent in `order` flow.

<img src="/images/tutorial/bot-studio/bse-53.png" alt="bse-53" width="100%" />

## Create Action for Asking Pizza Quantity

In this step we will learn how to create “Ask quantity” state.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create pizzaQuantity state

In this step we will create `pizzaQuantity` state to handle order quantity. The type of action we will use is in this state is Text. Click on “+” button on `order` flow and fill the form as follows

<img src="/images/tutorial/bot-studio/bse-54.png" alt="bse-54" width="50%" />

Then you have to make self-transition in Transition tab as follow

<img src="/images/tutorial/bot-studio/bse-54_1.png" alt="bse-54_1" width="50%" />

Result:

<img src="/images/tutorial/bot-studio/bse-55.png" alt="bse-55" width="100%" />

### Create NLUs quantity

Afterwards, we have to handle user's input with NLUs. Because we only allowed number from 1 to 9, we will create a limitation in regex format. Click on Create NLUs and follow this screenshot

<img src="/images/tutorial/bot-studio/bse-56.png" alt="bse-56" width="50%" />

Successfully created NLU will be shown like this

<img src="/images/tutorial/bot-studio/bse-57.png" alt="bse-57" width="100%" />

### Create Intent quantity

After we created the NLU, we will add an intent to respond user's input. In `order` flow, click on Create Intent and fill in the form

<img src="/images/tutorial/bot-studio/bse-58.png" alt="bse-58" width="50%" />

Successfully created intent will look like this

<img src="/images/tutorial/bot-studio/bse-59.png" alt="bse-59" width="100%" />

### Create Transition between showPizza and pizzaQuantity

Now we have to create a transition between `showPizza`and `pizzaQuantity`. We will also store `payload.pizza` value into `context.pizza`. Click on the blue dot on `showPizza` and drag the line to `pizzaQuantity` state to create the transition. Create Transition form will appear after you have successfully connected the states.

<img src="/images/tutorial/bot-studio/bse-60.png" alt="bse-60" width="50%" />

Created transition will look like this

<img src="/images/tutorial/bot-studio/bse-61.png" alt="bse-61" width="100%" />

## Create Confirmation Action

Our next step is creating `Ask confirmation` state.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create “YESNO” keyword NLUs

First, we will create a keyword NLU to handle `yes` and `no`. Click on Create NLUs and fill in as follows

<img src="/images/tutorial/bot-studio/bse-62.png" alt="bse-62" width="50%" />

Successfully created NLU will look like this
<img src="/images/tutorial/bot-studio/bse-63.png" alt="bse-63" width="100%" />

### Create confirmPizza state

Now we will create `confirmPizza` state to handle order confirmation. We will also store chosen pizza & quantity information in this state. Select `order` flow and click on “+” button to create `confirmPizza` state.

<img src="/images/tutorial/bot-studio/bse-64.png" alt="bse-64" width="50%" />

## Add mapping in onTransit tab

<img src="/images/tutorial/bot-studio/bse-67.png" alt="bse-67" width="50%" />

Don't forget to add self-transition in a state. Click Create Action. Your screen should look like this

<img src="/images/tutorial/bot-studio/bse-65.png" alt="bse-65" width="100%" />

### Create a transition from pizzaQuantity to confirmPizza

We will make a transition by storing value (mapping) from pizza quantity **and** chosen pizza type. Click the blue dot on `pizzaQuantity` and drag the line to `confirmPizza` state to create a transition. Create Transition form will appear after you successfully connected the states.

<img src="/images/tutorial/bot-studio/bse-66.png" alt="bse-66" width="50%" />

Result will be shown as follows

<img src="/images/tutorial/bot-studio/bse-68.png" alt="bse-68" width="100%" />

### Create intent yesno

Previously, we already made an NLU containing `yes` and `no` keywords. We will use that NLU as a classifier on an intent.

First of all, we will create an intent in `order` flow for the keyword `yes`

<img src="/images/tutorial/bot-studio/bse-69.png" alt="bse-69" width="50%" />

Then, we will create an intent for keyword `no`

<img src="/images/tutorial/bot-studio/bse-70.png" alt="bse-70" width="50%" />

Both intent will appear as follows

<img src="/images/tutorial/bot-studio/bse-71.png" alt="bse-71" width="100%" />

### Create done state

In `done` state, we will complete the order by saying thank you and end the conversation. We will also set a condition when a user wants to cancel the order. So in this state we will create two actions: `sayThanks` and `sayCancel`.

<img src="/images/tutorial/bot-studio/bse-72.png" alt="bse-72" width="50%" />

<img src="/images/tutorial/bot-studio/bse-73.png" alt="bse-73" width="50%" />

Also, don't forget to add self transition in the state. Result:
<img src="/images/tutorial/bot-studio/bse-74.png" alt="bse-74" width="100%" />

### Create a transition from confirmPizza to done

Next, we will connect `confirmPizza` state to `done` state. Because `done` is the last state, we will set it as default transition. Connect `confirmPizza` to `done` by clicking the blue dot and drag the line to connect the states. Create Transition form will appear after you have successfully connected the states.

<img src="/images/tutorial/bot-studio/bse-75.png" alt="bse-75" width="50%" />

Final flow:

<img src="/images/tutorial/bot-studio/bse-76.png" alt="bse-76" width="100%" />

## Publish Your Bot

To save your work, click on Publish button located at the top right of your screen. Fill in the changelog as “initial version of pizza bot” for future reference. Click “Publish” to continue.

<img src="/images/tutorial/bot-studio/bse-77.png" alt="bse-77" width="100%" />

<img src="/images/tutorial/bot-studio/bse-78.png" alt="bse-78" width="50%" />

Every time you publish a bot, it will record a hash number (similar to Git's hash number) in Revision List.

<img src="/images/tutorial/bot-studio/bse-79.png" alt="bse-79" width="100%" />

## Testing Your Chatbot

Click on Test Chatbot on Bot Studio then type “order” to initialize `order` flow.

<img src="/images/tutorial/bot-studio/bse-80.png" alt="bse-80" width="100%" />

Check on the rest of the flow and make sure everything you've made works.

## Deploy Your Chatbot

Now we will try to deploy our chatbot to LINE Messenger.

### Create deployment

First of all, we have to create a deployment first. Find the “Deployment” menu on the left sidebar.

<img src="/images/tutorial/bot-studio/bse-81.png" alt="bse-81" width="50%" />

Click on Create Deployment button on top right

<img src="/images/tutorial/bot-studio/bse-82.png" alt="bse-82" width="100%" />

Choose Patch on Deployment Version.

<img src="/images/tutorial/bot-studio/bse-83.png" alt="bse-83" width="100%" />

Succesfully created deployment looks like this.

<img src="/images/tutorial/bot-studio/bse-84.png" alt="bse-84" width="100%" />

### Create Environment

Kata | Platform 3.0 allows you to set up 3 separate environments in your project: Development, Staging, and Production. Inside each environment, you can add as many messaging channel as you like. You have to setup environment first before integrating to messaging channel.

In this tutorial, we will try to setup Production environment. Click on Environment menu under Deploy and you will be shown 3 available environments.

<img src="/images/tutorial/bot-studio/bse-85.png" alt="bse-85" width="100%" />

Click “Create Environment” button in Production.

The first field we have to fill in is deployment version. Choose 0.0.1 (shown on the previous step) as deployment version in Production.

Another field we have to fill in is environment URL. This URL is used to access CMS Client later.

<img src="/images/tutorial/bot-studio/bse-86.png" alt="bse-86" width="50%" />

Successfully created environment will look like this

<img src="/images/tutorial/bot-studio/bse-87.png" alt="bse-87" width="50%" />

Next, we need to create channel inside the environment. Click on Create Channel on Production environment and you will be redirected to Create Channel page

<img src="/images/tutorial/bot-studio/bse-88.png" alt="bse-88" width="100%" />

Next, click “Create Channel” and fill in as follows

<img src="/images/tutorial/bot-studio/bse-89.png" alt="bse-89" width="50%" />

Let's setup LINE developer console so you can fill in fields highlighted with red box.

### Registration to LINE Developer console

**Create LINE account**

To sign up for a LINE developer account, you have to have a LINE account by [installing LINE application, either desktop or mobile app](https://line.me/en/download). After you successfully registered, sign in to https://developers.line.biz/en/

In LINE Developer Console click Log In.

<img src="/images/tutorial/bot-studio/bse-90.png" alt="bse-90" width="100%" />

Click on Log in with LINE

<img src="/images/tutorial/bot-studio/bse-91.png" alt="bse-91" width="50%" />

Enter your email and password

<img src="/images/tutorial/bot-studio/bse-92.png" alt="bse-92" width="50%" />

After you successfully logged in, you will be redirected to provider list dashboard

<img src="/images/tutorial/bot-studio/bse-93.png" alt="bse-93" width="100%" />

**Create a Provider**

Click “Create New Provider”

<img src="/images/tutorial/bot-studio/bse-94.png" alt="bse-94" width="100%" />

Fill in provider name

<img src="/images/tutorial/bot-studio/bse-95.png" alt="bse-95" width="100%" />

Click Confirm to continue. You will have to re-confirm the provider name since it cannot be changed later. Click “Create” to confirm.

<img src="/images/tutorial/bot-studio/bse-96.png" alt="bse-96" width="100%" />

### Setup Channel for LINE Integration

Setup channel in Messaging API by clicking Create Channel on Messaging API.

<img src="/images/tutorial/bot-studio/bse-97.png" alt="bse-97" width="100%" />

Fill in the form as follows

<img src="/images/tutorial/bot-studio/bse-98.png" alt="bse-98" width="100%" />

<img src="/images/tutorial/bot-studio/bse-99.png" alt="bse-99" width="100%" />

Next, you have to choose **Developer Trial as Plan**

<img src="/images/tutorial/bot-studio/bse-100.png" alt="bse-100" width="100%" />Continue to click Confirm.

Accept Terms of Use from LINE then click Create

<img src="/images/tutorial/bot-studio/bse-101.png" alt="bse-101" width="100%" />

Successfuly created channel will look like this

<img src="/images/tutorial/bot-studio/bse-102.png" alt="bse-102" width="50%" />

### Integration LINE and Your Chatbot

Click on created channel to fill in Channel Access Token and Channel Secret. Here is the guideline to fill in those fields

#### Fill in Channel Access Token field

Click “Issue” in Messaging Settings section

<img src="/images/tutorial/bot-studio/bse-103.png" alt="bse-103" width="100%" />

Then, issue dialog will pop up. Click on Issue to continue

<img src="/images/tutorial/bot-studio/bse-104.png" alt="bse-104" width="50%" />

Then, copy Channel Access Token below and paste it on Create Channel form in Kata | Platform

<img src="/images/tutorial/bot-studio/bse-105.png" alt="bse-105" width="100%" />

<img src="/images/tutorial/bot-studio/bse-106.png" alt="bse-106" width="50%" />

**Fill in Channel Secret field**

In Basic Information, copy Channel Secret from LINE to Kata | Platform

<img src="/images/tutorial/bot-studio/bse-107.png" alt="bse-107" width="100%" />

<img src="/images/tutorial/bot-studio/bse-108.png" alt="bse-108" width="50%" />

Final result in Kata | Platform will look like this

<img src="/images/tutorial/bot-studio/bse-109.png" alt="bse-109" width="50%" />

Click “Create” to generate webhook URL from Kata | Platform.

<img src="/images/tutorial/bot-studio/bse-110.png" alt="bse-110" width="100%" />

After webhook URL is generated, go to Messaging Settings in LINE developer console to enable webhook. **Please check that you already enable the webhook by click on Enable in "Use Webhoooks" section which placed above Webhook URL field**

<img src="/images/tutorial/bot-studio/bse-111.png" alt="bse-111" width="100%" />
Click “Update” then paste the webhook URL to LINE developer console.

<img src="/images/tutorial/bot-studio/bse-112.png" alt="bse-112" width="100%" />

Click “Update” then click “Verify.”

<img src="/images/tutorial/bot-studio/bse-113.png" alt="bse-113" width="100%" />

Next, disable auto-reply messages and greeting messages

<img src="/images/tutorial/bot-studio/bse-114.png" alt="bse-114" width="100%" />

Voila! You have successfully deployed your bot to LINE Messenger.

Scan the QR Code in LINE Developer Console to add the bot.

<img src="/images/tutorial/bot-studio/bse-115.png" alt="bse-115" width="100%" />

Then, test to scan QR Code

<img src="/images/tutorial/bot-studio/bse-116.png" alt="bse-116" width="50%" />
