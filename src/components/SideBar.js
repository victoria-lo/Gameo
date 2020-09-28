import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFireAlt, faHome, faThList, faStar} from "@fortawesome/free-solid-svg-icons";
import {ListGroup} from "react-bootstrap";

function SideBar() {

    return (
        <div id="sidebar">
            <ListGroup>
                <ListGroup.Item action href="/">
                    <FontAwesomeIcon icon={faHome} className="inline-icon" /> Home
                </ListGroup.Item>
                <ListGroup.Item action href="/trending">
                    <FontAwesomeIcon icon={faFireAlt} className="inline-icon"/> Trending
                </ListGroup.Item>
                <ListGroup.Item action href="/library">
                    <FontAwesomeIcon icon={faThList} className="inline-icon"/> My Library
                </ListGroup.Item>
                <ListGroup.Item action href="/recommendations">
                    <FontAwesomeIcon icon={faStar} className="inline-icon"/> Recommendations
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}


export default SideBar;