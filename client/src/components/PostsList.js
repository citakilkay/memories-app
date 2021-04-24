import React, {useContext, useEffect} from 'react'
import { MemoryContext } from '../contexts/MemoryContext';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import {Container, Row, Col } from 'react-bootstrap';

const PostsList = () => {
    const { posts, postById } = useContext(MemoryContext);
    const history = useHistory();
    useEffect(async () => {
        if (postById == undefined) {
            return null;
        }
        console.log(postById);
        history.push(`/posts/:id`);
    }, [postById]);
        return (
            <Container>
                <Row>
                    {posts.map((post, key) => {
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

export default PostsList;
