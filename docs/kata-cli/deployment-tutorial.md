---
id: deployment-tutorial
title: Deployment Tutorial
prev: kata-cli-nlu-project
---

Follow these following steps to deploy your project to messaging channels.

## 1. Create a Deployment

Create a new deployment version using these command. If you do not specificy the major/minor/patch, it will automatically create a deployment with patch.

```shell
➜  kata create-deployment [major | minor | patch]
```

## 2. Add and Update Environment

After having the deployment, create an environment. We provide 3 environment (Development, Staging, Production) that you can choose upon creating an environment.

```shell
➜  kata create-environment <slug>
```

If you already have environment, simply update them with the newer deployment version. Select the environment that you want to update from the list provided in command line.

```shell
➜  kata update-environment <newDeploymentVersion>
```

## 3. Add Channels

We now can create messaging channels after you have environment. Add channel with your custom channel name. Choose the environment and channel type from the command line.

```shell
➜  kata add-channel <channelName>
```
