import React, {useState} from "react";
import "../App.css";
import {Image, Button, Modal, Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import DOMPurify from "dompurify";

function GameCard(props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="game-card" style={{ position: "relative", textAlign: 'center'}}>
            <Image src={props.game.box_art_url.replace('{width}', '240').replace('{height}', '320')}/>
            <h5 className="App-link title"
                onClick={() => {
                    setShowModal(true)
                }}>{props.game.name}
            </h5>
            {props.game.info.genres.slice(0, 3).map(genre =>
                <Button style={{margin: '0.2em'}} variant="dark">{genre.name}</Button>
            )}
            <Modal id="game-info"
                show={showModal}
                aria-labelledby={"game-info"}
            >
                <Modal.Body>
                    <Container>
                        <h1>{props.game.name}</h1>
                        <Row>
                            <Col xs={12} md={8}>
                                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.game.info.description)}} />
                            </Col>
                            <Col xs={6} md={4}>
                                <Image style={{ maxWidth: '100%'}} src={props.game.info.background_image}/>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '3em'}}>
                            <Col xs={6} md={4}>
                                <Button style={{ marginRight: '1em'}} className="App-button">Add to Library</Button>
                                <Button className="App-button">Add to Wish List</Button>
                                <p className="App-link" style={{marginTop: '1em'}}>Rate this game</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <h4>Genres</h4>
                                <div>
                                {props.game.info.genres.map(genre =>
                                    <Button style={{margin: '0.2em'}} variant="dark">{genre.name}</Button>
                                )}
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <h4>Platforms</h4>
                                <div>
                                    {props.game.info.platforms.map(p =>
                                        <Button style={{margin: '0.2em'}} variant="dark">{p.platform.name}</Button>
                                    )}
                                </div>
                            </Col>
                            <Col xs={6} md={4}>
                                {props.game.info.metacritic ?
                                    <div>
                                        <h4>Metascore</h4>
                                        <div>
                                            <Button variant="success">{props.game.info.metacritic}</Button>
                                        </div>
                                    </div>: null}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '2em'}}>
                            <Col xs={6} md={4}>
                                {props.game.info.publishers ?
                                    <div>
                                        <h4>Publishers</h4>
                                        <div>
                                            {props.game.info.publishers.map(pub =>
                                                <Button style={{margin: '0.2em'}} variant="dark">{pub.name}</Button>
                                            )}
                                        </div>
                                    </div>: null}
                            </Col>
                            <Col xs={6} md={4}>
                                {props.game.info.released ?
                                    <div>
                                    <h4>Release Date</h4>
                                    <p>{props.game.info.released}</p>
                                    </div>: "Unknown"}
                            </Col>
                            <Col xs={6} md={4}>
                                <h4>Age Rating</h4>
                                {props.game.info.esrb_rating ?
                                <div>
                                    {props.game.info.esrb_rating.name}
                                </div> : "Not Rated"}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="App-button" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default GameCard;