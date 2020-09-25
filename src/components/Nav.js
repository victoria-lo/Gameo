import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import { connect, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

import { getUser, createUser } from '../actions';

function Nav(props) {
    const { user } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            getUser(user.email)
                .then((data) => {
                    console.log(data)
                    dispatch({
                        type: "USER_DATA",
                        payload: data.user,
                    });
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        const email = user.providerData[0].email;
                        const displayName = user.providerData[0].displayName;
                        props.createUser(email, displayName);
                    }
                });
        }
    }, [user, props.userData.email]);

    return (
        <header className="App-header">
            <div className="App-logo">
                <Link to="/" className="App-center App-logo">
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

export default connect(mapStateToProps, {createUser})(Nav);