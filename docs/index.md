---
layout: home
id: index
title: Home
---

Grundgesetz is a skeleton for generating accessible documentation pages built on top of [Gatsby](https://www.gatsbyjs.org). It creates static pages from your Markdown documentation files, all prettily formatted with a easy-to-use layout.

Grundgesetz is initially built to solve internal issues in managing documentation for our products at [Kata.ai](https://kata.ai/), but at the same we also found out that it's a good base for quickly deploying a documentation site online, so we put this up for everyone to use.

## Get Started

Getting started with Grundgesetz is as easy as 1-2-3! [Follow the documentation](/getting-started/installation), or select from the left drawer for a specific topic that you want to read.

## Core Concepts

### Just Your Docs

Grundgesetz is set up for you to get up and running straight away. We know that writing proper documentation often takes a long time, so we aim to create this tool to standardise your documentation format. With Grundgesetz, publishing a documentation takes three basic steps.

- **Write your documentation.** All your docs are written in the familiar Markdown format and go inside the `/docs` folder.
- **Structure them.** After that, we arrange them neatly into Grundgesetz, and, like table of contents, which is managed through a JSON file, and pagination.
- **Deploy.** Since Grundgesetz is a static site generator, you can instantly deploy to any static web host.

It will generate permalinks based on the directory tree, but you can override it anytime by setting a `permalink` frontmatter.

### Instantly Deployable

Have an instance of Grundgesetz set up on GitHub? You can easily deploy it using the built-in `deploy` task. You can also set up a continuous deployment pipeline for hosting providers like [Netlify](https://www.netlify.com/).

### Blazing Fast

Grundgesetz is built on top of Gatsby, a blazing-fast static site generator for React. Want to learn more about Gatsby? [Click here](https://www.gatsbyjs.org).

Also, putting the words "blazing fast" into any project's README seems to attract a lot of folks lately.
