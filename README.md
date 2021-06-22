<img src="https://github.com/victoria-lo/Gameo/blob/master/src/img/gameo-logo.png?raw=true">

# There's a Game for Everyone

Games are a form of entertainment and pleasure to many of us.

According to a market study, the global video game industry is valued at USD 151.06 billion in 2019 and is expected to grow at a Compound Annual Growth Rate (CAGR) of 12.9% from 2020 to 2027. This means that there will be more selection of games for us. For gamers and for people who are not familiar with video games, it can be daunting to find and choose a game that they will enjoy.

Gameo aims to become the number 1 game recommendation engine for anyone to use. At Gameo, we believe that there is a game for anyone. Whether or not you have played video games before, Gameo will have a game for you.

Start using Gameo at https://gameo-app.herokuapp.com

> Devpost Link: https://devpost.com/software/gameo

## Main Features
- See trending games based on how popular it is on Twitch
- View a personalized recommendation list of games based on games rated
- Add games to your library and wish list
- Games that are rated will have a rating of 1-10, which will be used to train the model
- Modify the number of recommendations given in the settings page

## Resources
Gameo uses the following resources:

- Twitch API, which allows Gameo to fetch the newest and trending games. Official documentation can be found here.

- RAWG API, which allows Gameo to access detailed information for each game. Official documentation can be found here.

- Metacritic Game Dataset and Metacritic User Comments Dataset, which are used for training the model can be found here.

## Tech Stack
- Languages: Python, JavaScript, HTML, CSS
- Frameworks: ReactJS, Python Flask
- Database: MongoDB
- APIs/Other: Twitch API, RAWG API, Firebase Authentication

## Documentation
Visit https://victoria-lo.github.io/Gameo/ for detailed documentation made with Docusaurus.

# How to Use Gameo
In order for Gameo to be your no.1 game recommendation engine, here's a brief explanation on the features for any Gameo users to refer to.

### IMPORTANT
For best experience, Gameo users are advised to use devices with larger screens such as laptops or desktop PCs or iPad. Currently, the website is not well-suited for mobile devices but we are planning to make it fully compatible with any device in future updates.

## Create a Gameo account
First, create a Gameo account at https://gameo-app.herokuapp.com It's free and takes less than 1 minute to create!

<img src="data:image/png;base64,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">

## Trending
The first page you will see when visiting Gameo is the Trending page. This page fetches data from Twitch API to display the most popular games on Twitch right now. It is a good and general way to discover the latest trending games that people are playing.

<img src="https://victoria-lo.github.io/Gameo/assets/images/trending-1f97d1540712bfa2305491b992318a7c.PNG">

This page can display any games from numerous genres and platforms. Gameo aims to be a recommendation engine that caters to any gamer after all; from console to PC games, from RPG to Shooter games, Gameo can recommend it to you!

## Library
For a more personalized game recommendation, Gameo users should add games they have played to their Library and rate the game. This will tell Gameo what kinds of games the user prefers and so, it would be able to use Collaborative Filtering to determine which game the user would likely to enjoy next and recommend that game.

<img src="https://victoria-lo.github.io/Gameo/assets/images/add-lib-764e3ec6c67ac0aaa45bdea6c2210203.PNG">

To add a game to Library, simply click on a game on the Trending page to open a pop-up window with the game's information. Then click on the 'Add to Library' button.

<img src="https://victoria-lo.github.io/Gameo/assets/images/rate-198c9143c25673ded37f81ca39c3db46.PNG">

To rate the game you've played, head to the Library page and click 'Rate Game'. Give a rating from 1 (worst) to 10 (best). Gameo will then better understand your game tastes to recommend games for you using its Matrix Factorization model in PyTorch.

## Wishlist
The Wishlist page is where you can add games that you're considering to play. There are many reasons why you may just want to wishlist a game before playing it and adding to your Library, such as:

- Not yet planning to commit to purchasing the game
- Still need more research on the game
- Interested but no time to commit playing the game
- Buying it later for a family or friend
- Waiting for the game to be on sale
- Waiting for game to release to a platform you want
- Saving it for later to recommend to someone

Regardless of the reason, it is simple to add a game to your Wishlist. Simply click on a game on the Trending page. A pop-up window with the game's information will appear. 
Click on the 'Add to Library' button and it will be added to your wishlist.

## Recommendations
The recommendations page is the highlight feature of Gameo. It displays the personalized games recommended just for you.

<img src="https://victoria-lo.github.io/Gameo/assets/images/recommend-6c846ba4d8280f2b33ed71c14dc0a50a.PNG">