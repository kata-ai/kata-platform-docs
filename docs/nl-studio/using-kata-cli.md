---
id: nl-studio-using-kata-cli
title: NL Studio using Kata-CLI
prev: nl-studio-training-guideline
---

As prerequisites to create NL using Kata-CLI, install Kata-CLI on your device and login with your account.

## Create NL

To create a new NL using kata-cli, first create a new folder for each NLU. After that, run the following command.
```
kata nl-init <nl_name>
```

It would create a new file `nlu.yml` in which the nlu structure can be defined

```yaml
# nl name
name: nl_name
# language (id | en)
lang: id

# visibility of your nl: public | private (default)
visibility: public

# Entities definition
entities:

    # define the entity for this nlu
    someEntity: ....

    # define other entity for this nlu
    otherEntity: ...
```

Use push command to create and update the NLU
```
kata nl-push
```

## Example

The following is an example on how to define entities through `nlu.yml` file from Kata-CLI.

```yaml
name: nl
lang: id
entities:

    # example for entity type 'dict'
    # need to define your own dictionary
    product:
        type: dict
        profile: default
        dictionary:
            baju:
                - baju
                - pakaian
            celana:
                - celana
                - cln
                - jeans

    # example for entity type 'phrase'
    ner:
        type: phrase
        profile: ner
        labels:
            - person
            - location

    # example using feature belongsTo
    quantity:
        type: phrase
        profile: number
        belongsTo: product

    # example for entity type 'trait'
    intent:
         type: trait
         profile: intent
         labels:
             - greetings
             - order
             - confirm
             - cancel
     # example root to other entity in same nl
     greetingsType:
         type: trait
         profile: default
         root: intent:greetings         # <entity_name>:<label>
         labels:
             - hello
             - bye
     # example root to other entity in different nl
     faq:
         type: trait
         profile: faq
         root: kata:qisg/qisg:question   # <nluId>/<entity_name>:<label>
         labels:
             - faq1
             - faq2
             - faq3

     # example of using inherit
     sentiment:
        inherit: kata:sentiment/sentiment
```

## Bulk Training

Currently bulk training can only be done through CLI with the condition of max 100 sentences (100 lines) per file. Create a `.txt` file and use following syntax to tag the sentence.

```
Saya mau pesan pizza #intent:order
```
Means the sentence is classified into **entity intent** as **label order**

```
Totalnya berapa ya? #intent:ask #questionType:how_much
```
Means the sentence is classified into **entity intent** as **label order** and **entity questionType** as **label how_much**

```
Saya mau pesan tiket ke (@destination Malang) atas nama (@ner:person Budi) #intent:order
```
Means the word “**Malang**” is tagged for **entity destination** and “**Budi**” is tagged for **entity ner** as **label person**

```
Pizza (@item-1 bbq) jumlahnya (@item-1.qty dua) ya #intent:order
```
Means the word “**bbq**” is tagged for **entity item** with **id 1**, “**dua**” is tagged for **entity qty** which **belongs to entity item** with **id 1**. Using id is required for defining belongsTo.


To train the model use the following training command. Give an interval for around 15-30 seconds for the model to completely finish training.

```
kata nl-train -f <file_name>
```

## Prediction

To test your NL, simply use the prediction command.
```
kata nl-predict -s <testing_sentence>
```

