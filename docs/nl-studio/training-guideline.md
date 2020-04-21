---
id: nl-studio-training-guideline
title: Training Guideline
prev: nl-studio-designing-nlu
next: nl-studio-using-kata-cli
---

## Tips

Training process is carried out to create the model based on nlu's structure and training data.

In NL Studio, a single training data will be used to train all entities in an NlU. For example, there is NLU-A with entity-1, entity-2, and entity-3, where ech entity represent their separate model. When user input training data for NLU-A, the training data will be used to create model for entity-1, model for entity-2, and model for entity-3.

Here are some things to be considered when training:

- **Various language's style:** Enter training data with various language's style such as formal, informal, slang, also long and short sentences. If you only train with certain style, the model would only be good in that form.

- **Avoid imbalance data between labels:** Imbalance data can cause bias between labels.

- **Counter training:** Counter training is used to tell the model that there are data that are not one of the defined labels. For example, an entity that can classify book's genre into 3 categories (horror, fiction, biography). For those three categories, the training data has been inserted. Suddenly, user try to predict a book with the genre 'history'. Because the model can only distinguish between three labels and assume that all books must be categorized into one of those three, the model can not answer 'none'. In order to introduce the 'none' label to the model, we need to do counter train by entering data without label.

- **Add a new label to trained entity:** If you want or need to add a new label, train the new label with as much data as the other labels. For example an entity with 5 labels, each has 10 data. Then we add 1 new label, train the new label up to +- 10 data. Besides that, train 5 previous labels with some new data.

- **Ambiguous data:** Avoid entering ambiguous training data into different labels. Ambiguous data can be caused by similar user input, but the intent itself depends on the asked question. For example, user can enter the message 'sudah' in the situation where the bot asks 'apakah sudah makan?' (smalltalk flow) or 'apakah sudah menikah?' (credential flow). The sentence can be considered as 'intent:doneEating' or 'intent:married'. To reduce ambiguity, you can't enter data 'sudah' to neither label doneEating nor married. If the data is 'sudah menikah', it doesn't matter to train it as 'intent: married' because there is a word 'menikah' that could distinguishes the labels. For the ∂ata 'sudah', train it to different label such as 'intent: done' and adjust the bot accordingly.

## Bot, NL, and Training

- The process of creating a bot, the NL used in the bot, and the training process are influence each other. Some limitations that may be encountered in NL result can be further processed through BOT.
- NL complexity is affected by BOT complexity. So that, more complex a BOT is, more complex the NL will be and more training data that needs to be inputted.
- Especially for NL, even though it has been trained as well as possible, there is still the possibility in predicting incorrect data. This is naturally encountered and can be overcome by adding training data or doing post-processing in BOT.
