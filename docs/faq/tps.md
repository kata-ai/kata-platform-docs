---
layout: faq-page
id: faq-tps
title: TPS FAQ
---

## What is TPS in Kata Platform?

TPS stands for Transaction per Second, Transaction consists of incoming & outgoing message traffic through Kata Platform. Now we have a limit for the transaction happening in each project in Kata Platform.

## What do you mean by limit for the transaction?

It means we limit the incoming & outgoing message traffic in Kata Platform. Think of it as bandwidth, the bigger your project’s TPS limit, the bigger your bandwidth for message traffic processing.

## How do we know the TPS limit for our project?

We separate the categories of the project into two: Paid Project & Free Project.

- **For Paid Project:** we offer a choice of 3, 5, 10, 15, 30, 60 TPS limit exclusively for each Paid Project (our Rate Card is shown below), also each Paid Project will have a verified badge in Kata Platform.

| TPS | Estimated MAU | API Integrations | Tech Support Availability | Analytics & Reporting | Monthly Subscription |
| --- | ------------- | ---------------- | ------------------------- | --------------------- | -------------------- |
| 3   | ~500          | Up to 1 API      | Office Hours              | Basic                 | **IDR5,000,000**     |
| 5   | ~1,000        | Up to 1 API      | Office Hours              | Basic                 | **IDR7,000,000**     |
| 10  | ~5,000        | Up to 2 APIs     | Office Hours              | Basic                 | **IDR15,000,000**    |
| 15  | ~15,000       | Up to 5 APIs     | Office Hours              | Basic                 | **IDR30,000,000**    |
| 30  | ~50,000       | Up to 10 APIs    | Office Hours              | Advanced              | **IDR60,000,000**    |
| 60  | ~80,000       | Unlimited APIs   | 24/7 Support              | Advanced              | **IDR100,000,000**   |

- **For Free Project:** we offer a shared TPS limit across the Free Project’s user.

Should you need help to upgrade from Free Project to Paid Project or upgrade your TPS limit, please contact us (<business@kata.ai>) and we’ll be happy to assist you.

## What is the impact of the TPS limit for my project?

Imagine a queue, when your project has reached the TPS limit the next message will have to wait until the previous message has done processing. So your user will experience a delay in receiving or sending the message. We will also send an email notification if the Project has reached the TPS limit.

## Does the TPS limit apply to all channels in Kata Platform?

Yes, the TPS limit applies to all channels through Kata Platform and are used by FIFO (First In First Out) method (eg: if the first message is from WhatsApp and the second is from Facebook Messenger. Then the message from WhatsApp is processed first, followed by the message from Facebook Messenger)

## Can I switch from Paid Project to Free Project?

Unfortunately no, but you’re free to choose among the subscription plan we have available.

## How do I upgrade my Free Project to Paid Project?

We’re glad you decide to support us! Please let us know your interest via email: <business@kata.ai> and we would be happy to assist you.
