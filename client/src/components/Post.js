import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'


const Post = () => {
    return (
        <Container>
            <Row className="">
                <Col xs={10} md={4} className="offset-1 offset-md-0">
                    <Card><h1>Post</h1></Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;
