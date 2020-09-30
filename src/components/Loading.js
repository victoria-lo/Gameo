import React from "react";
import "../App.css";

function Loading() {

    return (
        <div id="loading-screen" className="App-color">
             <div className="loader"/>
             <h1 style={{ marginLeft: '1em'}}>Loading...</h1>
        </div>
    );
}


export default Loading;