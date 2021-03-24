---
id: modules-omnichat-introduction
title: Introduction to Kata Omnichat
---

## Getting Started

### Adding/activating Kata Omnichat module

1. Click **Add to Project** button on the module’s page.
2. After you added the module into your project, the button will turn into **Settings**. Click to set up the module.
3. To access Omnichat Module in Kata Dashboard, you have to create a Qismo Account. Go to **Module settings > Qismo Account** to create your account.
4. Once you confirmed the invitation via email, your admin can access the dashboard and manage agents and supervisor.
5. After you have created your Qismo Account, you can activate the module with a 14 days trial. To activate the module, click **Activation **tab.
6. The default state of a module is **Inactive**. Go to **Activation > Status** to activate the module.
7. In **Activation > Status**, click the slider to activate the module. A successful notification will appear shortly after.
8. Your module is active now. The module's components on Bot Studio and CMS Studio will now have a green indicator next to their name.
9. Finally, create a new deployment on Production to complete the process.

### Deploying Omnichat Module

This step is similar to the usual project deployment. Skip this if you already understood the steps.

1. Go to **Deploy** menu to deploy your project.
2. In **Deploy > Overview**, click **New Deployment** button to create your deployment.
3. In **Deploy > Environment**, click **Create Environment (in Production), **then add Kata Dashboard URL. For example: dashboard.kata.ai/Omnichat-first-testing (must be unique)
4. If you don’t have any channel in your **Environment**, you can click **Add Channel > New Channel** in **Environment\*\*** \*\*that has been created.

### Deactivating Omnichat Module

1. Go to **Your Module **and click** Settings **
2. In **Activation > Status**, click the slider to deactivate the module. A successful notification will appear shortly after.
3. Your module is inactive now. All of Omnichat Module's components will now have a red indicator next to their name.
4. Finally, create a new deployment on Production to complete the process.

### Removing Omnichat module

If you decide a module isn’t for you, you can remove it from your project. Please note that all configurations you’ve made on the components will also be removed.

1. To remove the module, you have to make sure it's **in Inactive** state.
2. Click **Remove Module**. Next, confirm the module removal by clicking **I understand, remove anyway.**
