import React, { useContext, useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
    const { user } = useContext(AuthContext);
    return (
        <header className="App-header">
            <div className="App-logo">
                <Link to="/" className="App-center">
                    <h1 className="float-left">Gameo</h1>
                    <FontAwesomeIcon icon={faGamepad} size={'2x'}/>
                </Link>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps)(Nav);