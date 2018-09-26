---
id: kata-ml-flow
title: Flow
prev: kata-ml-overview
next: kata-ml-data-structure
---

A flow consists of following definitions:

- `intents : Dict<Intent>` - Intent definitions
- `states : Dict<State>` - State definitions
- `actions : Dict<Action>` - Action definitions
- `methods : Dict<string>` - Flow-specific method definitions

Additionally a flow can be set as following:

- `active : boolean`<br>
  You can enable/disable a flow by setting the active field of a flow
- `volatile : boolean`<br>
  Set to true will close the flow whenever it goes outside the flow
- `expire : number`<br>
  Will set flow to expire after specified number of miliseconds

## Intents

Intent can be defined as following:

```yaml
intents:
  <name>: <Intent>
```

The intent description contains following fields:

- `type : "text" | "command" | "data"`<br>
  Type filter to define type of the message to be associated with this intent
- `condition : string | string[]`<br>
  Condition filter to rule out certain intents to be selected
- `classifier : Classifier | Classifier[]`<br>
  Classifier definition
- `attributes : Dict<Attribute>`<br>
  Attributes / slotfilling associated with the intent
- `fallback : boolean`<br>
  Define intent as fallback intent.
- `priority : number`<br>
  Set priority of an intent for the selection process
- `initial : boolean`<br>
  Set whether intent can be triggered only in current flow or from other flow as well

### Condition

Condition is every valid javascript expression returning a boolean. Avaliable variables are:

- `type : string` - Message Type
- `payload : JsonObject` - Message Payload
- `content : string` - Message Content
- `context : JsonObject` - Flow Context
- `data : JsonObject` - Session Data
- `config : JsonObject` - Bot Config

Example:

```yaml
condition: type == 'text' && content == 'hello' && !context.completed
```

### Classifier

Classifier consists of following fields:

- `nlu : string` - Name of defined NLU or NLU-type
- `hint : string` - Prepend message with a text fragment
- `match : string` - Match result of the classifier with a specific string
- `options : JsonObject` - Override NLU options
- `process : method | method[]` - Postprocess intent using methods

Example:

```yaml
classifier:
  nlu: topicClassifier
  match: food
  options:
    lowerCase: true
    threshold: 0.8
```

Example Multiple Classifiers:

```yaml
classifier:
  - nlu: topicClassifier
    match: food
  - nlu: keywordClassifier
    match: food
```

Example mapping label using dict:

```yaml
classifier:
    nlu: topicClassifier
    match: food
    dict:
        food: [food_a, food_b], # group multiple classes to one
        test: testing # change label
```

### Attributes

Attribute consist of following fields:

- `nlu : string` - Name of defined NLU or NLU-type
- `hint : string` - Prepend message with a text fragment
- `path : string` - Result path to be taken
- `options : JsonObject` - Override NLU options
- `process : method | method[]` - Postprocess intent using methods

Example:

```yaml
attributes:
  city:
    nlu: genericNER
    path: LOCATION
    options:
      threshold: 0.6
    process:
      - filterCity
      - capitalize
```

Example normalizing using dict:

```yaml
attributes:
  city:
    nlu: genericNER
    path: location
    options:
      threshold: 0.6
    dict:
      jakarta: [jkt, jekardah, jakarta]
      bandung: [bdg, bandung]
      default: invalid
```

## States

States can be defined as following:

```yaml
states:
  <name>: <State>
```

The state description contains following fields:

- `initial : boolean`<br>
  Specify initial state
- `action : string | StateAction | StateAction[]`<br>
  Specify action to be executed
- `end : boolean`<br>
  Specify end state
- `transitions : Dict<Transition|string>`<br>
  Specify transitions
- `float : Transition`<br>
  Specify floating transition
- `enter : Mapping | method`<br>
  Specify mapping or method to be executed when state is entered
- `transit : Mapping | method`<br>
  Specify mapping or method to be executed when transition is started
