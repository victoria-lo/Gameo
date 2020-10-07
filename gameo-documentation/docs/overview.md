---
id: prerequisites
title: Overview
slug: /
---

Gameo is a game recommendation engine that helps anyone to discover and play games. Using a matrix factorization-based model built with PyTorch, Gameo recommends users games via collaborative filtering.

Gameo started as a project built for [Facebook's 2020 Developer Circles Community Challenge](https://developercircles2020.devpost.com/?utm_source=social-facebook&utm_medium=devc&utm_campaign=organic&utm_content=post-url&utm_offering=business-tools&utm_product=DevC-CommunityChallenge-Launch_09102020&utm_event=2020DevCCommunityChallengeLaunch&eventSource=OrganicSocialDevC).

## About This Documentation

This documentation serves as a tutorial for how Gameo is built and used. Please read the tutorial in the order presented in the navigation sidebar. To read the tutorial in other languages, please select the version below:

- English
- Bahasa Indonesia

## Prerequisites

Because this tutorial is aimed towards more advanced programmers, the following prerequisites are essential to follow this tutorial:

- Basic to intermediate understanding in React
- Intermediate to advanced understanding in JavaScript and Python
- Basic understanding in Machine Learning

## Topics Covered

:::note

Before following the tutorial, you should have the following:

- A starter app created with Create React App
- Python 3.8 installed in your machine
- IDE for Python and JavaScript

:::

This tutorial will cover the following topics in order:

### [1. PyTorch Integration and Implementation](collab.md)

- Collaborative Filtering: How our Recommendation System works
- Setting Up PyTorch, loading dataset and cleaning the data
- Implementing the Model: Training data, building with PyTorch
- Exporting Model for use

### [2. MongoDB Integration and Endpoints](endpoint-summary.md)

- Integrating a MongoDB Atlas Database with Python (PyMongo)
- Creating database endpoints for updates to user data

### 3. Creating Gameo Website with React

- Fetch and display data from API
- Save user game ratings
- Fetch recommended games for each user

## Technologies Used

- React 16.13.1
- React Bootstrap 1.3.0
- Redux 4.0.5
- Python 3.8
- Python Flask 1.1.2
- Pymongo 3.11.0
- Pandas 1.1.3

---

Just some Markdown syntax help below. WILL NOT BE INCLUDED IN DOCUMENTATION.

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../static/img/logo.svg)

---

## Code

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log("This line can be highlighted!");
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
