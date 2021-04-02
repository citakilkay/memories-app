import React from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import LogoTransperant from './images/logo1.png'

const App = () => {
    return (
        <>
        <Container>
                <Card className="nav-all">
                <Row className="align-items-center">
                        <Col xs={2} ><img src={LogoTransperant} className="nav-logo"></img></Col>
                    <Col xs={10} sm={8} className="col-sm-offset-2"><h1 className="nav-title">Memories App</h1></Col>
                </Row>
            </Card>
        </Container>

        </>
    )
}

export default App
