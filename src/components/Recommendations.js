import React, { useState, useEffect } from "react";
import "../App.css";
import GameCardAlt from "./GameCardAlt";
import { connect } from "react-redux";
import {getGameInfo, getRecommendations} from "../actions";
import Loading from "./Loading";

function Recommendations(props) {
    const [loaded, setLoaded] = useState(false);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        if (props.userData.games.length > 0) {
            let ratedGames = 0;
            props.userData.games.forEach(game => {
                if (game.rating > 0) {
                    ratedGames += 1;
                }
            })
            if (ratedGames >= 3) {
                getRecommendations(props.userData.email).then(titles => {
                    getGameDetails(titles)
                        .then(games => {
                            console.log(games)
                            games.splice(0, games.length, ...(new Set(games)))
                            setRecommended(games)
                            setLoaded(true);
                        })
                });
            } else { // not enough data for recommendation
                setLoaded(true);
            }
        }
    });

    const getGameDetails = async (recommended) => {
        return await Promise.all(
            recommended.map((gameTitle) =>
                getGameInfo({name: gameTitle})
            )
        );
    };

    return loaded ? (
        recommended.length > 0 ? (
            <div id="games" style={{ marginLeft: "2em" }}>
                {recommended.map((game) => (
                    <GameCardAlt game={game} list={props.list} />
                ))}
            </div>
        ) : (
            <div className="App-color" style={{ paddingTop: "8em" }}>
                <h4>You need to rate at least 3 games to get your personalized recommendation list.</h4>
            </div>
        )
    ) : (
        <Loading />
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    };
};

export default connect(mapStateToProps)(Recommendations);