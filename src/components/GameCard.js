import React, {useState} from "react";
import "../App.css";
import {Image, Button} from "react-bootstrap";
import GameInfo from "./GameInfo";

function GameCard(props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="game-card" style={{ position: "relative", textAlign: 'center'}}>
            <Image src={props.game.box_art_url.replace('{width}', '240').replace('{height}', '320')}/>
            <h5 className="App-link title"
                onClick={() => {
                    setShowModal(true)
                }}>{props.game.name}
            </h5>
            {props.game.info.genres.slice(0, 3).map(genre =>
                <Button style={{margin: '0.2em'}} variant="dark">{genre.name}</Button>
            )}
            <GameInfo showModal={showModal} setShowModal={setShowModal} game={props.game}/>
        </div>
    );
}


export default GameCard;