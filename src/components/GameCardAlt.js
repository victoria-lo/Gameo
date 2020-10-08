import React, { useState, useContext } from "react";
import "../App.css";
import { Image, Button, Row, Col, Modal, Form } from "react-bootstrap";
import GameInfo from "./GameInfo";
import { rateGame } from "../actions/index";
import { AuthContext } from "../Firebase/context.js";
import { connect } from "react-redux";

function GameCardAlt(props) {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(null);
  const { user } = useContext(AuthContext);

  const submitRateGame = (game) => {
    if (user == null) {
      window.location.replace("/signin");
    } else {
      setShow(false);
      if (rate === 0) {
        setRate(null);
      }

      props.userData.games.forEach((gam) => {
        if (gam.game_id === game.info.id) {
          gam.rating = rate;
        }
      });
      props.rateGame(props.userData.email, game.info.id, props.userData.games);
    }

    console.log(props.userData.email, props.userData.games);
  };
  return (
    <div
      id="game-card-alt"
      style={{ position: "relative", textAlign: "center", height: "22em" }}
    >
      <Image
        src={props.game.info.background_image}
        style={{ maxWidth: "20em", maxHeight: "180px" }}
      />
      <h5
        className="App-link title"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {props.game.info.name}
      </h5>
      {props.game.info.genres.slice(0, 3).map((genre) => (
        <Button style={{ margin: "0.35em" }} variant="dark">
          {genre.name}
        </Button>
      ))}
      <Row style={{ marginTop: "1em" }}>
        <Col>
          {props.list === "games" ? (
            <Button className="App-button" onClick={() => setShow(true)}>
              {props.game.rating != null
                ? `Current Rating: ${props.game.rating}`
                : "Rate Game"}
            </Button>
          ) : null}
        </Col>
      </Row>
      <GameInfo
        showModal={showModal}
        setShowModal={setShowModal}
        game={props.game}
      />
      <Modal
        id="rate-game"
        show={show}
        onHide={() => setShow(false)}
        game={props.game}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rate This Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rating">
              <Form.Label>1 (worst) to 10 (best)</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setRate(e.target.value)}
              >
                <option>None</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="App-button"
            onClick={() => submitRateGame(props.game)}
          >
            Rate!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { rateGame })(GameCardAlt);
