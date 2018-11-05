---
id: nl-studio-training-guideline
title: Training Guideline
prev: nl-studio-designing-nlu
next: nl-studio-using-kata-cli
---

## Tips

The training process is carried out to make the machine determine what answers need to be given if an input is received. This process is executed based on provided training data.

In NL Studio, the training process for an NLU will be carried out for all models in it. For example, it is known that NLU-A with entity-1, entity-2, and entity-3. Because each entity has its own model, NLU-A has 3 models that run independently. If the user enters training data for NLU-A, the user inputs training for the entity-1 model, entity-2 model, and entity-3 model.

Here are some things that need to be considered in the training process.

- **Various forms of language:** Enter training data with various forms of language such as formal, informal, slang, and long or short sentences. If you're train only one data type , it will produce a model that will only be good in the sentence form.

- **Avoid imbalance data between labels:** Imbalance data can cause bias between labels. When the variation in data size is small, it's not a problem. But when it gets large, it can make a word input too significant on a particular label and cause bias.

- **Counter training:** Counter training is entering process training data that is not classified into defined labels. For example, there is an entity that can predict book genres into 3 categories (horror, fiction, biography). Each label has given training data and able to discover each genres. Then the input is entered with a new category that is 'history'. Because the model can only distinguish between those 3 labels and assume that each book must be categorized into these 3 labels, the model cannot answer 'bukan ketiganya' or 'none'. This is one example of counter training importance if needed. How to do counter training is by entering data without giving any intent / tag.

- **Add a new label to trained entity:** If you want or need to add a new label, train the new label with as much data as the other labels. For example an entity with 5 labels, each of which has 10 data. Then we add 1 new label, train the new label up to +- 10 data. Besides that, train 5 other labels with some new data.

- **Ambiguous data:** Avoid entering ambiguous training data into different labels. Ambiguous data can be caused by similar user input, but intent depends on asked question. For example, user can enter the message 'sudah' in the situation where the bot asks 'apakah sudah makan?' (smalltalk flow) or 'apakah sudah menikah?' (credential flow). The sentence can be considered as 'intent:doneEating' or 'intent:married'. To reduce ambiguity, avoid entering ambiguous training data into labels. If entered data is 'sudah menikah', it doesn't matter to train it as 'intent: married' because there is a word 'menikah' that could be distinguishes. For the word 'sudah' itself, it can be trained into different label, 'done'. For each state that is likely to get such an answer can be given the condition (intent = "done").

## Bot, NL, and Training

- The process of creating a bot, the NL used in the bot, and the training process are influence each other. Some limitations that may be encountered in NL result can be further processed through BOT.
- NL complexity is affected by BOT complexity. So that, more complex a BOT is, more complex the NL will be and more training data that needs to be inputted.
- Especially for NL, even though it has been trained as well as possible, there is still the possibility in predicting incorrect data. This is naturally encountered and can be overcome by adding training data or doing post-processing in BOT.
