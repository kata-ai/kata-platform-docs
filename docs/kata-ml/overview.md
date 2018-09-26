---
id: kata-ml-overview
title: Kata ML Spec
next: kata-ml-flow
---

Kata ML is a descriptive YAML-based language for defining bots. The entry-point of KataML-based bot is the `bot.yml` file.

## Overview

The root structure of `bot.yml` is as following:

```yaml
# kataML schema definition
schema: kata.ai/schema/kataml/1.0

# Bot name
name: test-bot
# Bot description
desc: Some Bot
# Bot language
lang: id

# Flow definition
flows:
  # flowName and description
  someFlow:
    # you can include other files using $include directive
    intents: $include(./some/path)

# Method definitions
methods:
  # method definition in javascript
  someMethod(x): x*x

# NLU definition
nlus:
  # define NLU to be used in this bot
  someNlu: ...

# Config
config:
  # free to define your nested configuration
```

## Include Directive

KataML support `$include` directive to include definition from other files. Using this directive it is easier to structure your bot project.

Example:

```yaml
config: $include(./config.yml)
```
