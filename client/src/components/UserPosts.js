import React, { useContext } from 'react';
import Post from './Post';
import { MemoryContext } from '../contexts/MemoryContext';
import { Container, Row, Col } from 'react-bootstrap';

const UserPost = () => {
    const { userPosts } = useContext(MemoryContext);
    console.log(userPosts);
    return (
        <Container>
            <Row>
                UserPosts Rendered...
                {userPosts.map((post, key) => {
                    return (
                        <Col key={key} xs={10} md={6} lg={4} className="offset-1 offset-md-0 py-5 px-3">
                            {console.log("UsersPost.map working")}
                            <Post post={post}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default UserPost;
