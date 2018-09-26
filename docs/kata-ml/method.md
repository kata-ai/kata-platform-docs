---
id: kata-ml-method
title: Methods
prev: kata-ml-nlu
next: kata-ml-action-type
---

## Inline Method

Example:

```yaml
methods:
    someMethod(x): "
        return x*x;
    "
```

## Method from File

Example:

```yaml
method:
  otherMethod(x):
    code: $include(./some/code.js)
    entry: module.exports
```
