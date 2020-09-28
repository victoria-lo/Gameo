import React, {useState, useEffect} from "react";
import "../App.css";
import {getTopGames} from "../actions";
import GameCard from "./GameCard";

function Trending() {

    const [topGames, setTopGames] = useState([])

    useEffect(() => {
        getTopGames()
            .then(data => {
                setTopGames(data)
            })
    }, [])

    return (
        <div id="top-games">
            {topGames.map(game => <GameCard game={game}/>)}
        </div>
    );
}


export default Trending;