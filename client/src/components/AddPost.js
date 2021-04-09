import React from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTag} from '@fortawesome/free-solid-svg-icons'
import '../styles/add-post.css'

const AddPost = () => {
    return (
        <>
        <Container>
                <Form action="/posts/addpost" method="POST">
                    <Form.Group>
                        <Row>
                            <Col xs={12} className="text-center mt-2">
                                <Form.Label><h4>Add a Memory</h4></Form.Label>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Control placeholder="Type Title" name="title" required></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faEdit} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Details of Memory</Form.Label>
                                <Form.Control placeholder="Details" as="textarea" rows={3} name="body" required></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faTag} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Tags</Form.Label>
                                <Form.Control placeholder="#sunrise etc." name="tags" required></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Label className="label-file-upload" htmlFor="image-upload">Add Image</Form.Label>
                                <Form.File id="image-upload" className="d-none" name="postImg" required/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" className="bg-light text-dark border-light form-btn px-5 mb-5">Add Memory</Button>
                    </div>
                </Form>
        </Container>
        </>
    )
}

export default AddPost;
