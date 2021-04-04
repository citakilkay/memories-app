import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import LogoTransperant from '../images/logo1.png'
const Header = () => {
    return (
        <>
            <Container>
                <Card className="nav-all mt-2">
                    <Row className="align-items-center">
                        <Col xs={2} ><img src={LogoTransperant} className="nav-logo" alt="logo_png"></img></Col>
                        <Col xs={10} sm={8}><h1 className="nav-title">Memories App</h1></Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default Header;