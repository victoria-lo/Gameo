import axios from "axios";

/* For local debugging set to 1 */
const DEBUG = 1;

/* Debug variables.*/
const PREFIX = DEBUG ? "http://localhost:80" : "";

//=============================== ASYNC ACTIONS ========================================================================

export const createUser = (email, displayName) => {
  return (dispatch) => {
    axios
      .post(PREFIX + "/user", {
        email: email,
        name: displayName,
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch({ type: "USER_DATA", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//================================== PROMISES =========================================================================

export const getUser = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .get(PREFIX + "/user?email=" + email)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getTopGames = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.twitch.tv/helix/games/top?first=60", {
        headers: {
          "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,
          Authorization: "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
        },
      })
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        let topGames = res.data.data;
        axios
          .get("https://api.twitch.tv/helix/search/categories?query=IRL", {
            headers: {
              "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,
              Authorization:
                "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
            },
          })
          .then((res) => {
            if (!res || !res.data)
              reject({ stat: 500, msg: "Something went wrong" });
            const notGames = res.data.data;
            topGames = topGames.filter(
              (el) => !notGames.find((rm) => rm.name === el.name)
            );
            axios
              .get(
                "https://api.twitch.tv/helix/search/categories?query=creative",
                {
                  headers: {
                    "client-id": process.env.REACT_APP_TWITCH_CLIENT_ID,
                    Authorization:
                      "Bearer " + process.env.REACT_APP_TWITCH_AUTH_TOKEN,
                  },
                }
              )
              .then((res) => {
                if (!res || !res.data)
                  reject({ stat: 500, msg: "Something went wrong" });
                const notGames = res.data.data;
                topGames = topGames
                  .filter((el) => !notGames.find((rm) => rm.name === el.name))
                  .slice(0, 48);
                resolve(topGames);
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//================================== CONNECT TO BACK-END ROUTES =========================================================================
export const getRecommendations = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .get(PREFIX + "/user?email=" + email)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const addGame = (id, list, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(PREFIX + "/game?id=" + id + "&list=" + list, {
        game_id: data.gameId,
        title: data.title,
        genres: data.genres,
        platform: data.platform,
      })
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteGame = (id, list, game) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(PREFIX + "/game?id=" + id + "&list=" + list + "&game=" + game)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const rateGame = (id, game, rating) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(PREFIX + "/game?id=" + id + "&game=" + game, {
        rating: rating,
      })
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
