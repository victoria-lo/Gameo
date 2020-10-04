import React from "react";
import "../App.css";
import GameCard from "./GameCard";
import {connect} from "react-redux";

function Library(props) {

    return (
        props.userData.games.length > 0 ?
            <div id="games">
                {props.userData.games.map(game => <GameCard game={game}/>)}
            </div>
            :
            <div className="App-color" style={{ paddingTop: '8em'}}>
                <h4>You currently have no games in your library.</h4>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps)(Library);