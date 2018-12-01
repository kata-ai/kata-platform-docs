---
id: faq
title: FAQs
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
        method: "GET"
        headers:
          Authorization: "Bearer $(context.token)"
        uri: "https://api.line.me/v2/bot/profile/$(context.userId)"
    displayResult:
      type: text
      options:
        text: "Halo, $(result.displayName) terima kasih sudah add kami..."
```

## How to change defaultErrorMessage and loading message info?

You may change `defaultErrorMessage` from bot.yml as below:

```yaml
config:
  defaultErrorMessage: Mohon maaf sebelumnya ada error di sistem kami nih :(
```

For changing loading message info, create a PUT request to:

```
https://<zaunUrl>/bots/<botId>/deployments/<deploymentName>/channels/<channelId>
```

Next, put request header as follows:

```
key: Authorization
value: Bearer
```

Afterward, go to BOT menu and go down to “Configuration” sub menu. Next, copy all response without rpmLimit, agentId and webhook to options and add

```
burstMessageResponse
```

## How to do bulk training in CLI ?

1. Execute create folder command, `cd folder/`
2. Execute `kata nl-init nama-nl`, please fill in `nlu.yml` content as below :
```
name: nlu_name (Model Name)
lang: id
entities:
    intent:
        type: trait
        profile: intent
        labels:
            - greet
            - cancel
            - ask
    faq:
        type: trait
        profile: faq
        root: intent
        labels:
            - askB
            - askA
```
3. Execute `kata nl-push`then execute `create/update nlu`
4. Prepare file `file_train.txt`, which consists of:
```hi #intent:greet
selamat pagi #intent:greet
gimana narik debit? #intent:ask #faq:askDebit
```
5. Execute `kata nl-train -f file_train.txt`

Note:

- Training syntax for entity type **trait** : 
```kalimat #entity_trait:label_nya```
- If NLU is already created in NL-Studio, you must still create file `nlu.yml` but no need to execute `kata nl-push`. So that, you may directly train inside the folder by executing `kata nl-train`

## Is there any configurable field where we can put our google map api key due to location action usage?

1. For setup your Google API Key, put in config in bot studio:
`googleApiKey: thisisgoogleapikey`

2. Then, call the configuration in action :
```actions :
       	options :
               	text: $(config.googleApiKey)
```

## If FB messenger & LINE has action button which use URL, how about Twitter? Is there any alternative way such as action text URL? 

Twitter has `quickreply` that quite similar with action button. Follow this code to put `quickreply` :
```type: "template"
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

**Config in bot.yml**
```nlus:
       mynl:
          type: nl
          options:
              nluId:"user:nlu-name"
              token:"token" 
              output:<type>
              threshold:<number> 
              flatten:true  #optional, default false 
```

If flatten is enabled, first object in array will be the value of the entity with entity name as the key

**Output Type**

RAW

flatten: false

`{intent:[{ type:'trait', score:1, value:'mainMenu'}]`


flatten: true

`{ intentArray:[{ type:'trait', score:1, value:'mainMenu'}],intent:{ type:'trait', score:1, value:'mainMenu'}}}`


VALUE

flatten: false

`{ intent:['mainMenu']}`


flatten: true

`{intentArray:['mainMenu'],intent:'mainMenu'}`
