---
id: nl-studio-training-guideline
title: Training Guideline
prev: nl-studio-designing-nlu
next: nl-studio-using-kata-cli
---

## Tips

Training process is done to make machine can determine what answers need to be given if an input is received. The process is run based on provided data training.

In NL Studio, the training process for an NLU will be carried out for all models (entities) in it. For example, note NLU-A with entity-1, entity-2, and entity-3. Because each entity has its own model, NLU-A has 3 models that run individually. If the user enters training data for NLU-A means the user is inputing training for the entity-1 model, entity-2 model, and entity-3 model.

Here are few things to be considered when do training:

- **Various forms of language:** Enter training data with various language forms such as formal, informal, slang, and long or short sentences. If only one data type is trained, it will produce a model that will only be good in the form of the sentence

- **Avoid imbalance data between labels:** Imbalance of data causes bias for a label. Slight data differences are not a problem, but large differences in data amoun can make word input too significant on certain labels and cause bias.

- **Counter training:** Counter training is entering training data process that is not classified into defined labels.
For example, there is an entity that can predict book genres into 3 categories (horror, fiction, biography). Each label has been given training data and has been able to cover their respective genres. Then, input is entered with a new category called 'history'. Because the model can only distinguish between the 3 labels and assumes that each book must be categorized into 3 labels, the model cannot answer 'not all three' or 'none'. This is one example of the importance of counter training if needed. The way to do counter training is to enter data without giving any intent / tags.

- **Add a new label to trained entity:** If you want or need to add a new label, train the label with as much data as the other labels. For example an entity with 5 labels each of which has 10 data. Then added 1 new label, train the label up to approximately 10 data as well. In addition, the train returned 5 other labels with some new data.

- **Ambiguous data:** Avoid entering ambiguous training data into different labels. Ambiguous data can be caused by similar user input, but the intent itself depends on the asked question. For example, user can enter the message 'sudah' in the situation where the bot asks 'apakah sudah makan?' (smalltalk flow) or 'apakah sudah menikah?' (credential flow). The sentence can be considered as 'intent:doneEating' or 'intent:married'. To reduce ambiguity, you can't enter data 'sudah' to neither label doneEating nor married. If the data is 'sudah menikah', it doesn't matter to train it as 'intent: married' because there is a word 'menikah' that could distinguishes the labels. For the ∂ata 'sudah', train it to different label such as 'intent: done' and adjust the bot accordingly.

## Bot, NL, and Training

- The process of creating a bot, the NL used in the bot, and the training process are influence each other. Some limitations that may be encountered in NL result can be further processed through BOT.
- NL complexity is affected by BOT complexity. So that, more complex a BOT is, more complex the NL will be and more training data that needs to be inputted.
- Especially for NL, even though it has been trained as well as possible, there is still the possibility in predicting incorrect data. This is naturally encountered and can be overcome by adding training data or doing post-processing in BOT.
