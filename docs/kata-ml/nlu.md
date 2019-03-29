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
    output: <type> # raw - return the raw prediction result from NL Studio
                   # value - return the value of each NLU's entity
                   # phrase - only for NL Studio entity type 'phrase'
    entity: <entityName>  # only for output: phrase
    threshold: <number>   # confidence rate, if less than treshold bot wouldn't recognize as this intent
    flatten: true         # optional, default false

## usage in intent for output type value
nlus:
  mynl:
    type: nl
    options:
      nluId: <nluId>
      output: value
      threshold: 0.5
      flatten: true

intents:
  yes:
    classifier:
      nlu: mynl
      expression: "intent == 'yes'" # <entityName> == <label> of entity type 'trait'
  name:
    classifier:
      nlu: mynl
      expression: ner # <entityName> of entity type 'phrase'
    attributes:
      person:
        nlu: mynl
        path: ner     # <entityName>

## usage in intent for output type phrase
nlus:
  mynl2:
    type: nl
    options:
        nluId: <nluId>
        output: phrase
        entity: <entityName>
        threshold: 0.7

intents:
  yes:
    classifier:
      nlu: mynl # use the previous bot's nlu
      expression: "intent == 'yes'"
    attributes:
        person:
            nlu: mynl2
            path: person   # <label> of mynl2's entity <enityName>
        location:
            nlu: mynl2
            path: location # <label> of mynl2's entity <enityName>
  name:
      initial: true
      classifier:
          nlu: mynl2
          expression: person # <label> of mynl2's entity <enityName>
      attributes:
        person:
            nlu: mynl2
            path: person     # <label>

# alternative approach
nlus:
  mynl3:
    type: nl
    options:
      nluId: <nluId>

intents:
  yes:
      classifier:
          nlu: mynl3
          options:
              output: value
              threshold: 0.5
              flatten: true
          expression: "intent == 'yes'"
      attributes:
          person:
              nlu: mynl3
              path: person
              options:
                  output: phrase
                  entity: ner
                  threshold: 0.7
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
