import React from "react";
import "../App.css";
import {Image, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function GameCard(props) {

    return (
        <div id="game-card" style={{ position: "relative", textAlign: 'center'}}>
            <Image src={props.game.box_art_url.replace('{width}', '240').replace('{height}', '320')}/>
            <h5 className="App-link title">{props.game.name}</h5>
            {props.game.info.genres.map(tag =>
                <Button style={{margin: '0.2em'}} variant="dark">{tag.name}</Button>
            )}
            <Link to={"/"} className="App-link">
                <p style={{bottom: '0.5em', right: '67.435px', textAlign: 'center', position: "absolute"}}>Rate this game</p>
            </Link>
        </div>
    );
}


export default GameCard;