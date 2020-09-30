import React from "react";
import "../App.css";
import {Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function GameCard(props) {

    return (
        <div id="game-card">
            <Image src={props.game.box_art_url.replace('{width}', '240').replace('{height}', '320')}/>
            <h5 className="App-link title">{props.game.name}</h5>
            <Button className="App-button relative-btn" style={{ bottom: '1em'}}>Add to Library</Button>
            <Link to={"/"} className="App-link">
                <p>Rate this game</p>
            </Link>
        </div>
    );
}


export default GameCard;