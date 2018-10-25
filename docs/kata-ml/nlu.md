---
id: kata-ml-nlu
title: NLU
prev: kata-ml-data-structure
next: kata-ml-method
---

## Definition

A NLU consists of following definitions:

- `type: string` - NLU Type
- `method : method` - method name
- `options : JsonObject` - Override NLU options
- `process : method | method[]` - Postprocess intent using methods

Example:

```yaml
nlus:
  genericNer:
    type: verstandTagger
    options:
      model: <id>
```

## Keyword NLU

```yaml
myNLU:
  type: keyword
  options:
    case: boolean # true for case sensitive
    exact: boolean # true to match only exact message
    default: string # default key if nothing match
    keywords: # <key> : [<match values>]
      <key>: string[]
```

Output:

```
string
```

Example:

```yaml
options:
  keywords:
    'American Thin Crust':
      - thin crust
      - american thin crust
      - american
    'Hawaiian':
      - hawai
      - hawaiian
```

## Regex NLU

```yaml
myRegex:
  type: regex
  options:
    regex: <regex as string>
    index: number # optional
```

or

```yaml
myRegex:
  type: regex
  options:
    regex: <regex as string>
    index:
      <key>: number
```

or

```yaml
myRegex:
  type: regex
  options:
    regex:
      <key>: <regex as string>
```

Example with index:

```yaml
nlus:
  nameNLU:
    type: regex
    options:
      regex: 'nama saya (.+)'
      index: 1

## usage in intent
intents:
  giveName:
    attributes:
      name:
        nlu: nameNLU
```

Example with multiple index:

```yaml
nlus:
  nameNLU:
    type: regex
    options:
      regex: 'nama (saya|kamu) (.+)'
      index:
        who: 1
        name: 2

## usage in intent
intents:
  giveName:
    attributes:
      name:
        nlu: nameNLU
        path: who
      who:
        nlu: nameNLU
        path: name
```

Example with multiple regex:

```yaml
nlus:
  regexNlu:
    type: regex
    options:
      regex:
        name: 'nama saya (.+)'
        email: 'w+@w+.w+'

## usage in intent
intents:
  giveName:
    attributes:
      name:
        nlu: regexNlu
        path: name
      who:
        nlu: regexNLU
        path: email
```

## NL Studio NLU

```yaml
mynl:
  type: nl
  options:
    nluId: <nluId>
    token: <nluToken>
    output: <type>        # raw or value
    threshold: <number>   # confidence rate, if less than treshold bot wouldn't recognize as this intent
    flatten: true         #optional, default false

## usage in intent
intents:
  yes:
    classifier:
      nlu: mynl
      expression: "intent == 'yes'"
  name:
    classifier:
      nlu: mynl
      expression: "ner == 'person'"
```

## Wit Intent NLU

```yaml
myNLU:
  type: witIntent
  options:
    apitoken: string # wit api token
    threshold: number # match threshold
```

Output:

```
string []
```

Example:

```
["order", "order_pulsa"]
```

## Wit Entities NLU

```yaml
myNLU:
  type: witEntity
  options:
    apitoken: string # wit api token
    threshold: number # match threshold
```

Output:

```
{ [entity: string] : string | number}
```

Example:

```
{
    brand: "simpati",
    conf_brand: 0.8,
    brand2: "xl",
    conf_brand2: 0.7,
    nominal: "5000k",
    conf_nominal: 0.9
}
```

## Custom NLU

You can create custom NLU using method.

Example:

```yaml
nlus:
    custom:
        type: method
        method: customNLU

methods:
    customNLU(msg,opt,cfg): "
        return msg.content == opt.match
    "
```
