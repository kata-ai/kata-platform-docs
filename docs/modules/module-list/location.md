---
id: modules-location
title: Location Module
---

Location Module lets your users find the nearest location of your business. This module is ideal for any industries offering face-to-face customer experiences, such as banking and retail. Your users can share their location, and you can point them to your nearest establishments along with the Google Maps directions.

## Notes

- Location Module contains Carousel action.
- Currently available for Facebook Messenger, LINE Messenger, and Generic Channel.

## How to use

First, you need to activate the module. If you don't know how, see the documentation [here](http://docs.kata.ai/modules/introduction).

Location Module consists of bot flows with location CMS action type. This module uses Trait NL type to trigger the flow. The NL model is already provided by Kata.ai and **it cannot be modified**. Our team will review any inputs from this module to improve its NL model. List of intent we use on this module can be accessed [here](https://drive.google.com/file/d/1poC3Z9BKw16G3Ovoio0KItbGDcTauqmE/view?usp=sharing).

After you activated the module, check out these steps to use the module:

### Setup on Kata Platform

1. Go to CMS Studio to see the module's components. This module's Location CMS Action type, the CMS configuration, including forms, pages, and elements, are predefined and cannot be modified. For more information about the components, you can see Details below.
2. Create a new deployment and create an environment to add Kata Dashboard URL.
3. Next, go to **CMS Studio > Users** to invite users who will access your dashboard.
4. Once they confirmed the invitation via email, your users can access the dashboard. This dashboard is where your CMS users add or edit the module contents.

## Adding/Editing Module Contents on Kata Dashboard

To use Kata Dashboard, you have to be invited to your project's CMS dashboard. You can ask your developers to include your email as users.

After you accepted the invitation on your email, you will be redirected to Kata Dashboard. If you are new to Kata Platform, you will be asked to create a password for your account. If you are already a registered user, you can enter your current password to log in.

(1). Click on **Module page > Module form**. You will see several elements for Location module.

(2). **Cancel Text** is used to edit bot response when the user canceled the search. Example:

```
-start-
User: Tanya lokasi dong
    Bot: [Send Location Text] Share location kamu untuk menampilkan lokasi
    Bot: [How to Cancel Text] Ketik "Batal" untuk mengakhiri
User: Batal
    Bot: [Cancel Text] Dibatalkan
-end-
```

(3) **Google Key** is an API key for [Google Maps Static API](https://developers.google.com/maps/documentation/maps-static/intro). You need to create one to show the Google Maps image on the Carousel action. After you got your API key, input yours here.

(4) **How to Cancel Text** is a bot response to explain how to exit/cancel the flow. Example:

```
-start-
User: Tanya lokasi dong
    Bot: [Send Location Text] Share location kamu untuk menampilkan lokasi
    Bot: [How to Cancel Text] Ketik "Batal" untuk mengakhiri
-end-
```

(5) **Limitation change** is used to set the maximum number of results shown with Carousel action. The default value is 10.

(6) **Location not found** is used to to edit bot response if the result is not found. Example:

```
-start-
User: Tanya lokasi dong
    Bot: [Send Location Text] Share location kamu untuk menampilkan lokasi
    Bot: [How to cancel text] Ketik "Batal" untuk mengakhiri
User: (share location)
    Bot: [Location not found] Saya tidak menemukan gerai terdekat dari lokasi Anda.
-end-
```

(7) **Locator** is used to create, update, and delete location item. The data will be used to show the results.

(8) **Radius change** is used to set the search radius around the user's location. The default value is 10000.

(9) **Send Location Text** is used to ask the user to share their current location.

```
-start-
User: Tanya lokasi dong
    Bot: [Send Location Text] Share location kamu untuk menampilkan lokasi
    Bot: [How to cancel Text] Ketik "Batal" untuk mengakhiri
-end-
```
