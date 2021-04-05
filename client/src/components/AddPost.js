import React from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTag} from '@fortawesome/free-solid-svg-icons'
import '../styles/add-post.css'

const AddPost = () => {
    return (
        <>
        <Container>
                <Form>
                    <Form.Group>
                        <Row>
                            <Col xs={12} className="text-center mt-2">
                                <Form.Label><h4>Add a Memory</h4></Form.Label>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Control placeholder="Type Title"></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faEdit} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Details of Memory</Form.Label>
                                <Form.Control placeholder="Details" as="textarea" rows={3}></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faTag} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Tags</Form.Label>
                                <Form.Control placeholder="#sunrise etc."></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Label className="label-file-upload" for="image-upload">Add Image</Form.Label><Form.File id="image-upload" className="d-none"/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
        </Container>
        </>
    )
}

export default AddPost;
