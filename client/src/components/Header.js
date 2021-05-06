import React from 'react'
import { Card, Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import LogoTransperant from '../images/logo1.png'
const Header = () => {
    return (
        <>
            <Container>
                    <Navbar className=" nav-all mt-2" collapseOnSelect={true} expand="lg">
                        <Navbar.Brand href="#home">
                            <img alt="memories_app" src={LogoTransperant} className="align-top nav-logo mx-md-3"/>{' '}
                            <h2 className="nav-title nav-text-pos">Memories App</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto mr-md-4">
                                <Nav.Item className="nav-text-pos" eventKey="1">
                                    <h5 className="nav-sub px-3"><i className="fas fa-user mr-1"></i>My Profile</h5>
                                </Nav.Item>
                                <Nav.Item className="nav-text-pos" eventKey="2">
                                    <h5 className="nav-sub px-3 mr-1"><i className="fas fa-sign-out-alt mr-1"></i>Log-Out</h5>
                                </Nav.Item>
                                <Nav.Item className="nav-text-pos" eventKey="3">
                                    <h5 className=" px-3 nav-dark-mode"><input type="checkbox" className="dark-mode" />Dark Mode</h5>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </Container>
        </>
    )
}

export default Header;