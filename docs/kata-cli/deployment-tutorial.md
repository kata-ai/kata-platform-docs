---
id: deployment-tutorial
title: Deployment Tutorial
prev: kata-cli-nlu-project
---

Follow these following steps to deploy your project to messaging channels.

**1. Create a Deployment**

Create a new deployment version using these command. If you do not specificy the major/minor/patch, it will automatically create a deployment with patch.

```shell
➜  kata create-deployment [major | minor | patch]
```

**2. Add and Update Environment**

After having the deployment, create an environment. We provide 3 environment (Development, Staging, Production) that you can choose upon creating an environment.

```shell
➜  kata create-environment <slug>
```

If you already have environment, simply update them with the newer deployment version. Select the environment that you want to update from the list provided in command line.

```shell
➜  kata update-environment <newDeploymentVersion>
```

**3. Add Channels**

We now can create messaging channels after you have environment. Add channel with your custom channel name. Choose the environment and channel type from the command line.

```shell
➜  kata add-channel <channelName>
```

# NLU Project

An NLU must be under a project. Therefore, we need to define a project, before we create an NLU.

## Command Listings

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

```shell
➜  kata nl-predict [-f <trainPath/filename.txt>]
➜  kata nl-predict [-s <sentence>]
```
