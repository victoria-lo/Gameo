import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import { connect, useDispatch } from "react-redux";
import app from "../Firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog, faGamepad, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { initialState } from "../reducers";

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
            {!!user ? (
                <Dropdown id="account-dropdown">
                    <Dropdown.Toggle className="App-button">
                        {user.displayName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/" onClick={() => {
                            dispatch({
                                type: "USER_DATA",
                                payload: initialState.userData,
                            });
                            app.auth().signOut();
                        }}>
                            <FontAwesomeIcon icon={faSignOutAlt}/>{" "}
                            Sign out
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <FontAwesomeIcon icon={faCog}/>{" "}
                            Settings
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Link to="/signin">
                    <button id="signin-btn" style={{ marginLeft: 'auto'}} className="App-color">Sign In / Register</button>
                </Link>
            )}
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps, {createUser})(Nav);