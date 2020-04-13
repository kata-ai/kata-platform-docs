---
id: modules-faq
title: FAQ Module
---

FAQ Module lets your chatbot answer questions your customers often ask. It's excellent for anyone who wants to reduce the workload of their customer service department. With this module, you can build the knowledge-base to handle the repetitive questions, so your live agents can focus on more complex problems.

This module is integrated with CMS Studio. It means anyone on your team can collaborate on the FAQ section without the need for programming or technical skills.

## How to Use

You need to activate the module to use it. If you don't know how, see the documentation [here](http://docs.kata.ai/modules/introduction).

After you activated the module, we need to set default setup for CMS:

### Setup on Kata Platform

1. Go to CMS Studio to see the module's components.
2. Create new deployment and create an environment to add Kata Dashboard URL. This dashboard is where your CMS users add or edit the module contents.
3. Next, go to **CMS Studio > Users** to invite users who will access your dashboard.
4. Once they confirmed the invitation via email, your users can access the dashboard and collaborate on the FAQ section.

### Adding/editing Module Contents on Kata Dashboard

To use Kata Dashboard, you have to be invited to your project's Dashboard. You can ask your developers to include your email as users.

After you accepted the invitation on your email, you will be redirected to Kata Dashboard. If you are new to Kata Platform, you will be asked to create a password for your account. If you are already a registered user, you can enter your current password to log in.

(1) Click on **Module page > Module form**. You will see 2 elements: **text** and **FAQ table**.

(2) `answerNotFoundText` element is used to edit bot responses if the bot doesn't have the answer to users' question. For example: `Saya tidak menemukan jawaban atas pertanyaan kamu.`

(3) `faq` is used to build the knowledge-base of your FAQ. It contains:

1. Label: To define the main topic of the question.
2. Question: To define how your users would ask the question. This module uses [**QISG**](https://docs.kata.ai/nl-studio/entity/#trait) NL type with question label. Other sentence type such as instruction or statement won’t be recognized by the module. You shall see “Guideline for Add Question“ section
3. Answer: To define bot response to a question.

### Guideline for Adding Question

For adding new questions, you can follow this guideline :

1. Put only keywords which is the main topic of user’s question. For example, you have a label named `Buy Product`. You predict your user will say : `Bisa beli produk A gak?` then highlight `beli produk A` as the keyword question. 
2. Do not use question words (5W+1H) and question mark. For example, you have a label named `Buy Product`. 
    1. You predict your user will say : `Bisa beli produk A gak?`. Do not enter `?` , because those are too common in question sentence. Hence, the module will confuse to answer the question and may show incorrect answer.
    2. Another example. Assume user will say : `Bagaimana cara membeli produk A?` . Do not enter `Bagaimana` as question, because module FAQ had trained question words such as `bagaimana, gimana, bgmn, how, why, `etc and it is not necessarily needed.
3. Match the number of questions between labels. For example, you have 3 labels such as `Buy Product`, `Checkout`, and `Shipping`.  `Buy Product` label has 20 questions, but `Checkout` label only 10 questions. You must add another 10 questions in `Checkout` label.


Here's an example:

```
Label: Create Flow
        
-Start-
Question : gimana cara bikin **flow**
Answer : Flow itu sifatnya harus “volatile” artinya flow tersebut harus segera ditutup ketika terjadi perpindahan flow. Caranya dengan set "volatile: true"
-End-
        
-Start-
Question: gmn sih bikin **flow **yang bener
Answer: Flow itu sifatnya harus “volatile” artinya flow tersebut harus segera ditutup ketika terjadi perpindahan flow. Caranya dengan set "volatile: true"
-End-
        
Label : Metadata Channel
-Start-
Question: penggunaan **metadata channel** gmn
Answer: Kamu bisa menggunakan metadata channel untuk membedakan respons. Setiap metadata terdiri dari: 1. Channel type2. Channel access token3. Sender ID
-End
        
-Start-
Question: cara pake **metadata channel** bagaimana
Answer: Kamu bisa menggunakan metadata channel untuk membedakan respons. Setiap metadata terdiri dari: 1. Channel type2. Channel access token3. Sender ID
-End
```

## Components

FAQ module used several components in Bot and CMS page. This has already done by us, so you don't need to configure anything.

**Bot flows**

- Init state
  - Init action: Triggers the FAQ flow.
- FAQ state
  - faq action: Answers FAQ based on CMS.

**CMS page**

- FAQ form
  - Text elements for all bot responses.
  - FAQ elements to build the knowledge-base
