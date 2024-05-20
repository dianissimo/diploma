import React, { Component } from 'react';
import { 
    Navbar, 
    Nav, 
    Container 
} from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Theory from '../Pages/Theory';
import Games from '../Pages/Games';

export default class Header extends Component {
    render() {
        return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href='/' > В начало </Nav.Link>
                            <Nav.Link href='/theory' > Теория </Nav.Link>
                            <Nav.Link href='/games' > Игры </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/theory' element={<Theory/>}/>
                    <Route path='/games' element={<Games/>}/>
                </Routes>
            </Router>
        </>
        )
    }
}