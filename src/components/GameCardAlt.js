import React, {useState} from "react";
import "../App.css";
import {Image, Button} from "react-bootstrap";
import GameInfo from "./GameInfo";

function GameCardAlt(props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="game-card-alt" style={{ position: "relative", textAlign: 'center'}}>
            <Image src={props.game.info.background_image} style={{ maxWidth: '20em'}}/>
            <h5 className="App-link title"
                onClick={() => {
                    setShowModal(true)
                }}>{props.game.info.name}
            </h5>
            {props.game.info.genres.slice(0, 3).map(genre =>
                <Button style={{margin: '0.35em'}} variant="dark">{genre.name}</Button>
            )}
            <GameInfo showModal={showModal} setShowModal={setShowModal} game={props.game}/>
        </div>
    );
}


export default GameCardAlt;