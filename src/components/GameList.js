import React, {useState, useEffect} from "react";
import "../App.css";
import GameCardAlt from "./GameCardAlt";
import {connect} from "react-redux";
import {getGameDetails} from "../actions";
import Loading from "./Loading";

function GameList(props) {

    const [loaded, setLoaded] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (props.userData[props.list].length > 0) {
            getDetailedGame()
                .then(data => {
                    setGames(data)
                    setLoaded(true)
                })
        }
    })

    const getDetailedGame = async () => {
        return await Promise.all(props.userData[props.list].map(game => getGameDetails(game, game.game_id)))
    }

    return (
        loaded ?
        props.userData[props.list].length > 0 ?
            <div id="games" style={{ marginLeft: "2em"}}>
                {games.map(game => <GameCardAlt game={game}/>)}
            </div>
            :
            <div className="App-color" style={{ paddingTop: '8em'}}>
                <h4>You currently have no games in your library.</h4>
            </div>
            : <Loading/>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps)(GameList);