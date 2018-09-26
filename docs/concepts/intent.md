---
id: intent
title: Intent
prev: flow
next: state
---

An intent can be understood as the essence / meaning of an utterance. In a discourse we can differentiate between initial intent and follow up intent. To understand the difference, imagine in a conversation about booking a ticket, you have following intents:

- `order-ticket`
  - "buy me a ticket"
  - "I want to book a ticket from jakarta to bali"
- `add-info`
  - "jakarta to bali"
  - "for tomorrow night"
- `yes`
  - "confirm"
  - "yes"

As you can see, `add-info` and `yes` intents doesn't make sense if you are not yet in the conversation about buying a ticket, thats why they should be follow up intents. `order-ticket` in the other hand is an utterance that can trigger a specific conversation topic: initial intent.

## Selection

The intent selection process is done as following:

1.  It will select the intents with matching condition and types
2.  If intent has a classifier then it will execute and unselect those with non-matching classifier
3.  It will select one matching intent with highest priority

## Types

Intent shall specify the type of message it intend to match, it can be text, data or command:

```yaml
intents:
  myIntent:
    type: text | data | command
```

## Classifier

Classifier can be added to intents with type: text.With classifier, more complicated type of text parsing can be done. An NLU object is used for classification. To be used as classifier, the NLU object being used need to output either string or array of string (`string[]`). The property match can be set to match specific label outputted by the NLU.

```yaml
intents:
  myIntent:
    type: text
    classifier:
      nlu: myClassifier
      match: xxx
```

You can use multiple classifiers by defining it as an array. If using multiple classifiers, it will match if at least one of the classifiers matches.

```yaml
intents:
  myIntent:
    type: text
    classifier:
      - nlu: myClassifier
        match: xxx
      - nlu: otherClassifier
        match: xxx
```

## Condition

Condition can be used to narrow the selection of possible intents. A condition is a javascript expression like following example:

```yaml
intents:
  myIntent:
    type: command
    condition: payload.op == "xyz"
```

Following variables are available in condition:

- `context` - flow context
- `data` - session data
- `type` - message type
- `content` - message content
- `payload` - message payload
- `metadata` - message metadata
- `config` - bot config

## Attributes

Attributes are additional information that can be attached to a message. You can use attributes to extract values from your message. NLU can be used for extracting knowledge from your message that is not necessarily the intent, such as entities, sentiment, etc.

```yaml
intents:
  myIntent:
    type: text
    classifier:
      nlu: myClassifier
      match: hello
    attributes:
      sentiment:
        nlu: sentimentAnalysis
```

The output of the NLU will be directly mapped to the attribute. To choose specific path of the output you can use path.

Example: if the NLU returns an object of like this:

```js
{
  origin: "Jakarta",
  destination: "Bandung"
}
```

Then you can specify path:

```yaml
attributes:
  origin:
    nlu: ner
    path: origin
```

## Fallback Intent

A fallback intent can be specified if you want the flow to match an intent at all case.

```yaml
intents:
  fallbackIntent:
    fallback: true
```

Note: Keep in mind that if you set a fallback intent, it won't be able to change to other flow.
