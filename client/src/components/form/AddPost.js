import React, {useEffect, useState}  from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import {useForm} from 'react-hook-form';

const AddPost = () => {
    //const [imgName,setImgName] = useState("");
    const { register, handleSubmit } = useForm();
    const [checkFileType, setCheckFileType] = useState(false);
    const onSubmit = async (dataForm, e) => {
        const formData = new FormData();
        let i = 0;
        formData.append('title', dataForm.title);
        formData.append('body', dataForm.body);
        formData.append('tags', dataForm.tags);
        formData.append('postImg', dataForm.postImg[0]);
        console.log();
        if (dataForm.postImg[0].type != "image/jpeg") {
            setCheckFileType(true);
            return null;
        }
        try {
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            const res = await axios({
                method: 'POST', url: 'http://localhost:5000/posts/addpost', data: formData, config});
                console.log(res);
                e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <Container>
                <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType="multipart/form-data">
                    <Form.Group>
                        <Row>
                            <Col xs={12} className="text-center mt-2">
                                <Form.Label><h4>Add a Memory</h4></Form.Label>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Control {...register('title')} required placeholder="Type Title"></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <i className="far fa-edit text-dark mx-1"></i>
                                <Form.Label className="mx-1">Details of Memory</Form.Label>
                                <Form.Control {...register('body')} required placeholder="Details" as="textarea" rows={5}></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <i className="fas fa-tag text-dark mx-1"></i>
                                <Form.Label className="mx-1">Tags</Form.Label>
                                <Form.Control {...register('tags')} placeholder="#sunrise etc." required></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <span className="text-danger px-1" style={{ display: checkFileType ? "inline-block" : "none" }}>File must be image/jpeg type!</span>
                                <Form.File {...register('postImg')} id="image-upload" required type="file"/>
                                
                            </Col>
                        </Row>
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" className="text-light border-light form-btn px-5 mb-5">Add the Memory</Button>
                    </div>
                </Form>
        </Container>
        </>
    )
}

export default AddPost;

//onChange={(e) => {setImgName(e.target.value)}}
// value={postImg}
// value={postTags}
// value={postBody}
// value={postTitle}
// onChange={(e) => setPostImg(e.target.value)}
// onChange={(e) => setPostTags(e.target.value)}
// onChange={(e) => setPostBody(e.target.value)}
// onChange={(e) => setPostTitle(e.target.value)}