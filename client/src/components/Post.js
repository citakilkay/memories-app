import React, {useContext} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {MemoryContext} from '../contexts/MemoryContext';
import boston1 from '../images/boston1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons';
const Post = (post) => {
    post = post.post;
    console.log(post);
    /*const heartClick = () => {
        this.classList.add("click-like-icon");
    }*/
    return (
            <Card className="card-all">
                <div className="m-1"><span className="creator-name">{post.creator}</span><span className="text-muted ml-1 followers-count">5k followers</span></div>
                <Card.Img variant="top" src={boston1} alt="image-description" className="card-image"/>
                <FontAwesomeIcon icon={faSearchPlus} className="scale-icon"/>
                <Card.Body className="card-inside">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <Row className="text-center">
                        <Col xs= {1} className="card-icon mr-auto mb-auto">
                            <div className="like-icon"></div>
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
    )
}

export default Post;
