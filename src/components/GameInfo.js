import React, { useContext } from "react";
import "../App.css";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import DOMPurify from "dompurify";
import { addGame, deleteGame } from "../actions/index";
import { AuthContext } from "../Firebase/context.js";
import { connect } from "react-redux";

function GameInfo(props) {
  const { user } = useContext(AuthContext);

  const addtoList = (game, list) => {
    if (user == null) {
      window.location.replace("/signin");
    } else {
      const data = {
        gameId: game.info.id,
        title: game.info.name,
      };
      props.addGame(props.userData.email, list, data);
    }
  };

  const deleteFromList = (game, list) => {
    if (user == null) {
      window.location.replace("/signin");
    } else {
      console.log(list);
      props.deleteGame(props.userData.email, list);
    }
  };

  const displayAddButton = (game, list) => {
    if (props.userData.games) {
      if (list === "games") {
        let removedGame = props.userData.games.filter(
          (gam) => gam.game_id !== game.info.id
        );
        if (removedGame.length !== props.userData.games.length) {
          // game exists in library
          const newList = { games: removedGame };
          return (
            <Button
              style={{ marginRight: "1em" }}
              className="App-button"
              onClick={() => {
                deleteFromList(game, newList);
              }}
            >
              Remove from Library
            </Button>
          );
        } else {
          return (
            <Button
              style={{ marginRight: "1em" }}
              className="App-button"
              onClick={() => {
                addtoList(game, list);
              }}
            >
              Add to Library
            </Button>
          );
        }
      } else {
        let removedGame = props.userData.wishlist.filter(
          (gam) => gam.game_id !== game.info.id
        );
        if (removedGame.length !== props.userData.wishlist.length) {
          // game exists in wishlist
          const newList = { wishlist: removedGame };
          return (
            <Button
              className="App-button"
              onClick={() => {
                deleteFromList(game, newList);
              }}
            >
              Remove Wish List
            </Button>
          );
        } else {
          return (
            <Button
              className="App-button"
              onClick={() => {
                addtoList(game, list);
              }}
            >
              Add to Wish List
            </Button>
          );
        }
      }
    }
  };

  return (
    <Modal
      id="game-info"
      show={props.showModal}
      onHide={() => props.setShowModal(false)}
      aria-labelledby={"game-info"}
    >
      <Modal.Body>
        <Container>
          <h1>{props.game.info.name}</h1>
          <Row>
            <Col xs={12} md={8}>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(props.game.info.description),
                }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                style={{ maxWidth: "100%" }}
                src={props.game.info.background_image}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "3em" }}>
            <Col xs={6} md={4}>
              {displayAddButton(props.game, "games")}
              {displayAddButton(props.game, "wishlist")}
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <h4>Genres</h4>
              <div>
                {props.game.info.genres.map((genre) => (
                  <Button style={{ margin: "0.2em" }} variant="dark">
                    {genre.name}
                  </Button>
                ))}
              </div>
            </Col>
            <Col xs={6} md={4}>
              <h4>Platforms</h4>
              <div>
                {props.game.info.platforms.map((p) => (
                  <Button style={{ margin: "0.2em" }} variant="dark">
                    {p.platform.name}
                  </Button>
                ))}
              </div>
            </Col>
            <Col xs={6} md={4}>
              {props.game.info.metacritic ? (
                <div>
                  <h4>Metascore</h4>
                  <div>
                    <Button variant="success">
                      {props.game.info.metacritic}
                    </Button>
                  </div>
                </div>
              ) : null}
            </Col>
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Col xs={6} md={4}>
              {props.game.info.publishers ? (
                <div>
                  <h4>Publishers</h4>
                  <div>
                    {props.game.info.publishers.map((pub) => (
                      <Button style={{ margin: "0.2em" }} variant="dark">
                        {pub.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : null}
            </Col>
            <Col xs={6} md={4}>
              {props.game.info.released ? (
                <div>
                  <h4>Release Date</h4>
                  <p>{props.game.info.released}</p>
                </div>
              ) : (
                "Unknown"
              )}
            </Col>
            <Col xs={6} md={4}>
              <h4>Age Rating</h4>
              {props.game.info.esrb_rating ? (
                <div>{props.game.info.esrb_rating.name}</div>
              ) : (
                "Not Rated"
              )}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="App-button"
          onClick={() => props.setShowModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
  };
};

export default connect(mapStateToProps, { addGame, deleteGame })(GameInfo);
