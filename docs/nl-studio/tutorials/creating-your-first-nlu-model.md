---
id: nl-studio-tutorials-nlu-model
title: 'Creating Your First NLU Model'
description: In this tutorial, we'll show you how to create your first NLU model using NL Studio, which you can use to improve your chatbot.
---

In this tutorial, we'll show you how to create your first NLU model using NL Studio, which you can use to improve your chatbot.

## Login to Kata Platform

Before we start, make sure that you're logged in, either through the Kata Platform dashboard or the Kata CLI. To login via the dashboard, go to [platform.kata.ai/login](https://platform.kata.ai/login) and type in your credentials.

To login via the CLI, type the following:

```sh-session
$ kata login
```

## Designing Entities

Before creating a NLU, you need to find out what things we would like to capture from the user. We'll map these into entities, which you'll create in the NL Studio. You want to have just enough entities so that you have everything you need from the user, but not too much that you have to train using more data.

In the context of our Pizza Bot, we would like to capture the following:

- The _type_ of the pizza.
- The _size_ of the pizza.
- The kind of _crust_ the pizza will have.
- The _quantity_ of pizzas to order.

We will go into what entity type we'll use for each one of them in the next section.

## Creating Entities

[TODO type]

[TODO size]

[TODO crust]

[TODO qty]

## Capturing User Intent

The entity type "Trait" can be used to classify a sentence into particular classes. We can also use this to determine the intention of a user based on their input. Click [here](/nl-studio/entity/#trait) to learn about the "Trait" entity type.

Let's say that the user can use our chatbot for 4 different options. We can

- Start a pizza order (label: `order`)
- Ask the available pizza menu/options (label: `askOptions`)
- Confirm an open order (label: `confirm`)
- Cancel an open order (label: `cancel`)

Then, create our Trait entity called `intent` with the "intent" classifier with the labels we just created.

```yml
entities:
  intent:
    type: trait
    profile: intent
    labels:
      - order
      - askOptions
      - confirm
      - cancel
```

[TODO: example image in botstudio]
