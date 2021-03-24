---
layout: faq-page
id: faq-others
title: Others FAQ
---

## What is the best practice for making a flow?

A flow should be “volatile” which means it gets closed when switching to another flow.

```yaml
volatile: true
```

## How to remove a context after a specific time?

You may use `invalidate` function and filled it with timestamp type

```yaml
invalidate: 152053926476
```

## How to handle the intent that cannot catch user's input?

Always use a transition to the state itself named “default” if there are any branching state.

![faq-4](./images/faq-4.png)

```yaml
states:
  showPizza:
    action: showPizza
    transitions:
      askQty:
        condition: intent == "pizzaType"
      showPizza:
        fallback: true
```

Also, you must create `reenter` intent with `command` type. This intent will help the bot ask a question again to user. Also, it will help you to maintain the active session longer.

```yaml
intents:
  reenter:
    type: command
    condition: content == "reenter"
```

## Is it possible to let users trigger a flow by a command?

Here is an example of using a command to trigger flow `login` from flow `greet`

```yaml
flowGreet:
  intents:
   ...

  states:
    ...
    greet:
      end: true
      action:
        - name: greetingMessage
        - name: showLoginMessage
        - name: loginCommand

  actions:
    ...
    greetingMessage:
      type: text
      options:
        text: "Hello!"
    showLoginMessage:
      type: text
      options:
        text: "Untuk menggunakan layanan ini, kamu perlu login terlebih dahulu."
    loginCommand:
      type: command
      options:
        command: login
```

```yaml
flowLogin:
  intents:
    loginCommand:
      initial: true
      type: command
      condition: content == "login"
   ...
```

## How to make a different response on each channel?

We may use metadata for specific channel response. Each metadata consists of:

- Channel type
- Channel access token
- Sender ID

```yaml
states:
  showMenu:
    end: true
    action:
      - name: bridgeShowMenu
      - name: showMenuLine
        condition: metadata.channelType == "line"
      - name: showMenuFb
        condition: metadata.channelType == "fbmessenger"
      - name: showMenuTelegram
        condition: metadata.channelType == "telegram"
```

## I found out my bot respond incorrectly for first-time users who add the bot. How to handle this?

You have to add below code to resolve the condition

Intent code to handle user's input:

```yaml
intents:
  # LINE and FB Messenger
  getStarted:
    initial: true
    type: data
    condition: "payload.type == 'follow'"

  # Telegram
  startTelegram:
    initial: true
    type: text
    condition: "content == '/start'"
```

cURL request to add `Get Started` button for Facebook Messenger :

```sh
curl -X POST \
  "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>" \
  -H 'Content-Type: application/json' \
  -d '{
	"get_started": {
		"payload": "type=follow"
	}
}'
```

## What's the best practice to create an action that calls API from a bot?

API that was called from bot must be returned with status code 200 and JSON Response Body. Otherwise the result in payload will be null.

```yaml
flowAPI:
  intents:
    ...
    status:
      type: command
      condition: content == "status"

  states:
    ...
    callAPI:
      action:
        - name: callAPIMock
        - name: handleResult
      transitions:
        success:
          condition: intent == "status" && payload.result
        fail:
          condition: intent == "status" && !payload.result
        callAPI:
          fallback: true

  actions:
    ...
    callAPIMock:
      type: api
      options:
        method: "GET"
        uri: "https://www.mocky.io/v2/5185415ba171ea3a00704eed"
    handleResult:
      type: command
      options:
        command: status
        payload:
          result: $(result)
```

## How to get the username from each channel?

You have to use API action in the bot to use specified API

- LINE: https://developers.line.me/en/docs/messaging-api/reference/#get-profile
- FB Messenger: https://developers.facebook.com/docs/messenger-platform/identity/user-profile
- For Telegram: access `metadata.telegramSenderName`

For example:

```yaml
exampleFlow:
  intents:
    getStarted:
      initial: true
      type: data
      condition: "payload.type == 'follow'"

  states:
    addAsFriend:
      initial: true
      transitions:
        greetUser:
          fallback: true
          mapping:
            context.userId: metadata.lineSenderId
            context.token: metadata.lineAccessToken
    greetUser:
      end: true
      action:
        - name: callLineAPI
        - name: displayResult

  actions:
    callLineAPI:
      type: api
      options:
        method: 'GET'
        headers:
          Authorization: 'Bearer $(context.token)'
        uri: 'https://api.line.me/v2/bot/profile/$(context.userId)'
    displayResult:
      type: text
      options:
        text: 'Halo, $(result.displayName) terima kasih sudah add kami...'
```

## Is there any configurable field where we can put our google map api key due to location action usage?

1. For setup your Google API Key, put in config in bot studio:
   `googleApiKey: thisisgoogleapikey`
2. Then, call the configuration in action :

```yaml
actions:
  options:
    text: $(config.googleApiKey)
```

## If FB messenger & LINE has action button which use URL, how about Twitter? Is there any alternative way such as action text URL?

Twitter has `quickreply` that quite similar with action button. Follow this code to put `quickreply` :

```yaml
type: "template"
options:
    type: "button" | "confirm"
    items:
        quickreply:
            - type: "text"
              label: string
              payload:
                [key : string]: string
```

## How to get metadata time?

You may use `metadata.channelType` in Bot configuration

## How to use Flatten in NLUs?

### Config in bot.yml

```yaml
nlus:
  mynl:
    type: nl
    options: nluId:"user:nlu-name"
      token: "token"
      output: <type>
      threshold: <number>
      flatten: true # optional, default false
```

If flatten is enabled, first object in array will be the value of the entity with entity name as the key

### Output Type: Raw

flatten: false

```
{ 'intent': [{ 'type': 'trait', 'score': 1, 'value': 'mainMenu' }] }
```

flatten: true

```
{
  'intentArray': [{ 'type': 'trait', 'score': 1, 'value': 'mainMenu' }],
  'intent': { 'type': 'trait', 'score': 1, 'value': 'mainMenu' },
}
```

### Output Type: Value

flatten: false

```
{ 'intent': ['mainMenu'] }
```

flatten: true

```
{ 'intentArray': ['mainMenu'], 'intent': 'mainMenu' }
```

## How to reinit session in kataCLI ?

Execute `kata console` then `clear()`

## How many seconds for timeout action type API hit in Kata?

Kata put 5 Seconds for timeout condition when hit API

## How to login as team in Kata-CLI ?

1. First, execute `kata login` and login using your username
2. Then, run `kata switch-team <TeamName>` for switch into team user

## I invited by someone as his team, but in my account the team didn't show. What should I do ?

1. Try to relogin (read : logout then login again)
2. Then, you shall see your team is available in account switcher

## I got an error which written "Errror: Max Recursion of 3 is reached". How to fix this error ?

This error defines when your bot is move to another state more than 3 times. Solutions :

1. Go to bot configuration
2. Write : `maxRecursion: 10`
