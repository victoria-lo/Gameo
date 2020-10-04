import React from "react";
import "../App.css";
import GameCard from "./GameCard";
import {connect} from "react-redux";

function Wishlist(props) {

    return (
        props.userData.wishlist.length > 0 ?
            <div id="games">
                {props.userData.wishlist.map(game => <GameCard game={game}/>)}
            </div>
            :
            <div className="App-color" style={{ paddingTop: '8em'}}>
                <h4>You currently have no games in your wishlist.</h4>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps)(Wishlist);