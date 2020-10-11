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
- Preparing dataset and PyTorch setup
- Implementing the Model: Training data, building with PyTorch

### [2. Endpoints for User Data](endpoint-summary.md)

- Database endpoints for updates to user data stored in MongoDB Atlas

### [3. Creating Gameo Website with React](api-usage)

- Fetch and display data from APIs
- Save and update user game ratings
- Fetch recommended games for each user

## Technologies Used

- React 16.13.1
- Python 3.8
- Python Flask 1.1.2
- Pymongo 3.11.0
- Pandas 1.1.3

---

Made with ❤️ by [Victoria](https://github.com/victoria-lo) and [Steffy](https://github.com/steffy-lo).
