---
id: kata-ml-action-type
title: Action Types
prev: kata-ml-method
next: kata-ml-test-spec
---

## Text Action

```yaml
type: 'text'
options:
  text: string
```

## Text Action with data

```yaml
type: 'text'
options:
  data: $(config.messages) # dictionary location
  path: $(data.lang) # relative path
  template:
    $[upgrade4G.confirmUpgrade] # =config.messages[data.lang]
    #        .upgrade4G.confirmUpgrade
```

## Image Action

```yaml
type: 'template'
options:
  type: 'image'
  items:
    originalContentUrl: string
    previewImageUrl: string
```

## Button Action

```yaml
type: 'template'
options:
  type: 'button'
  items:
    text: string
    title: string
    actions:
      - type: 'postback'
        label: string
        payload:
          [key: string]: string
      - type: 'url'
        url: string
        label: string
```

## Carousel Action

```yaml
type: 'template'
options:
  type: 'carousel'
  items:
    - text: string
      title: string
      actions:
        - type: 'postback'
          label: string
          payload:
            [key: string]: string
        - type: 'url'
          url: string
          label: string
    - text: string
      title: string
      actions:
        - type: 'postback'
          label: string
          payload:
            [key: string]: string
        - type: 'url'
          url: string
          label: string
```

Dynamic Carousel

```yaml
type: 'template'
options:
  type: 'carousel'
  data: $(context.data) // e.g. [{name:"A", label:"x"}, {name:"B", label:"y"}]
  template:
    text: I am $[name]
    title: $[label]
    actions:
      - type: 'postback'
        label: string
        payload: JsonObject
      - type: 'url'
        url: string
        label: string
```

## imagemap action (LINE)

```yaml
type: 'template'
options:
  type: 'imagemap'
  items:
    altText: string # example: "this is an imagemap"
    baseUrl: url # example: "https://example.com/bot/images/rm001"
    baseSize:
      height: number # example: 1040
      width: number # example: 1040
    actions:
      - text: string
        type: 'message'
        area:
          x: number # example: 0
          y: number # example: 0
          width: number # example: 1040
          height: number # example: 350
      - text: string
        type: 'message'
        area:
          x: 0
          y: 350
          width: 1040
          height: 350
      - text: string
        type: 'message'
        area:
          x: 0
          y: 700
          width: 1040
          height: 350
```

## Sticker Action

```yaml
type: template
options:
  type: sticker
  items:
    stickerId: string
    packageId: string
```

## Video Action

```yaml
type: template
options:
  type: video
  items:
    originalContentUrl: string
    previewImageUrl: string
```

## Audio Action

```yaml
type: template
options:
  type: audio
  items:
    originalContentUrl: string
    duration: string
```

## Location Action

```yaml
type: template
options:
  type: location
  items:
    title: string
    address: string
    latitude: string
    longitude: string
    locationImageUrl: string # optional for fbmessenger
```

## Quick Reply (Messenger)

```yaml
# an template action (mandatory) followed by quick reply (optional)
type: "template"
options:
    type: "button" | "text" | "carousel" | "image"
    items:
        quickreply:
            - type: "location"
            - type: "text"
              thumbnailImageUrl?: string
              label: string
              payload: JsonObject
```

## Schedule Action

```yaml
type: schedule
options:
  id: string
  command: add | remove
  message: Message
  start: datetime
  end: datetime
  freqType: string, // second, minute, hour, day, week, month, year
  freqInterval: number
```

Example:

```yaml
actions:
  createSchedule:
    type: schedule
    options:
      id: zodiac
      command: add # with the same id and command 'add' schedule will update
      message:
        type: command
        content: startFlowZodiac
      start: '2017-08-02 00:00:00'
      end: '2017-08-04 00:00:00'
      freqType: hour
      freqInterval: 5
```

## API Action

```yaml
type: api
options:
    uri: <uri>
    method: "GET" | "POST"
    body: <JsonObject>
    headers: <JsonObject>
    query: <JsonObject>
    resultPath: string # use for saving api response in $(result)
```

Example:

```yaml
actions:
  getProjectAPI:
    type: api
    options:
      method: GET
      headers:
        'X-TrackerToken': '4b50d556c7d49e206795b62fd50a4481'
      uri: 'https://www.pivotaltracker.com/services/v5/projects/$(context.idPivotal)'

  handleProjectAPI:
    type: method
    method: setProjectData
    options:
      projectName: $(result.name) # you can use the result of the API call
states:
  callAPI:
    actions:
      - name: getProjectAPI
      - name: handleProjectAPI
```
