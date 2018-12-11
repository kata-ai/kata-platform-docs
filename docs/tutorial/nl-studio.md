---
id: nl-studio-tutorial
title: NL Studio Tutorial
prev: bot-studio-tutorial
next: integration-chatbot-with-nl-studio
---

## Introduction

In [Bot studio tutorial](/tutorial/bot-studio/), we learned how to make keyword-based chatbot to order pizza. However, keyword-based chatbot is not so smart. In this tutorial we will learn how to enhance the chatbot using NL Studio.

## Creating a NL Model with NL Studio

### Login to Kata | platform

Login to Kata | Platform by entering your username and password.
![nlst-1](/images/tutorial/nl-studio/nlst-1.png)
Click Login to continue

### Create Entity Label

After you entered to Kata Platform, click on the project you've created
![nlst-2](/images/tutorial/nl-studio/nlst-2.png)

Then, click on NLU on the side bar
![nlst-3](/images/tutorial/nl-studio/nlst-3.png)

Next, click Create Entity. Entity has similar definition with NL Model. It will help us to classify every input from users.
![nlst-4](/images/tutorial/nl-studio/nlst-4.png)

Now, create an entity called `intent` that with 4 labels: `order`, `askOptions`, `confirm` and `cancel`. Further explanation about entity is explained in [NL Studio Guideline - English](https://temankata.quip.com/qXbtAld1g8mm)
![nlst-5](/images/tutorial/nl-studio/nlst-5.png)

### Create Entity Type

In this entity `type`, we will create an entity with dictionary type (further explanation about entity dictionary type is explained in [NL Studio Guideline - English](https://temankata.quip.com/qXbtAld1g8mm)). This entity will handle pizza type selection. Add new entity and fill in the data as follows

![nlst-6](/images/tutorial/nl-studio/nlst-6.png)

Then, continue filling the dictionary by adding other types
![nlst-7](/images/tutorial/nl-studio/nlst-7.png)

### Create Entity Size

Entity `size` is used to handle pizzas size. In this entity, we will use `Belongs to` feature which binds an entity under another entity (further explanation about belongsTo usage is explained in [NL Studio Guideline - English](https://temankata.quip.com/qXbtAld1g8mm)). We will put entity `size` under entity `type`.

![nlst-8](/images/tutorial/nl-studio/nlst-8.png)

In dictionary section, enter a keyword as a prediction for input from users
![nlst-9](/images/tutorial/nl-studio/nlst-9.png)

### Create Entity Crust

Next, we will create an entity named `crust` to find out crust type on pizza. We'll put it under entity `type`.
![nlst-10](/images/tutorial/nl-studio/nlst-10.png)

Enter the data as follows
![nlst-11](/images/tutorial/nl-studio/nlst-11.png)

### Create Entity Qty

In pizza chatbot which we created earlier, user must enter pizza number to purchase using regex (regular expression.)

Entity `qty` will use dictionary by entering numbers or keywords related to the number of pizzas ordered. Add entity then fill in the form as follows
![nlst-12](/images/tutorial/nl-studio/nlst-12.png)

Then, fill in as below
![nlst-13](/images/tutorial/nl-studio/nlst-13.png)

After you've created entities, try to train data using your defined entities.

### Training Your Model

To start training, enter Training menu under NLU
![nlst-14](/images/tutorial/nl-studio/nlst-14.png)

Enter a simple phrase like "want pizza" and press "enter" on your keyboard
![nlst-15](/images/tutorial/nl-studio/nlst-15.png)

Then, in this section you can start tagging and classifying text. Click on Add Trait, then select `intent: order`.
![nlst-16](/images/tutorial/nl-studio/nlst-16.png)

Click Train to submit your dataset.
![nlst-17](/images/tutorial/nl-studio/nlst-17.png)

Then, add a few more sentences to train more data. You can follow this
![nlst-18](/images/tutorial/nl-studio/nlst-18.png)

In our next example, we will do partial tagging by entering text and doing text selection on the word we want to tag. **The process of selecting text can be done by blocking one or more words at a time using a cursor.**

You can follow the example in this following picture. On the sentence "how much american all star", select only on the word "American all star"
![nlst-19](/images/tutorial/nl-studio/nlst-19.png)

Then, select entity `type` to classify
![nlst-20](/images/tutorial/nl-studio/nlst-20.png)

You can also enter a phrase "I want American all star pizza, two and bbq hand tossed one" and tag it like this
![nlst-21](/images/tutorial/nl-studio/nlst-21.png)

You may see a number beside an entity. That number represents how accurate an entity identifies a phrase (highest is 1.0)

Try to tag more sentences.
![nlst-22](/images/tutorial/nl-studio/nlst-22.png)

Next, we will define parent entity using `BelongsTo`. Click on `BelongsTo` dropdown on `small` phrase, then select "Pepperoni". Final result looks like this
![nlst-23](/images/tutorial/nl-studio/nlst-23.png)

### Testing NLU in Prediction Console

Use Test NLU to test a dataset.
![nlst-24](/images/tutorial/nl-studio/nlst-24.png)

Enter a word such as "i want two aas" (read: aas means American All Star). You can see the prediction result as you can see in this image
![nlst-25](/images/tutorial/nl-studio/nlst-25.png)

## Adjusting the Dataset

When performing NLU prediction in Test NLU, sometimes the prediction result is wrong, incomplete, or still has a low confidence score.
![nlst-26](/images/tutorial/nl-studio/nlst-26.png)

For example, the sentence above should be tagged as `intent:order`. However, prediction result has no prediction to order. To improve or fix a prediction, enter Log menu.

### Enter Log Menu

Go to Log menu under NLU
![nlst-27](/images/tutorial/nl-studio/nlst-27.png)

On this page, you will see previous dataset when you have predicted on Test NLU.

### Fix The Prediction

We will adjust the dataset. Click on pencil icon (which placed in left icon)
![nlst-28](/images/tutorial/nl-studio/nlst-28.png)

Then, select `intent:order`.
![nlst-29](/images/tutorial/nl-studio/nlst-29.png)
Click train to revise the prediction. Trained data will be seen as follow.
![nlst-30](/images/tutorial/nl-studio/nlst-30.png)

You will receive a notification after you click “Train”

### Test NLU with data that has been fixed

We will try to predict another dataset and see if the result has been improved. Click Test NLU and enter a phrase "hi, do you sell aas".
![nlst-31](/images/tutorial/nl-studio/nlst-31.png)

Congratulations, now you have learned how to train entity in NL Studio.
