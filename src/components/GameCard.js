import React from "react";
import "../App.css";
import {Image} from "react-bootstrap";

function GameCard(props) {

    return (
        <div id="game-card">
            <Image src={props.game.box_art_url.replace('{width}', '240').replace('{height}', '320')}/>
            <h5 className="App-link title">{props.game.name}</h5>
        </div>
    );
}


export default GameCard;