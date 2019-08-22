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

(3) You can also use `askQuestionAgainText` element to direct your users to flow. Example: `Ada yang ingin kamu tanyakan lagi?`

(4) `faq` is used to build the knowledge-base of your FAQ. It contains:

1. Label: To define the main topic of the question.
2. Question: To define how your users would ask the question. This module uses [QISG](https://docs.kata.ai/nl-studio/entity/#trait) NL type with question label. **Make sure you only add question sentences**. Other sentence type such as instruction or statement won't be recognized by the module as training data.
3. Answer: To define bot response to a question.

Here's an example:

```
Label: Shipping

-Start-
Question: Bagaimana cara melakukan pengiriman menggunakan ekspedisi A?
Answer: Saat melakukan checkout, pilih ekspedisi A sebagai pilihan pengiriman produk yang kamu beli
-End-

Label: Shipping

-Start-
Question: Gimana cara kirim?
Answer: Saat melakukan checkout, pilih ekspedisi A sebagai pilihan pengiriman produk yang kamu beli
-End-

Label: Refund

-Start-
Question: Gimana cara melakukan refund?
Answer: Refund bisa dilakukan dengan mengirimkan e=mail ke support@kata.ai
-End-
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
