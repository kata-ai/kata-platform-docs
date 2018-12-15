---
id: kata-cli-nlu-project
title: NLU Project
prev: kata-cli-best-practice
next: deployment-tutorial
---

An NLU must be under a project. Therefore, we need to define a project, before we create an NLU.

## Command listings

| Commands                    | Functionalities                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| `kata nl-init`              | to initialize nl definition                                                                   |
| `kata nl-push`              | to push nl changes                                                                            |
| `kata nl-pull`              | to pull nl changes from remote                                                                |
| `kata nl-train [options]`   | to train a sentence or a batch of sentences. `[options]` can be `-f <trainPath/fileName.txt>` |
| `kata nl-predict [options]` | to predict a sentence. `[options]` can be `[-f <predictPath/fileName.txt>]`                   |
| `kata list-profiles`        | to list all profiles                                                                          |
| `kata nl-snapshot`          | to save the nlu snapshot                                                                      |

## NLU Project Best Practice

### Initialize NLU Project

It would create a new file `nlu.yml` in which the nlu structure can be defined.

```shell
# initialize a nlu project
➜  kata nl-init
```

### Push NLU

To use push command to create and update the NLU

```shell
# push current nlu project
➜  kata nl-push
```

### List Profiles

To list all profiles

```shell
➜  kata list-profiles
```

### Train NLU

To train a nlu.

```shell
➜  kata nl-train [-f <trainPath/filename.txt>]
➜  kata nl-train [-s <sentence>]
```

### Predict Sentences with NLU

```
➜  kata nl-predict [-f <trainPath/filename.txt>]
➜  kata nl-predict [-s <sentence>]
```
