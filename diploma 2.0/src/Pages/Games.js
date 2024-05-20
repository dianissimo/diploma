import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import GameDisplay from "../Components/GameDisplay";

export default class Games extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="dfs">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="game_1"> Игра 1 </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="game_1">
                                    <h6>Управление</h6>
                                    <p>
                                        - <i>W</i>, <i>A</i>, <i>S</i>, <i>D</i> для передвижения блоков
                                        <br></br>
                                        - <i>R</i> для перезапуска уровня
                                        <br></br>
                                        - <i>Q</i> для перехода к следующему уровню
                                    </p>
                                    <h6>Цель игры</h6>
                                    <p>
                                        Доставить белый блок к выходу
                                    </p>
                                    <GameDisplay />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}