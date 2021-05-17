import React, { useContext, useEffect } from 'react';
import Post from './Post';
import { MemoryContext } from '../contexts/MemoryContext';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const UserPosts = () => {
    const { userPosts, postId, postById } = useContext(MemoryContext);
    const history = useHistory();
    useEffect(() => {
        if (postById == undefined) {
            return null;
        }
        console.log(postById);
        history.push(`/posts/${postId}`);
    }, [postById]);

    //console.log(userPosts);
    return (
        <Container>
            <Row>
                {userPosts.map((post, key) => {
                    console.log(post);
                return (
                    <Col key={key} xs={10} md={6} lg={4} className="offset-1 offset-md-0 py-5 px-3">
                        <Post post={post} />
                    </Col>
                )
            })}
            </Row>
        </Container>
    )
}

export default UserPosts;