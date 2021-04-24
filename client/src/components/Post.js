import React, {useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {MemoryContext} from '../contexts/MemoryContext';
import axios from 'axios'
import moment from 'moment'
const Post = (post) => {
    const { setPostId, postById } = useContext(MemoryContext);
    const history = useHistory();
    post = post.post;
    const nowDate = post.createdAt || new Date();
    const createdAt = moment(post.createdAt).startOf('hour').fromNow();
    let postBody = post.body || "Loading Post Body";
        postBody = postBody.substring(0,300) + "...";
    let postTags = post.tags || ["Loading Post Tags"];
    /*const heartClick = () => {
        this.classList.add("click-like-icon");
    }*/
    useEffect(async () => {
        if (postById == undefined) {
            return null;
        }
        console.log(postById);
        history.push('/posts/:id');
    }, [postById]);
    return (
            <Card className="card-all">
                <div className="m-1"><span className="creator-name">{post.creator}</span><span className="text-muted ml-1 followers-count">5k followers</span></div>
            <Card.Img variant="top" src={`${post.postImg}`} alt="post_image" className="card-image"/>
                <i class="fas fa-search-plus scale-icon"></i>
                <Card.Body className="card-inside">
                    <Card.Title>{post.title}</Card.Title>
                <Card.Text><span>{postBody}</span><br /><div className="text-center"><u className="read-more" onClick={() => { setPostId(post._id) }}>Read More</u></div></Card.Text>
                    <Row className="text-center">
                        <Col xs= {1} className="card-icon mr-auto mb-auto">
                            <div className="like-icon"></div>
                        </Col>
                        <Col xs={1} className="card-icon mr-auto mb-auto">
                        <i class="far fa-comment comment-icon"></i>
                        </Col>
                        <Col xs={6} className="card-icon ml-auto mb-auto">
                        <p className="text-dark">{createdAt}</p>
                        </Col>
                    </Row>
                    {postTags.map((tag) => {
                        return <span className="post-tag mx-1 px-2">{tag}</span>
                    })}
                </Card.Body>
            </Card>
    )
}

export default Post;
