---
id: kataai-public-api
title: Kata.ai Public API
---

## Overview

To deploy a bot to a channel you need to create:

- Create a Project, with `bot: true`. It would create one bot under one project.
- Create a Deployment of the selected Project, with the selected botRevision
- Info: deploymentId equals projectId
- Create an Environment of the selected Deployment
- Add a Channel of the selected Environment

## Data Structure

### Project

```ts
interface Project {
  id?: string;

  name: string;
  label?: string;
  description?: string;

  botLatestRevision: string;
  nluLatestRevision?: string;
  cmsLatestRevision?: string;

  options: {
    bot: boolean,
    cms: boolean,
    nlu: boolean,
    timezone: number,
    nluVisibility: "private" | "public",
    nluLang: string,
    nluId: string,
  };
}
```

### Deployment

```ts
interface Deployment {
  id?: string;
  name?: string;
  version: string;

  botRevision: string;
  nluRevision?: string;
  cmsRevision?: string;

  modules: null
}
```

### Environment

```ts
interface Environment {
  id?: string;
  name: string;
  slug?: string;
  deploymentId: string;
  deploymentVersion: string;
}
```

### Channel

```ts
interface Channel {
  id?: string;
  name: string;
  type:
    | "generic"
    | "line"
    | "fbmessenger"
    | "telegram"
    | "twitter"
    | "slack"
    | "spark"
    | "bbm"
    | "qiscus"
    | "whatsapp";
  url: string;
  rpmLimit?: number;
  agentId?: string;
  options: JsonObject;
}
```

### Bot Types

**Bot**

```ts
interface Bot {
    id: string;
    name: string;
    version: string;
    desc: string;
    lang: string;
    timezone: number;
    flows: { [name: string]: Flow };
    nlus?: { [name: string]: Nlu};
    methods?: { [name: string]: string | Method };
    config?: JsonObject;
}
```

**Flow**

```ts
interface Flow {
  fallback?: boolean;
  priority?: number;
  expire?: number;
  volatile?: boolean;
  intents: { [i: string] : Intent };
  states?: { [i: string] : State };
  stateMapper?: string;
  stateActions?: { [i: string] : StateAction | StateAction[] };
  actions?: { [i: string] : Action };
  methods?: { [name: string] : string | Method };
  nlus?: { [name: string] : Nlu};
}
```

**Intent**

```ts
interface Intent {
  condition?: string | string[];
  type?: "data" | "text" | "command";
  classifier?: (IntentClassifier | string) | (IntentClassifier | string)[];
  initial?: boolean;
  priority?: number;
  fallback?: boolean;
  attributes?: {
    [i: string]: (IntentAttribute | string);
  }
}
```

**Intent Classifier**

```ts
interface IntentClassifier {
  nlu: string;
  hint?: string;
  match?: string | string[];
  process?: string | string[];
  options?: JsonObject;
}
```

**Intent Attribute**

```ts
interface IntentAttribute {
  nlu: string;
  hint?: string;
  options?: JsonObject;
  path?: string;
  process?: string | string[];
}
```

**State**

```ts
interface State {
  initial?: boolean;
  float?: StateTransition;
  action?: (StateAction | string) | (StateAction | string)[];
  enter?: { [name: string]: string } | string;
  transit?: { [name: string]: string } | string;
  exit?: { [name: string]: string } | string;
  end?: boolean;
  transitions?: { [name: string]: StateTransition };
}
```

**State Transition**

```ts
interface StateTransition {
  condition?: string | string[];
  fallback?: boolean;
  priority?: number;
  mapping?: string | { [name: string]: string};
}
```

**State Action**

```ts
interface StateAction {
  name: string;
  method?: string;
  condition?: string | string[];
  options?: JsonObject;
}
```

**Action**

```ts
interface Action {
  type: string;
  method?: string;
  condition?: string | string[];
  options?: JsonObject;
}
```

**Nlu**

```ts
interface Nlu {
  type: string;
  process?: string | string[];
  method?: string;
  options?: JsonObject;
}
```

**Method**

```ts
interface Method {
  code: string;
  entry?: string;
}
```


### Message Types

**Nlu**

```ts
interface NLU {
  name: string;
  lang: "id" | "en";
  visibility: "public" | "private";
  entities: {
    entity_name: {
      root?: string; //username:nlu/entity_name
      type: "dict" | "trait" | "phrase";
      profile: string;
      relProfile?: string;
      labels?: string[];
      belongsTo?: string;
      dictionary?: { [key: string]: string[]};
      resolver?: string;
    }
  }
}
```

**Training Data**

```ts
interface TrainingData {
  input: string;
  entities: ITrainingEntity[];
}
```

**Training Entity**

```ts
interface TrainingEntity {
  id: string;
  entity: string;
  label?: string;
  start: number;
  end: number;
  value: string;
  belongsTo?: {entity: string, id: string};
}
```
​
### Token

```ts
interface Token {
    id: string; // Bearer token
    type: string;
    label: string;
    userId: string;
    teamId: string;
    botId: string;
    roleId: string;
    expire: number;
}
```

## Public Endpoint

### Authentication

Authentication can be provided using bearer token in header:

```
Authorization: Bearer <token>
```

Other possibility is to include it in the _query string_:

```
?token={token}
```

### Format

Only supported format is `json`. Use following header:

```
Content-Type: application/json
Accept: application/json
```

### Error Codes

This API implements following HTTP codes:

- `200` **OK** - returns the data
- `403` **Forbidden** - returns `"You're not authorized to view this page."`
- `400` **Bad Request** - returns `"Wrong API usage. Please refer to the documentation!"`
- `429` **Too Many Requests** - returns `"Ratelimit exceeded! 100 per minute"`
- `500` **Internal Server Error** - returns `"Server is not available at the moment. We are working on it."`

## Auth API

### Login

```
POST /login
```

**Body**

```
{
  username: string,
  password: string,
}
```

**Response:**

```js
{
  ...Token
}
```

## Project API

To create Bot, Cms, and/or Nlu, you need to create a project. **One** project consists of **one** Bot, Cms, and/or Nlu.

### Create Project

```
POST /projects/
```

**Access Control**

- `create_own_projects`
- if project belongs to user or team
- `create_any_projects`

**Body**

```
{
  name: string,

  options: {
    bot: boolean,
    cms: boolean,
    nlu: boolean,
    timezone: number,
    nluVisibility: "private" | "public",
    nluLang: "en" | "id" | string,
  };
}
```

**Example**

```json
{
  "name": "My New Project",

  "options": {
    "bot": true,
    "cms": true,
    "nlu": true,
    "timezone": 7,
    "nluVisibility": "private",
    "nluLang": "id"
  }
}
```

**Response**

```js
{
    ...Project
}
```

### List Projects

```
GET /projects/
```

**Access Control**

- `list_own_projects`
- if project belongs to user or team
- `list_any_projects`

**Response**

```
{
  page: number,
  limit: number,
  total: number,
  data: Project[]
}
```

### Get Project

```
GET /projects/:projectId
```

**Access Control**


- `read_own_projects`
- if project belongs to user or team
- `read_any_projects`

**Response**

```js
{
  ...Project
}
```

### Update Project

```
PUT /projects/:projectId:
```

**Body**

```js
{
  ...Project
}
```

**Response**

```js
{
  ...Project
}
```

### Delete Project

```
DELETE /projects/:projectId
```

**Response:**

```js
{
  ...Project
}
```
