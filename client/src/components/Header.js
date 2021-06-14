import React from 'react'
import { Card, Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import LogoTransperant from '../images/logo1.png';
import { useHistory } from 'react-router-dom';
const Header = () => {
    const history = useHistory();
    return (
        <>
            <Container>
                <Navbar className=" nav-all mt-2" collapseOnSelect={true} expand="lg">
                    <Navbar.Brand>
                        <img alt="memories_app" src={LogoTransperant} className="align-top nav-logo mx-md-3" />{' '}
                        <h3 className="nav-text-pos nav-title">Memories App</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto mr-md-4">
                            <Nav.Link className="nav-text-pos" eventKey="1">
                                <h6 className="nav-sub px-3"><i className="fas fa-home" ></i>Home</h6>
                            </Nav.Link>
                            <Nav.Link className="nav-text-pos" eventKey="2">
                                <h6 className="nav-sub px-3"><i className="fas fa-user mr-1"></i>My Profile</h6>
                            </Nav.Link>
                            <Nav.Link className="nav-text-pos" eventKey="3">
                                <h6 className="nav-sub px-3 mr-1"><i className="fas fa-sign-out-alt mr-1"></i>Log In</h6>
                            </Nav.Link>
                            <div className="nav-text-pos">
                                <h6 className="px-3 nav-dark-mode"><input type="checkbox" className="dark-mode" />Dark Mode</h6>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}

export default Header;