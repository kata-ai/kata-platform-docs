---
id: session
title: Session
prev: conversation
next: nlu
---

Session is data model for storing a conversation state between user and bot. Session is uniquely defined by:

- deploymentId
- channelId
- userId / partnerId

Session has unlimited lifetime, which means, whenever you are accessing the same bot with the same messenger account, the conversation state will be saved. However there are possibility to expire information, such as expiring flow etc.

## Data Structure

A Session consists of following fields:

- `id` - session id
- `deploymentId` - deployment id of the session
- `dataKey` - key to connect multiple session data
- `states` - states of open flows
- `contexes` - contexes of the open flows
- `history` - stack of open flows ordered by last opened
- `meta` - additional information such as lastState and lastFlow
- `timestamp` - time of last update
- `createdAt` - time of session creation
- `data` - persistent data

## Context and Data

Context is a flow specific information that lives only during the lifetime of a flow. It will erased when flow is closed. A session stores the context of every open flow. Data is a flow-agnostic persistent storage. It is accessible from every flow and doesn't have a lifetime.

## Linking Data

There are cases when data from multiple session need to be shared. E.g. user using multiple messaging apps. To link data, you can specify the dataKey. This way multiple session will shares the same data.
