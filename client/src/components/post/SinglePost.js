import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MemoryContext } from '../../contexts/MemoryContext';
import { useContext } from 'react';
import moment from 'moment';

const SinglePost = () => {
    const { postById } = useContext(MemoryContext);
    const createdAt = moment(postById.createdAt).startOf('hour').fromNow();
    let postTags = postById.tags || ["Loading Post Tags"];
    return (
        <>
           <Container>
               <Row>
                   <Col md={10} className="offset-md-1">
                       <Row>
                            <Card className="card-all my-5">
                                <Col xs={12} className="my-3">
                                    <h3 className="text-center">{postById.title}</h3>
                                </Col>
                                <Col xs={12} className="my-3">
                                    <div>{postById.body}</div>
                                </Col>
                                <Col xs={12} className="my-3 text-center">
                                    <Row>
                                        <Col xs={2} className="card-icon mr-auto mb-auto">
                                            <div className="like-icon"></div>
                                        </Col>
                                        <Col xs={7} md={7}>
                                            {postTags.map((tag) => {
                                                return <span className="post-tag mx-1 px-2">{tag}</span>
                                            })}
                                        </Col>
                                        <Col xs={3} className="card-icon mb-auto">
                                            <p className="text-dark">{createdAt}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} md={10} className="mb-3 offset-md-1">
                                    <Form.Control required placeholder="Add A Comment." as="textarea" name="comment" rows={3}></Form.Control>
                                </Col>
                                <Col xs={12} md={2} className="offset-md-1">
                                    <Button type="submit" className="text-light border-light form-btn">Add Comment</Button>
                                </Col>
                                <Col xs={12} className="text-center mt-2 mb-5">
                                    <div >No Comment yet.</div>
                                </Col>
                            </Card>
                       </Row>
                   </Col>
               </Row>
           </Container>
        </>
    )
}

export default SinglePost;
