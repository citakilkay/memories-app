import React, { useContext, useEffect, useState } from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MemoryContext } from '../../contexts/MemoryContext';
import axios from 'axios';
import moment from 'moment';
const Post = (post) => {
    const { setPostId, setUserName } = useContext(MemoryContext);
    const [checkComment, setCheckComment] = useState(false);

    post = post.post;
    const postImgKey = post.postImg || "dinazor.jpg";
    console.log(post.postImg);
    const createdAt = moment(post.createdAt).startOf('hour').fromNow();
    let postBody = post.body || "Loading Post Body";
    postBody = postBody.substring(0, 300) + "...";
    let postTags = post.tags || ["Loading Post Tags"];
    const onClickLike = (e) => {
        if (e.target.checked) {

        } else {

        }
    }
    const onClickComment = (e) => {
        if (e.target.checked) {
            setCheckComment(true);
        } else {
            setCheckComment(false);
        }
    }
    const submitComment = (e) => {

    }
    return (
        <Card className="card-all">
            <div className="m-1"><span className="creator-name" onClick={() => { setUserName(post.creator) }}>{post.creator}</span></div>
            <Card.Img variant="top" src={`http://localhost:5000/posts/images/${postImgKey}`} alt="post_image" className="card-image" />
            <i className="fas fa-search-plus scale-icon"></i>
            <Card.Body className="card-inside">
                <Card.Title>{post.title}</Card.Title>
                <Card.Text><span>{postBody}</span><br /><u className="read-more" onClick={() => { setPostId(post._id) }}>Read More</u></Card.Text>
                <Row className="text-center">
                    <Col xs={1} className="card-icon mr-auto mb-auto mt-1">
                        <input type="checkbox" className="like-icon" onClick={onClickLike} />
                    </Col>
                    <Col xs={1} className="card-icon mr-auto mb-auto mt-1">
                        <input type="checkbox" className="far fa-comment comment-icon" onClick={onClickComment} />
                    </Col>
                    <Col xs={6} className="card-icon ml-auto mb-auto mt-1">
                        <p className="text-dark">{createdAt}</p>
                    </Col>
                </Row>
                <Form onSubmit={submitComment}>
                    <Row>
                        <Col xs={8}>
                            <Form.Control type="textarea" className="input-comment" style={{ display: checkComment ? "inline-block" : "none" }} />
                        </Col>
                        <Col xs={2}>
                            <Button className="btn btn-danger input-comment" type="submit" style={{ display: checkComment ? "inline-block" : "none" }}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
                {postTags.map((tag) => {
                    return <span className="post-tag mx-1 px-2">{tag}</span>
                })}
            </Card.Body>
        </Card>
    )
}

export default Post;

// src={`${post.postImg}`}