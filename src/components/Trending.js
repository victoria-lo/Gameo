import React, {useState, useEffect} from "react";
import "../App.css";
import {getTopGames} from "../actions";
import GameCard from "./GameCard";
import Loading from "./Loading";

function Trending() {

    const [topGames, setTopGames] = useState([])

    useEffect(() => {
        getTopGames()
            .then(data => {
                console.log(data)
                setTopGames(data)
            })
    }, [])

    return (

            topGames.length > 0 ?
                <div id="games">
                {topGames.map(game => <GameCard game={game}/>)}
                </div>
            :
                <Loading/>

    );
}


export default Trending;