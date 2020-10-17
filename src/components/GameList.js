import React, {useState, useEffect, useContext} from "react";
import "../App.css";
import GameCardAlt from "./GameCardAlt";
import { connect } from "react-redux";
import { getGameDetails } from "../actions";
import Loading from "./Loading";
import {Redirect} from "react-router-dom";
import {AuthContext} from "../Firebase/context";

function GameList(props) {
  const { user } = useContext(AuthContext);
  const [loaded, setLoaded] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (props.userData[props.list].length > 0) {
      getDetailedGame().then((data) => {
        setGames(data);
        setLoaded(true);
      });
    } else if (props.userData[props.list]){
      setLoaded(true);
    }
  }, [props.userData]);

  const getDetailedGame = async () => {
    return await Promise.all(
      props.userData[props.list].map((game) =>
        getGameDetails(game, game.game_id)
      )
    );
  };

  return !!user ? <Redirect to={{pathname: "/trending"}}/>
   : (
    loaded ? (
        props.userData[props.list].length > 0 ? (
            <div id="games" style={{marginLeft: "2em"}}>
              {games.map((game) => (
                  <GameCardAlt game={game} list={props.list}/>
              ))}
            </div>
        ) : (
            <div className="App-color" style={{paddingTop: "8em"}}>
              <h4>{`You currently have no games in your ${
                  props.list === "games" ? "library" : "wishlist"
              }.`}</h4>
            </div>
        )
    ) : (
        <Loading/>
    ))
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps)(GameList);
