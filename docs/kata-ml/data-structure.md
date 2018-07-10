---
id: kata-ml-data-structure
title: Data Structure
prev: kata-ml-flow
next: kata-ml-nlu
---

## Meta Context

Meta Context is read-only system defined context fields. It is accessible at `context.<meta>`. Following are generally available meta context, accessible at any time.

- `$init : boolean` - true if entering a new flow
- `$flow : string` - current flow
- `$state : string` - describing current state
- `$lastFlow : string` - describe last flow
- `$lastState : string` - describe last state
- `$now : number` - current timestamp
- `$timestamp : number` - session timestamp
- `$dataKey : string` - data key for connecting multiple sessions
- `$sessionId : string` - current session id
- `$channelId : string` - current channel id
- `$deploymentId : string` - current deployment id
- `$userId : string` - user / partner id from channel

## Message

A message consists of following definitions:

- `type: string` - Message type (text or data)
- `content: string` - Exist if message type is text
- `payload: JsonObject` - Exist if message type is data
- `metadata: JsonObject` - Metadata for specific channel type

Example:

```
{
    type: 'text',
    content: 'Hello World!',
    metadata: {
        channelType: 'line',
        lineSenderId: 'linesenderid',
        lineSenderType: 'user',
        lineAccessToken: 'youraccesstoken'
    }
}
```

## LINE Metadata

```
{
    channelType: 'line',
    lineSenderId: 'linesenderid',
    lineSenderType: 'user',
    lineAccessToken: 'youraccesstoken'
}
```

## FB Metadata

```
{
    channelType: 'fbmessenger',
    fbmessengerSenderId: 'fbsenderid',
    fbmessengerAccessToken: 'youraccesstoken'
}
```

## Telegram Metadata

```
{
  channelType: 'telegram',
}
```

## Slack Metadata

```
{
    channelType: "slack",
    slackChannelOrigin: "slackChannelId",
    slackSenderId: "slackSenderId",
    slackAccessToken: "youraccesstoken"
}
```
