import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/context.js";
import { connect, useDispatch } from "react-redux";
import app from "../Firebase/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog, faGamepad, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Button } from "react-bootstrap";
import { initialState } from "../reducers";
import ReactSearchBox from 'react-search-box';
import {getUser, createUser, searchGame, getGameDetails} from '../actions';
import GameInfo from "./GameInfo";

function Nav(props) {

    const [search, setSearch] = useState("");
    const [games, setGames] = useState([]);
    const [game, setGame] = useState({info: {genres: [], platforms: []}});
    const [showModal, setShowModal] = useState(false);
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
            <div style={{ margin: 'auto', paddingLeft: '1em', paddingRight: '1em', width: '50%', zIndex: '100', position: 'relative'}}>
            <ReactSearchBox
                placeholder="Search"
                data={games}
                onSelect={record => {
                    getGameDetails(record, record.id)
                        .then(data => {
                            setGame(data)
                            setShowModal(true);
                        })
                }}
                onChange={value => {
                    setSearch(value)
                    searchGame(value)
                        .then(games => {
                            setGames(games.map(game => ({...game, value: game.name})))
                        })
                }}
                fuseConfigs={{
                    threshold: 0.3,
                }}
                value={search}
            />
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
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <div id="signin-btn">
                    <Link to="/signin">
                        <Button className="App-button">Sign In / Register</Button>
                    </Link>
                </div>
            )}
            <GameInfo showModal={showModal} setShowModal={setShowModal} game={game}/>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};

export default connect(mapStateToProps, {createUser})(Nav);