- `exit : Mapping | method`<br>
  Specify mapping or method to be executed when state is exited

### Mapping

Mapping is a procedure to update context / data. available variables are:

- `attributes : JsonObject`<br>
  attributes that is captured by intent
- `intent : string`<br>
  captured intent
- `content : string`<br>
  message content
- `payload : JsonObject`<br>
  message payload
- `context : JsonObject`<br>
  Flow context
- `data : JsonObject`<br>
  Session data

Example:

```yaml
enter:
  data.name: attributes.name
  context.count: (context.count || 0)++
```

Example using method:

```yaml
enter: someMapping
```

method definition:

```yaml
methods:
  someMapping(ctx): > # {intent, attributes, content, payload, data, context}
    ctx.data.name = ctx.attributes.name;
    ctx.context.count++;
    return ctx;
```

### State Actions

Action can be defined as a single action or multiple actions. The state action definition contains following fields:

- `name : string` - name of defined action or action type
- `condition : string` - condition filter
- `options : JsonObject` - override action options

Example:

```yaml
action:
  name: reply
  options:
    text: 'hi!'
```

Example multiple actions:

```yaml
action:
  - name: reply
    condition: context.mood = 'good'
    options:
      text: 'hi $(data.name)!'
  - name: reply
    condition: context.mood = 'bad'
    options:
      text: 'apaan sih kamu!'
```

You can simplify state actions (if you only have 1 action in some states) :

```yaml
action: someAction
```

### Transition

Transition define condition that leads to moving from one state to the other state. A transition is defined as following:

```yaml
transitions:
  <destination>: <Transition>
```

Field definition:

- `condition : string` - Condition that trigger the transition
- `priority : number` - Priority for transition selection
- `fallback : boolean` - Define fallback when no other transition matches
- `mapping : Mapping | method` - Define mapping or method that is triggered during this transition

Example:

```yaml
transitions:
  askDob:
    condition: "intent == 'yes' && !context.personGender && context.verifyGender"
    mapping:
      context.personGender: 'context.verifyGender'
      context.verifyGender: 'null'
```

You can simplify transitions definition :

```yaml
transitions
    askDob: "intent == 'yes' && !context.personGender"
```

## Floating State

Normally it is tedious if we have to define a transition to a state that is available in every state. e.g. Cancel state. To mitigate this we can define a floating transition. The system will automatically attach this transition in every state.

```yaml
float: <Transition>
```

### Events

We can define a mapping or method that is triggered during these events:

- `enter` - this event is triggered when entering a state
- `transit` - this event is triggered before transition process
- `exit` - this event is triggered after transition process

### Meta Context

Additional meta context accessible in states at `context.<meta>`:

- `$start : boolean` - true if state is initial state
- `$to : string` - describe destination state. Available during _exit_
- `$from : string` - describe origin state. Available during _enter_
- `$end : boolean` - true if state is end state

Example:

```yaml
states:
  stateA:
    enter:
      context.stateACount: (context.stateACount || 0)++
    transit:
      context.name: attributes.name || null
    exit:
      context.stateA.to: context.$to
```

## Actions

Actions can be defined as following:

```yaml
actions:
  <name>: <Action>
```

Following fields are available:

- `type : string` - action type.
- `method : method` - specify if action type is method
- `options: JsonObject` - action options
- `condition : string` - action condition

Example:

```yaml
actions:
  askName:
    type: reply
    options:
      text: 'nama kamu siapa?'
```

Available action types are described in **Action Types**.

## Flow Switching

Whenever bot reaches a state that is not an end state, the flow will stay open. The following message will trigger a transition to the next state. There is a case where the incoming message cannot be handled by any intents in current flow. In that case it will try to find a flow with a matching intent. When the second flow closes, the system will create internal message reenter.

```js
{
    type: "command",
    content: "reenter",
    payload: null
}
```

this reenter need to be catched by the previous flow that is open:

```yaml
intents:
  reenter:
    type: command
    condition: content == "reenter"
```
