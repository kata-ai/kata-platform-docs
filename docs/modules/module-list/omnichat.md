---
id: modules-omnichat
title: Omnichat Module
---

Kata Omnichat is an accelerator package as a solution for customers service engagement. It is an integrated service which connects customers to merchants via currently available messaging services in the market such as Facebook messenger (FB), Line, WhatsApp, Telegram, etc. It allows a merchant to gather all incoming messages from customers in one place and get back to them in no time.

There are several features that are provided by Kata Omnichat to support customer service related matter. First, messaging services integration. As mentioned above, Kata Omnichat is able to be connected to several available messaging services. In certain condition, it can also be connected to any custom integration.

Secondly, Kata Omnichat also provides filtering feature that can be used to filter which message is coming from what channel. It would be very handy when you are dealing with lots of customers.

In addition, Kata Omnichat also provides an agent management feature. This feature will help you to distribute your agents to handle incoming messages and view the performance of agents. Not to mention, Kata Omnichat is also providing a chat bot integration to help you automate your customer relationship.

## How to use

You need to activate the Omnichat module to use it. If you don't know how, see the documentation [here](http://docs.kata.ai/modules/introduction).

After you activated the module, we need to set default setup for Omnichat:

### Setup on Kata Platform

1. Go to **Module Settings** to setup Omnichat before you use it.
2. Go to **Module Settings > Qismo Account** tab for adding admin’s account
3. Once admin confirmed the invitation via email, your admin can access the dashboard and manage agents and supervisor.
4. Next, Go to **Bot Studio** to add **Handover** flow from your chatbot to Omnichat module.
5. Create new deployment, create an environment and add any channels of your chatbot to add Kata Dashboard URL. This dashboard is where your Omnichat users communicate with customers and/or manage the roles.

### Adding/Editing Supervisor on Kata Dashboard (Admin Only)

After you accepted the invitation as an admin on your email, you will be redirected to Omnichat page on Kata Dashboard. If you are new to Kata Dashboard, you will be asked to create a password for your account. If you are already a registered user, you can enter your current password to log in.

1. Once you are logged in as an admin, you can see *Agents *menu.
2. Go to **Agents > Agents Management** to manage your supervisor and agents.
3. Click **Add Agent** and fulfill with: **Agents Name, Email, Password,** tick **Role,** tick as **Supervisor** and assign to all channels. Then, click *Save *button to invite user that will be a supervisor in this Omnichat.
4. Once supervisor received the invitation via email, your supervisor can access the dashboard and manage all the agents with their roles.
5. To edit the supervisor, click **Edit** icon next to the detail of supervisor.

### Adding/Editing AGENTS on Kata Dashboard (Admin & Supervisor)

After you accepted the invitation as supervisor on your email, you will be redirected to Omnichat page on Kata Dashboard. If you are new to Kata Dashboard, you will be asked to create a password for your account. If you are already a registered user, you can enter your current password to log in.

1. Once you are logged in as admin/supervisor, you can see **Agents** menu.
2. Go to **Agents > Agents Management** to manage your agents and their roles.
3. Click **Add Agent** and fulfill with: **Agents Name, Email, Password,** tick **Role** you will assign to, **do not** tick as **Supervisor** and tick **Channel** you will assign to. Then, click **Save** button to invite user that will be agent in this Omnichat.
4. Once agents received the invitation via email, your agents can access the dashboard and receive all messages from any channels you assigned to them.
5. To edit agents, click *Edit* icon next to the detail of each agents.

### Adding/Editing ROLES on Kata Dashboard (Admin & Supervisor)

1. Once you are logged in as admin/supervisor, you can see *Agents *menu.
2. Go to **Agents > Division** to add and edit the roles for agents.
3. Click **Add Division** add insert **Division Name**, then click **Save** button.
4. To edit role, click **Edit** icon next to the detail of each roles.
5. You also can **Set as default** one of the role you have created.

### Activate/Deactivate Custom Agents Allocation (Admin & Supervisor)

Kata Omnichat allocates available agents by automatically assign less busier agent to a new created chat group. However, you may want to customise this rule by making your own rule. In order to do so, you need to create a webhook that manage how your agents in Kata Omnichat is assigned.

![./img/omnichat/allocation](Custom Agents allocation illustration)

To connect your webhook with Kata Omnichat, you just have to enable custom agent allocation feature in Settings page in Kata Omnichat by switching on the toggle button on the top-right of the page and provide the webhook URL in the field provided as depicted in image below. By doing so, Kata Omnichat will no longer enforce automatic rule in agent allocation for you. So you are free to do it your own way.

Kata Omnichat will hit your webhook with this payload that you could use in managing agent allocation.

```json
{
  "app_id": "oni-xxxxxxxxx",
  "source": "qiscus",
  "email": "randompertama@mail.com",
  "avatar_url": "https:\/\/d1edrlpyc25xu0.cloudfront.net\/kiwari-prod\/image\/upload\/75r6s_jOHa\/1507541871-avatar-mine.png",
  "extras": "{\"a\":\"s\"}",
  "room_id": "123456"
}
```

In your webhook, it's up to you on how you will assign a newly connected user with your agents. What you will need to do however, is to hit our **Assign agent to room id** API when you do agent assignments. So for example, if you have a chat with doctor service, you may want to assign your users based on their selected doctors (agents).
Below are a couple of additional documentation and an example on how you could use custom agent allocation.

1. [Custom agent allocation API list](https://d1edrlpyc25xu0.cloudfront.net/kiwari-prod/docs/upload/GUNoVu-1dD/qismo-custom_agent_allocation_api_list.pdf) document for you to get insight of what APIs you could use in your webhook.
2. [An example of how custom agent allocation has been done](https://bitbucket.org/qiscus/qismo-salesforce-crm-sample/src/). You need to have Salesforce account to try this example.


