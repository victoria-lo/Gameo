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

export const addGame = (email, list, data) => {
  return (dispatch) => {
    axios
      .patch(PREFIX + "/game?email=" + email + "&list=" + list, {
        game_id: data.gameId,
        title: data.title,
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: "USER_DATA", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteGame = (email, newlist) => {
  return (dispatch) => {
    axios
      .patch(PREFIX + "/remove?email=" + email, {
        list: newlist,
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

export const rateGame = (email, gameId, newList) => {
  return (dispatch) => {
    axios
      .patch(PREFIX + "/rate?email=" + email + "&gameId=" + gameId, {
        list: newList,
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
              (el) =>
                !notGames.find(
                  (rm) => rm.name === el.name || el.name === "Slots"
                )
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
              .then(async (res) => {
                if (!res || !res.data)
                  reject({ stat: 500, msg: "Something went wrong" });
                const notGames = res.data.data;
                topGames = topGames
                  .filter((el) => !notGames.find((rm) => rm.name === el.name))
                  .slice(0, 48);
                topGames = await Promise.all(
                  topGames.map(async (game) => getGameInfo(game))
                );
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

export const searchGame = (game) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.rawg.io/api/games?search=" + game)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        resolve(res.data.results);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getGameDetails = (game, gameId) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.rawg.io/api/games/" + gameId)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        const info = res.data;
        resolve({ ...game, info });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//=================================== HELPER FUNCTION ==================================================================
export const getGameInfo = game => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.rawg.io/api/games?search=" + game.name)
      .then((res) => {
        if (!res || !res.data)
          reject({ stat: 500, msg: "Something went wrong" });
        if (res.data.results.length > 0) {
          const info = res.data.results[0];
          axios
            .get("https://api.rawg.io/api/games/" + info.id)
            .then((res) => {
              if (!res || !res.data)
                reject({ stat: 500, msg: "Something went wrong" });
              const info = res.data;
              resolve({ ...game, info });
            })
            .catch((err) => {
              reject(err);
            });
        } else reject("No game found");
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//================================== CONNECT TO BACK-END ROUTES =========================================================================
export const getRecommendations = (email) => {
  return new Promise((resolve, reject) => {
    axios
      .get(PREFIX + "/game?email=" + email)
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
