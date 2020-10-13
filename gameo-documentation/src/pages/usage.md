---
id: usage
title: Usage
---

# How to Use Gameo

In order for Gameo to be your no.1 game recommendation engine, here's a brief explanation on the features for any Gameo users to refer to.

:::important

For best experience, Gameo users are advised to use devices with larger screens such as laptops or desktop PCs or iPad. Currently, the website is not well-suited for mobile devices but we are planning to make it fully compatible with any device in future updates.

:::

# Create a Gameo account

First, create a Gameo account at https://gameo-app.herokuapp.com. It's free and takes less than 1 minute to create!

![login](../../static/img/register.PNG)

# Trending

The first page you will see when visiting Gameo is the Trending page. This page fetches data from Twitch API to display the most popular games on Twitch right now. It is a good and general way to discover the latest trending games that people are playing.

![trending](../../static/img/trending.PNG)

This page can display any games from numerous genres and platforms. Gameo aims to be a recommendation engine that caters to any gamer after all; from console to PC games, from RPG to Shooter games, Gameo can recommend it to you!

# Library

For a more personalized game recommendation, Gameo users should add games they have played to their Library and rate the game. This will tell Gameo what kinds of games the user prefers and so, it would be able to use [Collaborative Filtering](../../docs/collaborative-filtering) to determine which game the user would likely to enjoy next and recommend that game.

![lib](../../static/img/add-lib.PNG)

To add a game to Library, simply click on a game on the Trending page to open a pop-up window with the game's information. Then click on the **'Add to Library'** button.

INSERT RATE PIC

To rate the game you've played, head to the Library page and click **'Rate Game'**. Give a rating from 1 (worst) to 10 (best). Gameo will then better understand your game tastes to recommend games for you using its [Matrix Factorization model](../../docs/implementing-the-model) in PyTorch.

# Wishlist

The Wishlist page is where you can add games that you're considering to play. There are many reasons why you may just want to wishlist a game before playing it and adding to your Library, such as:

- Not yet planning to commit to purchasing the game
- Still need more research on the game
- Interested but no time to commit playing the game
- Buying it later for a family or friend
- Waiting for the game to be on sale
- Waiting for game to release to a platform you want
- Saving it for later to recommend to someone

Regardless of the reason, it is simple to add a game to your Wishlist. Simply click on a game on the Trending page. A pop-up window with the game's information will appear. Click on the **'Add to Library'** button and it will be added to your wishlist.

# Recommendations

The recommendations page is the highlight feature of Gameo. It displays the personalized games recommended just for you.

:::caution

You need to rate at least 3 games in your Library before you can receive game recommendations because Gameo needs to learn what games you like first before providing its personalised recommendations to you.

:::
