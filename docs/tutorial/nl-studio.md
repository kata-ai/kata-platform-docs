---
id: nl-studio-tutorial
title: NL Studio tutorial
prev: bot-studio-tutorial
next: bot-template-tutorial
---

## Introduction

In the previous tutorial which is making pizza bot (link for pizza bot tutorial language), the purpose is helping users to order. Moreover, we also make a NLU for bot to understand user conversations. However, created NLUs have limitations such as data should be prepared as much as possible. Therefore, in Kata Platform we have set up NLU menu to help create Natural Language Model that can be customised to your business needs.

Started to a few datasets, NLU studio possible to create NL Model and able to adapt your own flow. The tutorial as follow will create a NL Model using NL Studio. Case study to be made is NL Model for pizza bot

## Creating a NL Model with NL Studio

### Login to Kata platform

Following with previous `pizzaBot` tutorial, we must enter Kata Platform by entering username and password you previously had

![nse-1](./images/nse-1.png)

Click "Login" to continue

### Create new NLU

After you entered to Kata Platform, click NLU menu where located on left screen. Then, the menu will look like this

![nse-2](./images/nse-2.png)

Then, click "+" button to create a new NLU and fill in as follow

![nse-3](./images/nse-3.png)

### Create an `intent` entity

After you created a new NLU, you must enter the entity. The entity will help us in classifying every input from users. Click the "+" button to create an entity

![nse-4](./images/nse-4.png)

First of all, create an entity that is an `intent` classification consisting of 4 `intents` (**order, askOptions, confirm, cancel**). You can customize the intent selection to match your needs. In this entity example we will create 4 `intent` first.

![nse-5](./images/nse-5.png)

### Create entity `type`

In this entity `type`, we will create a NLU with dictionary type which will be limiting and handles pizza type selection. Add new entity and fill in the data as below

![nse-6](./images/nse-6.png)

Then, continue filling the dictionary by adding other words

![nse-7](./images/nse-7.png)

### Create entity `size`

Entity `size` serves to determine pizzas size which ordered by users. In this entity, we will use "Belongs to” which used to provide a marker which entity is under another entity. The entity`size` will be under entity `type`. How to use it will be shown in the picture below.

![nse-8](./images/nse-8.png)

In dictionary section, enter a keyword that will be a prediction input from users

![nse-9](./images/nse-9.png)

### Create entity `crust`

Next, we will create an entity named `crust` that works to find out crust type on pizza. It is under entity `type`. You can enter data according to image below:

![nse-10](./images/nse-10.png)

### Create entity `qty`

In pizza bot which we created earlier, user must enter pizza number to be purchased using intent `regex`. Entity `qty` will be created using dictionary by entering numbers or keywords related to the number of pizzas ordered. Add entity to NLU dashboard, then fill in the data as below

![nse-11](./images/nse-11.png)

You have completed intent creation, then let's try to do dataset training

### Training

In order to data training, you must enter to "Training" menu located on the left side

![nse-12](./images/nse-12.png)

You may enter the dataset to create a NL Model on training page. Enter a simple phrase like "want pizza" and press "enter" on the keyboard

![nse-13](./images/nse-13.png)

Then, in this section you can do tagging and text classification. In entities option, select`intent: order`. Intent order is useful as a user initiation in ordering pizza.

![nse-14](./images/nse-14.png)

Click "Train" to start training. You can also add a few sentences to train more data in making NL Model. You may follow the text below

![nse-15](./images/nse-15.png)

We need to train a lot of data to increase complexity. In our next example, we will do partial tagging by entering text and doing text selection on the word we want to tag. The process of selecting text can be done by blocking one or more words at a time using a cursor.

You can try as in the following picture. In the words "how much american all star", select only on the word "American all star"

![nse-16](./images/nse-16.png)

Then, select entity `type` to classify as below.

![nse-17](./images/nse-17.png)

We may include some keywords as attached to practice more, you can also enter a phrase "I want American all star pizza, two and bbq hand tossed one"

![nse-18](./images/nse-18.png)

Then, we will try the next sentence.

![nse-19](./images/nse-19.png)

To match with created intent, enter the parent of this entity by selecting "belongs to" button and selecting "Pepperoni" because the word "small" is a Pepperoni size reference. In "add trait" option, select `intent:order` to classify as an order

![nse-20](./images/nse-20.png)

Similar to previous image, the words "two" and "medium" have different ownership. The word "two" owned by the "bbq" and "medium" owned by "pepperoni" pizza type. You can also enter other words. Do not forget to add `intent:order` for order sentence structure

### Test on Test NLU

To test whether dataset is created right, you are able to do NLU testing as attached

![nse-21](./images/nse-21.png)

Then, enter the word "i want two aas". You can see the results of previous training data as attached

![nse-22](./images/nse-22.png)

Congratulations, you have completed how to create NL model using NL studio.

## Adjusting the dataset

When performing NLU testing, sometimes the results displayed is not match with our expectations. As the example below (please note the results will differ on each NLStudio, depending on the training data).

![nse-23](./images/nse-23.png)

In the picture above, the sentence has a prediction to order and must be included in `intent:order`. Therefore, we will improve the result from NLModel.

### Enter log menu

First of all, you should be in the "Log" sub-menu of NLU.

![nse-24](./images/nse-24.png)

On this page, you will see dataset when you do previous training.

### Fix the prediction

In the "do you sell american all star" message, we will adjust the dataset. Click on "add trait" and select `intent:order`.

![nse-25](./images/nse-25.png)

Then it will look like as below

![nse-26](./images/nse-26.png)

Click "Train" to train NLModel and you will receive a notice like below

![nse-27](./images/nse-27.png)

### Test NLU with data that has been fixed

Then we will try to test the dataset after doing training above. Click "Test NLU" and enter a phrase "hi, do you sell aas".

![nse-28](./images/nse-28.png)

Congratulations, now you have understood how to train NLModel with your dataset
