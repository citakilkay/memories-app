import React, {useEffect, useState}  from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTag} from '@fortawesome/free-solid-svg-icons'
import '../styles/add-post.css'
import {useForm} from 'react-hook-form';
import imageToBase64 from 'image-to-base64';
const AddPost = () => {
    const [postTitle, setPostTitle] =useState();
    const [postBody, setPostBody] = useState();
    const [postImg, setPostImg] = useState();
    const [postTags, setPostTags] = useState();
    const [postData, setPostData] = useState({});
    const clearInput = () => {
        setPostTitle("");
        setPostBody("");
        setPostImg("");
        setPostTags("");
    }
    /*const handleSubmit= (e) => {
        e.preventDefault();
        //const formData = new FormData();
        //formData.append("postImg", data.postImg[0]);
        setPostData({ title: postTitle, creator: 'ilkaycitak', body: postBody, tags: postTags, postImg: postImg });
        console.log(postData);
        //console.log(formData);
    }
*//*
    useEffect(async () => {
        try {
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            const response = await axios({ method: 'POST', url: 'http://localhost:5000/posts/addpost', data: postData, config });
            console.log(response);
            console.log(postData);
            clearInput();
        } catch (err) {
            console.log(err);
        }
    },[postData]);*/

    const { register, handleSubmit } = useForm();
    const onSubmit = async (dataForm) => {
        console.log(dataForm);
        const formData = new FormData();
        formData.append('title', dataForm.title);
        formData.append('body', dataForm.body);
        formData.append('tags', dataForm.tags);
        formData.append('postImg', dataForm.postImg[0]);
        console.log(dataForm.postImg[0]);
        console.log(formData);
        //imageToBase64(postImg).then( res => console.log(res));
        try {
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            const res = await axios({
                method: 'POST', url: 'http://localhost:5000/posts/addpost', data: formData, config});
            console.log(res);
            //clearInput();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <Container>
                <Form /*action="/posts/addpost"*/ onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType="multipart/form-data">
                    <Form.Group>
                        <Row>
                            <Col xs={12} className="text-center mt-2">
                                <Form.Label><h4>Add a Memory</h4></Form.Label>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Control {...register('title')} required placeholder="Type Title"></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faEdit} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Details of Memory</Form.Label>
                                <Form.Control {...register('body')} required placeholder="Details" as="textarea" rows={3}></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <FontAwesomeIcon icon={faTag} className="text-dark mx-1"></FontAwesomeIcon>
                                <Form.Label className="mx-1">Tags</Form.Label>
                                <Form.Control {...register('tags')} placeholder="#sunrise etc." required></Form.Control>
                            </Col>
                            <Col xs={12} md={6} className="my-2 offset-md-3">
                                <Form.Label className="label-file-upload" htmlFor="image-upload">Add Image</Form.Label>
                                <Form.File {...register('postImg')} id="image-upload" required type="file" onChange={(e) => setPostImg(e.target.value)}/>
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

// value={postImg}
// value={postTags}
// value={postBody}
// value={postTitle}
// onChange={(e) => setPostImg(e.target.value)}
// onChange={(e) => setPostTags(e.target.value)}
// onChange={(e) => setPostBody(e.target.value)}
// onChange={(e) => setPostTitle(e.target.value)}