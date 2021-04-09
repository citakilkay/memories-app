import React, {useContext} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'
import {MemoryContext} from '../contexts/MemoryContext'
import boston1 from '../images/boston1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons'
const Post = () => {
    const { posts } = useContext(MemoryContext);
    console.log(posts);
    const { users } = useContext(MemoryContext);
    console.log(users);

    const heartClick = () => {
        this.classList.add("click-like-icon");
    }
    return (
        <Container>
            <Row>
                <Col xs={10} md={4} className="offset-1 offset-md-0 py-5 px-3">
                    <Card className="card-all">
                        <div className="m-1"><span className="creator-name">generalkenobi</span><span className="text-muted ml-1 followers-count">5k followers</span></div>
                        <Card.Img variant="top" src={boston1} alt="image-description" className="card-image"/>
                        <FontAwesomeIcon icon={faSearchPlus} className="scale-icon"/>
                        <Card.Body className="card-inside">
                            <Card.Title>Post Title</Card.Title>
                            <Card.Text>Post Content is here.</Card.Text>
                            <Row className="text-center">
                                <Col xs= {1} className="card-icon mr-auto mb-auto">
                                    <div className="like-icon" onClick={() => {heartClick()}}></div>
                                </Col>
                                <Col xs={1} className="card-icon mr-auto mb-auto">
                                    <FontAwesomeIcon icon={farComment} className="comment-icon"/>
                                </Col>
                                <Col xs={6} className="card-icon ml-auto mb-auto">
                                    <p className="text-dark">11 hours ago</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Post;
