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

![bse-2](/images/tutorial/bot-studio/bse-2.png)

Then fill the form with a username, an email, and an account type. Continue by clicking "Sign Up."

![bse-3](/images/tutorial/bot-studio/bse-3.png)

You will get a confirmation email once our team has verified your account.

You may follow the instructions provided in the confirmation email to activate and start using your account.

## **Create a Project**

### **Login to Kata | Platform**

On your browser, open [_http://platform.kata.ai/login_](http://new-platform.katalabs.io/login) and enter your username & password.

![bse-4](/images/tutorial/bot-studio/bse-4.png)

Click "Login" to continue.

### **Create a project**

After you logged in, you will be taken to the Project Page.

![bse-5](/images/tutorial/bot-studio/bse-5.png)

Click on “Create Project” and fill in the form. Each project contains one bot design, one NL, and one CMS.

![bse-6](/images/tutorial/bot-studio/bse-6.png)

NLU language is used to determine which language model you want to use. Currently, we support Bahasa Indonesia and English.

You can also choose NLU Visibility to be public or private. If you choose public, **all Kata | Platform users **can utilize your NLU using root and inherit function.

## **Create Fallback Flow**

### **Create fallback flow**

Once you create a project, you will be redirected to the Bot Studio menu.

Now we are going to learn how to create a flow. Flow is a container of **intent, state, and action**. A flow typically represents a linear process.

The first flow that we will create is a Fallback Flow. Its purpose is to handle undefined users input, or commonly called “else condition” state. In this case, the “else condition” is everything that is not “Start Order”.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

You may find a flow that is created automatically by the system or default flow. We will delete that flow by pressing more button and then “Delete.”

![bse-8](/images/tutorial/bot-studio/bse-8.png)

Next, click “Create Flow” button to create `fallback` flow. Set flow to active, persistent, and default.

![bse-9](/images/tutorial/bot-studio/bse-9.png)

### **Create fallback intent**

After you have created `fallback` flow, we will create new intent by pressing the Intents tab on the sub-menu. Then, we will create a new intent for `fallback` flow. Click “Create Intent” button to create.

![bse-10](/images/tutorial/bot-studio/bse-10.png)

Then, fill in the form as follows

![bse-11](/images/tutorial/bot-studio/bse-11.png)

### Create State init

Next, we will create a state called `init`. Click the ”+” button at the bottom right of your screen.

![bse-12](/images/tutorial/bot-studio/bse-12.png)

Fill state with name `init` on Overview tab and set it to initial state and end state (as shown below).

Enabling Initial State and End State will make `init` the first and the last flow to be checked by the bot when there isn't any flow that matches a user's input.

![bse-13](/images/tutorial/bot-studio/bse-13.png)

Now we will create a bot response to display an apology message. Click “Add actions” button to create a response.

![bse-14](/images/tutorial/bot-studio/bse-14.png)

Container for creating action will appear

![bse-15](/images/tutorial/bot-studio/bse-15.png)

### Create Action Text in State init

Click on “+” button to create a new action.

![bse-16](/images/tutorial/bot-studio/bse-16.png)

Choose action type “Text”

![bse-17](/images/tutorial/bot-studio/bse-17.png)

Then, fill in the form

![bse-18](/images/tutorial/bot-studio/bse-18.png)

Click on “Create Action” button.

![bse-19](/images/tutorial/bot-studio/bse-19.png)

### Create Self Transition in State Init

The last step to finalize `fallback` flow is to create self-transition for `init` state. Self transition is required to avoid error when the next state is not available. Click on “Transitions” and enable Self Transition.

![bse-20](/images/tutorial/bot-studio/bse-20.png)

Click “Create” button. Your screen should look like this

![bse-21](/images/tutorial/bot-studio/bse-21.png)

## Create Order Flow

Next, we will create `Start Order` flow to handle pizza order.

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create Flow Order

First step is to create another flow called `order` .

![bse-22](/images/tutorial/bot-studio/bse-22.png)

Created flow will be shown like this

![bse-23](/images/tutorial/bot-studio/bse-23.png)

### Create Keyword NLUs for 'Order'

In this step, we will define the NLU (Natural Language Understanding) to trigger `order` flow. NLU is used to translate user inputs into data that machine can understand. There are many types of NLU, but the type that we will use in this particular flow is called `keyword`. To define the NLU, go to NLUs menu.

![bse-24](/images/tutorial/bot-studio/bse-24.png)

Next, click on “Create NLU”

![bse-25](/images/tutorial/bot-studio/bse-25.png)

Choose Keyword type and enter keywords that represents `order`, such as “order”, “pls order”, “order pza”.

![bse-26](/images/tutorial/bot-studio/bse-26.png)

Successfully created NLU looks like this

![bse-27](/images/tutorial/bot-studio/bse-27.png)

### Create Intent for Order

Each flow requires an `intent` to classify user's inquiry and trigger matching flow. So our next step is to set initial intent for `order` flow.

Go back to Conversation Flow menu and click on `order` flow, then click on “Intents” tab.
![bse-28](/images/tutorial/bot-studio/bse-28.png)

Previously, you already created keyword NLUs called `order`. We will set that keyword as intent in `order` flow. Map the NLU on classifier section.
![bse-29](/images/tutorial/bot-studio/bse-29.png)

Click “Create” to create the intent. Your screen should look like this
![bse-30](/images/tutorial/bot-studio/bse-30.png)

### Create a State Named init

Every flow must have at least one state. Because we haven't created any state in `order` flow, we have to create one. Let's create a state called `init` . Set the state as initial and then enable self-transition.

![bse-31](/images/tutorial/bot-studio/bse-31.png)
![bse-32](/images/tutorial/bot-studio/bse-32.png)

Click “Create” button to create initial state.

Next, we will define how the bot will respond to user who entered `order` flow.

## Create Action for Pizza Menu

As seen on the conversation tree below, the first message in `order` flow is “Show Pizza Type”

![bse-1](/images/tutorial/bot-studio/bse-1.jpg)

### Create a State to Show Pizza type in Text Action Type

To get started, we need to create a state named `showPizza` on `order` flow. Click on “+” button in Conversation Flow menu.
![bse-33](/images/tutorial/bot-studio/bse-33.png)

Let's begin by creating an action called `pizzaOptions`. This action will inform users in **text about our available pizza menu**.

Click on “+” button to create an action and choose Text as action type.
![bse-34](/images/tutorial/bot-studio/bse-34.png)

Fill in Text action type to inform our pizza menu
![bse-35](/images/tutorial/bot-studio/bse-35.png)

Click on “Create Action” to finalize. Next step is to create an action called `askOptions`
![bse-36](/images/tutorial/bot-studio/bse-36.png)

Click on “Create Action” button. Your form should look like this
![bse-37](/images/tutorial/bot-studio/bse-37.png)

Click “Create” to create the state. Successfully created state will look like this
![bse-38](/images/tutorial/bot-studio/bse-38.png)

### Update showPizza state Into Show Pizza Menu in Carousel Action Type

Previous step is an example to create action to** show pizza menu in text. **Let's try to update the state into Carousel action type.

To update the state, click on `showPizza` state and an update state form will appear
![bse-39](/images/tutorial/bot-studio/bse-39.png)Then, remove all actions in the state by clicking “x” on each action.
![bse-40](/images/tutorial/bot-studio/bse-40.png)
After removing available actions, we will create an action called `pizzaMenu` as Carousel action type.

Click on “Add” actions button then click on “+” button to create a new action. Choose Carousel action type to continue.
![bse-41](/images/tutorial/bot-studio/bse-41.png)

Enter `pizzaMenu` as name
![bse-42](/images/tutorial/bot-studio/bse-42.png)

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
![bse-43](/images/tutorial/bot-studio/bse-43.png)

Your second form should look like this
![bse-44](/images/tutorial/bot-studio/bse-44.png)

Finalize this step by clicking “Create Action.”

It should look like this
![bse-46](/images/tutorial/bot-studio/bse-45.png)

Once the bot displays a carousel containing the type for pizza menu, its next step is to ask user to select the pizza. Click “Add actions” button to trigger drop-down list, then choose `askOptions`
![bse-47](/images/tutorial/bot-studio/bse-46.png)

After you select `askOptions` action click “Create Action” button to finalize this step.
![bse-48](/images/tutorial/bot-studio/bse-47.png)

Your form should look like this
![bse-49](/images/tutorial/bot-studio/bse-48.png)

Click “Update” to update the state.

### Create Intent to Choose A Pizza

Now we have to create an intent called `pizzaChosen` to handle user's input after they have selected a pizza type. Click on Intent menu in `order` flow.
![bse-50](/images/tutorial/bot-studio/bse-49.png)

Click on Create Intent and create intent as follow
![bse-51](/images/tutorial/bot-studio/bse-50.png)

Successfully created intent looks like this
![bse-52](/images/tutorial/bot-studio/bse-51.png)

### Create Transition between init and showPizza

Now, we will create a transition between two states that we have created before.

Click the green dot on `init` state, and a connector line will appear. Connect that line to `showPizza` state. If you do it right, a Create Transition form will appear.

![bse-53](/images/tutorial/bot-studio/bse-52.png)
Fill in the form with these data, and click “Create”

### Create 'reenter' intent

Next, we will add `reenter` intent so the bot can return to its previous state after triggering fallback state. Create the intent in `order` flow.

![bse-54](/images/tutorial/bot-studio/bse-53.png)

## Create Action for Asking Pizza Quantity

In this step we will learn how to create “Ask quantity” state.
![bse-55](/images/tutorial/bot-studio/bse-1.jpg)

### Create pizzaQuantity state

In this step we will create `pizzaQuantity` state to handle order quantity. The type of action we will use is in this state is Text. Click on “+” button on `order` flow and fill the form as follows
![bse-56](/images/tutorial/bot-studio/bse-54.png)

Result :
![bse-57](/images/tutorial/bot-studio/bse-55.png)

### Create NLUs quantity

Afterwards, we have to handle user's input with NLUs. Because we only allowed number from 1 to 9, we will create a limitation in regex format. Click on Create NLUs and follow this screenshot
![bse-58](/images/tutorial/bot-studio/bse-56.png)

Successfully created NLU will be shown like this
![bse-59](/images/tutorial/bot-studio/bse-57.png)

### Create Intent quantity

After we created the NLU, we will add an intent to respond user's input. In `order` flow, click on Create Intent and fill in the form
![bse-60](/images/tutorial/bot-studio/bse-58.png)

Successfully created intent will look like this
![bse-61](/images/tutorial/bot-studio/bse-59.png)

### Create Transition between showPizza and pizzaQuantity

Now we have to create a transition between `showPizza`and `pizzaQuantity`. We will also store `payload.pizza` value into `context.pizza`. Click on the blue dot on `showPizza` and drag the line to `pizzaQuantity` state to create the transition. Create Transition form will appear after you have successfully connected the states.
![bse-62](/images/tutorial/bot-studio/bse-60.png)

Created transition will look like this
![bse-63](/images/tutorial/bot-studio/bse-61.png)

## Create Confirmation Action

Our next step is creating `Ask confirmation` state.
![bse-64](/images/tutorial/bot-studio/bse-1.jpg)

### Create “YESNO” keyword NLUs

First, we will create a keyword NLU to handle `yes` and `no`. Click on Create NLUs and fill in as follows

![bse-65](/images/tutorial/bot-studio/bse-62.png)

Successfully created NLU will look like this
![bse-66](/images/tutorial/bot-studio/bse-63.png)

### Create confirmPizza state

Now we will create `confirmPizza` state to handle order confirmation. We will also store chosen pizza & quantity information in this state. Select `order` flow and click on “+” button to create `confirmPizza` state .
![bse-67](/images/tutorial/bot-studio/bse-64.png)

Click Create Action. Your screen should look like this
![bse-68](/images/tutorial/bot-studio/bse-65.png)

### Create a transition from pizzaQuantity to confirmPizza

We will make a transition by storing value (mapping) from pizza quantity **and** chosen pizza type. Click the blue dot on `pizzaQuantity` and drag the line to `confirmPizza` state to create a transition. Create Transition form will appear after you successfully connected the states.
![bse-69](/images/tutorial/bot-studio/bse-66.png)

Add mapping in onTransit tab
![bse-70](/images/tutorial/bot-studio/bse-67.png)

Result will be shown as follows
![bse-71](/images/tutorial/bot-studio/bse-68.png)

### Create intent yesno

Previously, we already made an NLU containing `yes` and `no` keywords. We will use that NLU as a classifier on an intent.

First of all, we will create an intent in `order` flow for the keyword `yes`
![bse-72](/images/tutorial/bot-studio/bse-69.png)

Then, we will create an intent for keyword `no`
![bse-73](/images/tutorial/bot-studio/bse-70.png)

Both intent will appear as follows
![bse-73](/images/tutorial/bot-studio/bse-71.png)

### Create done state

In `done` state, we will complete the order by saying thank you and end the conversation. We will also set a condition when a user wants to cancel the order. So in this state we will create two actions: `sayThanks` and `sayCancel`.

![bse-74](/images/tutorial/bot-studio/bse-72.png)

![bse-74](/images/tutorial/bot-studio/bse-73.png)

Result:
![bse-75](/images/tutorial/bot-studio/bse-74.png)

### Create a transition from confirmPizza to done

Next, we will connect `confirmPizza` state to `done` state. Because `done` is the last state, we will set it as default transition. Connect `confirmPizza` to `done` by clicking the blue dot and drag the line to connect the states. Create Transition form will appear after you have successfully connected the states.
![bse-76](/images/tutorial/bot-studio/bse-75.png)

Final flow:
![bse-77](/images/tutorial/bot-studio/bse-76.png)

## Publish Your Bot

To save your work, click on Publish button located at the top right of your screen. Fill in the changelog as “initial version of pizza bot” for future reference. Click “Publish” to continue.
![bse-78](/images/tutorial/bot-studio/bse-77.png)

![bse-79](/images/tutorial/bot-studio/bse-78.png)

Every time you publish a bot, it will record a hash number (similar to Git's hash number) in Revision List.
![bse-80](/images/tutorial/bot-studio/bse-79.png)

## Testing Your Chatbot

Click on Test Chatbot on Bot Studio then type “order” to initialize `order` flow.
![bse-81](/images/tutorial/bot-studio/bse-80.png)

Check on the rest of the flow and make sure everything you've made works.

## Deploy Your Chatbot

Now we will try to deploy our chatbot to LINE Messenger.

### Create deployment

First of all, we have to create a deployment first. Find the “Deployment” menu on the left sidebar.
![bse-82](/images/tutorial/bot-studio/bse-81.png)

Click on Create Deployment button on top right
![bse-14](/images/tutorial/bot-studio/bse-82.png)

Choose Patch on Deployment Version.
![bse-14](/images/tutorial/bot-studio/bse-83.png)

Succesfully created deployment looks like this.
![bse-14](/images/tutorial/bot-studio/bse-84.png)

### Create Environment

Kata | Platform 3.0 allows you to set up 3 separate environments in your project: Development, Staging, and Production. Inside each environment, you can add as many messaging channel as you like. You have to setup environment first before integrating to messaging channel.

In this tutorial, we will try to setup Production environment. Click on Environment menu under Deploy and you will be shown 3 available environments.
![bse-14](/images/tutorial/bot-studio/bse-85.png)
Click “Create Environment” button in Production.

The first field we have to fill in is deployment version. Choose 0.0.1 (shown on the previous step) as deployment version in Production.

Another field we have to fill in is environment URL. This URL is used to access CMS Client later. You can read the full explanation about CMS Client [here](http://sss.c/).
![bse-14](/images/tutorial/bot-studio/bse-86.png)

Successfully created environment will look like this
![bse-14](/images/tutorial/bot-studio/bse-87.png)

Next, we need to create channel inside the environment. Click on Create Channel on Production environment and you will be redirected to Create Channel page
![bse-14](/images/tutorial/bot-studio/bse-88.png)

Next, click “Create Channel” and fill in as follows
![bse-14](/images/tutorial/bot-studio/bse-89.png)

Let's setup LINE developer console so you can fill in fields highlighted with red box.

### Registration to LINE Developer console

**Create LINE account**

To sign up for a LINE developer account, you have to have a LINE account by [installing LINE application, either desktop or mobile app](https://line.me/en/download). After you successfully registered, sign in to https://developers.line.biz/en/

In LINE Developer Console click Log In.
![bse-14](/images/tutorial/bot-studio/bse-90.png)

Click on Log in with LINE
![bse-14](/images/tutorial/bot-studio/bse-91.png)

Enter your email and password
![bse-14](/images/tutorial/bot-studio/bse-92.png)

After you successfully logged in, you will be redirected to provider list dashboard
![bse-14](/images/tutorial/bot-studio/bse-93.png)

**Create a Provider**
Click “Create New Provider”
![bse-14](/images/tutorial/bot-studio/bse-94.png)

Fill in provider name
![bse-14](/images/tutorial/bot-studio/bse-95.png)

Click Confirm to continue. You will have to re-confirm the provider name since it cannot be changed later. Click “Create” to confirm.
![bse-14](/images/tutorial/bot-studio/bse-96.png)

### Setup Channel for LINE Integration

Setup channel in Messaging API by clicking Create Channel on Messaging API.
![bse-14](/images/tutorial/bot-studio/bse-97.png)

Fill in the form as follows
![bse-14](/images/tutorial/bot-studio/bse-98.png)
![bse-14](/images/tutorial/bot-studio/bse-99.png)

Next, you have to choose **Developer Trial as Plan**
![bse-14](/images/tutorial/bot-studio/bse-100.png)Continue to click Confirm.

Accept Terms of Use from LINE then click Create
![bse-14](/images/tutorial/bot-studio/bse-101.png)

Successfuly created channel will look like this
![bse-14](/images/tutorial/bot-studio/bse-102.png)

### Integration LINE and Your Chatbot

Click on created channel to fill in Channel Access Token and Channel Secret. Here is the guideline to fill in those fields

**Fill in Channel Access Token field**
Click “Issue” in Messaging Settings section
![bse-14](/images/tutorial/bot-studio/bse-103.png)

Then, issue dialog will pop up. Click on Issue to continue
![bse-14](/images/tutorial/bot-studio/bse-104.png)

Then, copy Channel Access Token below and paste it on Create Channel form in Kata | Platform
![bse-14](/images/tutorial/bot-studio/bse-105.png)
![bse-14](/images/tutorial/bot-studio/bse-106.png)

**Fill in Channel Secret field**

In Basic Information, copy Channel Secret from LINE to Kata | Platform
![bse-14](/images/tutorial/bot-studio/bse-107.png)
![bse-14](/images/tutorial/bot-studio/bse-108.png)

Final result in Kata | Platform will look like this
![bse-14](/images/tutorial/bot-studio/bse-109.png)

Click “Create” to generate webhook URL from Kata | Platform.
![bse-14](/images/tutorial/bot-studio/bse-110.png)

After webhook URL is generated, go to Messaging Settings in LINE developer console to enable webhook.
![bse-14](/images/tutorial/bot-studio/bse-111.png)Click “Update” then paste the webhook URL to LINE developer console.
![bse-14](/images/tutorial/bot-studio/bse-112.png)Click “Update” then click “Verify.”
![bse-14](/images/tutorial/bot-studio/bse-113.png)Next, disable auto-reply messages and greeting messages
![bse-14](/images/tutorial/bot-studio/bse-114.png)Voila! You have successfully deployed your bot to LINE Messenger.

Scan the QR Code in LINE Developer Console to add the bot.
![bse-14](/images/tutorial/bot-studio/bse-115.png)
