---
id: modules-introduction
title: Introduction to Modules
next: modules-list
---

## Getting Started

Module is a set of predefined bot flows, NL, and CMS. It's recommended for anyone who wants to build a feature for their chatbot without any advanced setup.

This documentation featured step by step guide to activate and deploy a module in your project.

### Adding/Activating a Module

1. Click **Add to project** button on a module’s page.
2. After you added a module into your project, the button will turn into **Settings**. Click to set up the module.
3. In **Module settings > General**, you can edit the module's name and description. To activate the module, click **Activation** tab.
4. The default state of a module is **Inactive**. Go to **Activation > Status** to activate the module.
5. In **Activation > Status**, click the slider to activate the module. A successful notification will appear shortly after.
6. Your module is active now. The module's components on Bot Studio and CMS Studio will now have a green indicator next to their name.
7. Go to Bot Studio to publish your module
8. Finally, create a new deployment to complete the process.

### Deploying a Module

This step is similar to the usual project deployment. Skip this if you already understood the steps.

1. Go to **Deploy** menu to deploy your project.
2. In **Deploy > Deployment**, click **Create Deployment** button to create your deployment.
3. In **Deploy > Environment**, click **Create Environment**, then add Kata Dashboard URL, for example: dashboard.kata.ai/module-FAQ-test (must be unique)
4. Finally, go to **CMS Studio > User** to invite other users to access the dashboard. The invitation will be sent to their email.

### Deactivating a Module

1. Go to **Your Module** and click **Settings**.
2. In **Activation > Status**, click the slider to deactivate the module. A successful notification will appear shortly after.
3. Your module is inactive now. The module's components on Bot Studio and CMS studio will now have a red indicator next to their name.
4. Finally, create a new deployment to complete the process.

### Removing a Module:

If you decide a module isn't for you, you can remove it from your project. Please note that all configurations you’ve made on the components will also be removed.

1. To remove the module, you have to make sure it's in **Inactive** state.
2. Click **Remove Module**. Next, confirm the module removal by clicking **I understand, remove anyway**.
3. Go to Deploy menu to re-deploy your bot
4. Finally, your module will be removed
