---
id: api-usage
title: API Usage
slug: /api-usage
---

## Twitch

One of the biggest weakness of collaborative filtering is the **cold start** problem. This problem arises when there is little or no data to work with to predict user preferences.
This means for new users, we need to find another way to recommend games.

Recall **Demographic Filtering** from one of the [algorithms of a recommendation engine](collab.md).
This type of filtering can effectively counter this problem, and to do this, we have incorporated the use of Twitch's API to fetch some of the most trending games that are being played.

The official documentation to the API can be found [here](https://dev.twitch.tv/docs/api/).

:::tip
Before using the API, make sure you have your **client id** and **auth token** ready. They need to be included in the header of the API call.
:::

```javascript
/* Example using axios */
axios.get(url, {
  headers: {
    "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,
    Authorization: "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
  },
});
```

The route we're using is getting the [Top Games](https://dev.twitch.tv/docs/api/reference#get-top-games).
By default, the API will return the top 20 games, but this seems too little and thankfully, the API supports an optional query parameter to adjust this.

:::caution
Some of the titles that are returned by the Twitch API are not games.
:::

Taking into account that the Twitch API can contain titles that are not actual games (e.g., Just Chatting), the resulting API call we decided to use is taking the top 60 games.

`https://api.twitch.tv/helix/games/top?first=60`

To filter out titles that are not actually games, we use another route [Search Categories](https://dev.twitch.tv/docs/api/reference#search-categories).
Specifically, we want to search for two non-game categories, IRL and creative.

```
https://api.twitch.tv/helix/search/categories?query=IRL
https://api.twitch.tv/helix/search/categories?query=creative
```

Suppose our initial 60 games are stored in an array called **topGames**, and **notGames** is the array containing the results of the above two API calls, then a simple filter would do the trick:

```javascript
topGames = topGames.filter((el) => !notGames.find((rm) => rm.name === el.name));
```

These API calls would be made as soon as the component to display this information is mounted. We can achieve this using the useEffect hook like so:

:::note
**getTopGames** is a promise that resolves our desired array of top games.
:::

```javascript
const [topGames, setTopGames] = useState([]);

useEffect(() => {
  getTopGames().then((result) => {
    setTopGames(result);
  });
}, []);
```

:::note
The **useEffect** hook can be seen as equivalent to the **componentDidMount** and **componentDidUpdate** life cycle methods depending on what goes inside the array parameter.
The array parameter specifies **dependencies** that will control when the function executes. If the array parameter is empty, then useEffect is essentially componentDidMount since it has no dependencies and is executed only once when the component is mounted.
Otherwise, it acts as componentDidUpdate and executes everytime a dependency variable is changed.
:::

## RAWG

Because the Twitch API doesn't provide us the metadata of a game, we decide to use the [RAWG API](https://rawg.io/apidocs) to do the job.

:::note
Unlike Twitch's API, using the RAWG API doesn't require an auth token or an api key of any sort.
:::

First, we'll search for the game using the [Games](https://api.rawg.io/docs/#tag/games) route and passing in a game's name as the search query.

```
https://api.rawg.io/api/games?search=" + game.name
```

This will return a list of game objects, and the first one on the list is the one we want. Now, we want to do another API call that would provide us the metadata for the game.
The following snippet of code shows how the promise would look like.

```javascript
if (res.data.results.length > 0) {
  const game = res.data.results[0];
  axios
    .get("https://api.rawg.io/api/games/" + game.id)
    .then((res) => {
      if (res && res.data) {
        const info = res.data;
        resolve(res.data);
      }
    })
    .catch((err) => {
      reject(err);
    });
} else reject("No game found");
```
