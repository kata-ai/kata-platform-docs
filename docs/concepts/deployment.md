---
id: deployment
title: Deployment
prev: bot
next: conversation
---

A deployment is essentially a pairing between a specific version of a bot to a set of channels. The idea is to make it simple to have multiple deployments such as devel, staging and production.

![Figure 1](./images/deployment/figure-1.png)

## Channels

A deployment can have multiple channels, such as:

- Slack
- Facebook Messenger
- LINE
- BBM
- Etc.

## CLI Commands

To create a deployment in the CLI, you can use following command:

```
kata deploy <name> [version]
```

Whereas `<name>` is the deployment name. The name can be anything, however we recommend names like dev, staging, and prod. The `[version]` parameter is optional, if it is not given, it will take the latest version.

To make a deployment work, you need to add at least one channel:

```
kata add-channel <deployment-name> <channel-name>
```

You will prompted with the required information about the channel. For more information about channels, you can visit integration page.
