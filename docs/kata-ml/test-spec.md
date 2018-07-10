---
id: kata-ml-test-spec
title: Test Spec
prev: kata-ml-action-type
next: bot-studio-tutorial
---

Flows, intents, states and actions can be tested.

## Intents Spec

To write an intent test spec, you should create a file `<flow>_intents.spec.yml` in test folder.

**Schema Definition:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/intents
```

**Fields:**

- `flow : string` - Flow to be tested
- `desc : string` - Test description
- `test : { [desc: string] : IntentTestDefinition }` - Test suite

**Test Definition**

Intent test definition consists of:

- `context : JsonObject` - Context precondition
- `data : JsonObject` - Data precondition
- `message : Message` - Input message
- `expect: IntentExpect` - Expected output

**Expected Output**

You can define, either partially or full the expected output of a test:

- `intent : string` - Name of intent to be expected
- `match : boolean` - true if you expect the test to match the intent
- `attributes : { [attr:string] : value }` - expected attributes, can be matched partially

**Example:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/intents
flow: welcome
desc: Welcome flow intent test
test:
    "should select language: bahasa indonesia":
        context: # write your context here
        data: # write your data here
        message:
            type: text
            content: pilih bahasa indonesia
        expect:
            intent: selectLanguage
            attributes:
                language: bahasa indonesia
```

## States Spec

To write an state test spec, you should create a file `<flow>_states.spec.yml` in test folder.

**Schema Definition:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/states
```

**Fields:**

- `flow : string` - Flow to be tested
- `desc : string` - Test description
- `test : { [desc: string] : StateTestDefinition }` - Test suite

**Test Definition**

Intent test definition consists of:

- `tate : string` - Name of state to be tested
- `context : JsonObject` - Context precondition
- `data : JsonObject` - Data precondition
- `intent : string` - Message intent to be simulated
- `attributes : JsonObject` - Message attribute to be simulated
- `message : Message` - Input message
- `expect: StateExpect` - Expected output

**Expected Output**

You can define, either partially or full the expected output of a test:

- `state : string` - next state
- `context : JsonObject` - expected output context, can be matched partially
- `data : JsonObject` - expected output data, can be matched partially
- `end : boolean` - expected output end

**Example:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/states
desc: Welcome State Test
flow: welcome
test:
    "should go to main menu after selecting english":
        state: langSel
        intent: selectLanguage
        attributes:
            language: english
        message:
            type: text
            content: "english please"
        expect:
            data:
                lang: en
            state: mainMenu
```

## Actions Spec

To write an action test spec, you should create a file `<flow>_actions.spec.yml` in test folder.​

**Schema Definition:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/actions
```

**Fields:**

- `flow : string` - Flow to be tested
- `desc : string` - Test description
- `context : JsonObject` - initial context
- `data : JsonObject` - initial data
- `test : { [desc: string] : ActionTestDefinition }` - Test suite

**Test Definition**

Action test definition consists of:

- `state : string` - Name of state to be tested
- `context : JsonObject` - Context precondition
- `data : JsonObject` - Data precondition
- `intent : string` - Message intent to be simulated
- `attributes : JsonObject` - Message attribute to be simulated
- `message : Message` - Input message
- `expect: ActionExpect[]` - Expected output

**Expected Output**

You can define, either partially or full the expected output of a test:

- `responses : Response[]` - expected responses

**Example:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/actions
desc: Welcome State Test
flow: welcome
test:
    "should return mainMenu":
        state: mainMenu
        intent: selectLanguage
        attributes:
            language: english
        message:
            type: text
            content: "english please"
        expect:
            - action: sendMainMenu
```

## Flow Spec

To write a flow test spec, you should create a file `<flow>_flow.spec.yml` in test folder.

**Schema Definition:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/flow
```

**Fields:**

- `flow : string` - Flow to be tested
- `desc : string` - Test description
- `state : string` - initial state
- `data : JsonObject` - Test description
- `context : JsonObject` - initial context
- `data : JsonObject` - initial data
- `test : { [desc: string] : FlowTestDefinition }` - Test suite

**Test Definition**

Flow test definition consists of:

- `message : Message` - Input message
- `expect: FlowExpect` - Expected output

**Expected Output**

You can define, either partially or full the expected output of a test:

- `state : string` - next state
- `intent : string` - matched intent
- `context : JsonObject` - expected output context, can be matched partially
- `data : JsonObject` - expected output data, can be matched partially
- `end : boolean` - expected output end
- `responses : Response[]` - expected responses
- `attributes : JsonObject` - Message attribute to be simulated

**Example:**

```yaml
schema: kata.ai/schema/kata-ml/1.0/test/actions
desc: Welcome State Test
flow: welcome
state: initialState
context: # initial context
data: # initial data
test:
    "should select langauge":
        message:
            type: text
            content: "english please"
        expect:
            state: mainMenu
            intent: selectLanguage
```
