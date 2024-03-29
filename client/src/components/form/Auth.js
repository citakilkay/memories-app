import React, { useEffect, useState, useContext } from 'react';
import { MemoryContext } from '../../contexts/MemoryContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../styles/auth-style.scss";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const history = useHistory();
    const { users, setIsLogged } = useContext(MemoryContext);
    const [firstPassword, setFirstPassword] = useState(1);
    const [secPassword, setSecPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);
    const [userName, setUserName] = useState();
    const [checkUserName, setCheckUserName] = useState(true);
    const [eMail, setEMail] = useState();
    const [checkEmail, setCheckMail] = useState(true);
    const onClickLogin = (e) => {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
        document.getElementById('register-form-link').classList.remove('active');
        document.getElementById('login-form-link').classList.add('active');
    }
    const onClickRegister = () => {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
        document.getElementById('login-form-link').classList.remove('active');
        document.getElementById('register-form-link').classList.add('active');
    }
    //Login Function
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(e.target.username);
        console.log(e.target.password);
        try {
            const res = await axios({ method: 'POST', url: 'http://localhost:5000/users/login/', data: formData });
            e.target.reset();
            console.log(res);
            setIsLogged("ekgyo");
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

    // Create User Fuction 
    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (passwordLength && confirmPassword && checkUserName) {
            const formData = new FormData(e.target);
            try {
                const res = await axios({ method: 'POST', url: 'http://localhost:5000/users/register', data: formData });
                console.log(res);
                e.target.reset();
                onClickLogin();
            } catch (err) {
                console.log(err);
            }
        }
    }
    // Check Password is valid
    useEffect(() => {
        setConfirmPassword(firstPassword === secPassword);
        setPasswordLength(firstPassword.length > 7);
    }, [secPassword, firstPassword]);

    // Check username is unique
    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            let n = !(users[i].username === userName)
            setCheckUserName(n);
            if (n == false) {
                return null;
            }
        }
    }, [userName])

    // Check Email is unique
    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            let n = !(users[i].email === eMail);
            setCheckMail(n);
            if (n == false) {
                return null;
            }
        }
    }, [eMail])

    return (
        <Container className="my-5">
            <Row className="mx-3">
                <Col xs={12} md={6} className="offset-md-3 my-3 p-5 auth">
                    <div className="panel panel-login">
                        <div className="panel-heading">
                            <Row>
                                <Col xs={12} md={6} className="text-center">
                                    <a className="active" id="login-form-link" onClick={onClickLogin}>Login</a>
                                </Col>
                                <Col xs={12} md={6} className="text-center">
                                    <a id="register-form-link" onClick={onClickRegister}>Register</a>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        <div className="panel-body mt-5">
                            <Form id="login-form" onSubmit={handleSubmitLogin}>
                                <Form.Group style={{ display: "block" }}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" id="username" placeholder="Username" />
                                    <Form.Label className="mt-3">Pasword</Form.Label>
                                    <Form.Control type="password" name="password" id="password" autoComplete="off" placeholder="Password" />
                                    <Button className="btn btn-register my-5" type="submit" block>LOG IN</Button>
                                </Form.Group>
                            </Form>
                            <Form id="register-form" style={{ display: "none" }} onSubmit={handleSubmitRegister}>
                                <Form.Group>
                                    <Form.Label className="mt-2">Username <span className="text-danger px-1" style={{ display: checkUserName ? "none" : "inline-block" }}>Username must be unique!</span> </Form.Label>
                                    <Form.Control type="text" name="username" id="username" placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} required />
                                    <Form.Label className="mt-2">E-mail  <span className="text-danger px-1" style={{ display: checkUserName ? "none" : "inline-block" }}>Email must be unique!</span></Form.Label>
                                    <Form.Control type="email" name="email" id="email" placeholder="example@example.com" onChange={(e) => { setEMail(e.target.value) }} required />
                                    <Form.Label className="mt-2">Pasword <span className="text-danger px-1" style={{ display: passwordLength ? "none" : "inline-block" }}>Password must be at least 8 characters! </span></Form.Label>
                                    <Form.Control type="password" name="password" id="password" placeholder="Password" onChange={(e) => { setFirstPassword(e.target.value) }} autoComplete="off" required />
                                    <Form.Label className="mt-2">Repeat Password <span className="text-danger px-1" style={{ display: confirmPassword ? "none" : "inline-block" }}>Passwords must be same!</span></Form.Label>
                                    <Form.Control type="password" name="repeat" id="repeat" placeholder="Repeat Password" onChange={(e) => setSecPassword(e.target.value)} autoComplete="off" required />
                                    <Button className="btn btn-register my-5" type="submit" block>REGISTER</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;