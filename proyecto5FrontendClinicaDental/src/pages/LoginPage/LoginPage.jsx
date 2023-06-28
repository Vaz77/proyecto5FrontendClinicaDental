
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginPage.css";
import { loginUser } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [user, setUser] = useState({
    email: "",
    password: "",
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inputHandler = ({ target }) => {
    let { name, value } = target;
    setUser((prevState) => ({
        ...prevState,
        [name] : value
    }))
    };

    const submitHandler = (e, body) => {
    e.preventDefault()
    loginUser(body)
    .then(res => {
        let decoded = jwtDecode(res)
        dispatch(
            login({
                token: res,
                name: decoded.name,
                role: decoded.rol
            })
        )
        navigate("/")
    })
    }
    
    return (
    <>
        <Container>
        <Row className="justify-content-center m-5">
            <Col
            xs={10}
            md={6}
            >
            <Form>
                <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                >
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
                <Button
                variant="primary"
                type="submit"
                onClick={(e)=>{submitHandler(e, user)}}
                >
                Submit
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    </>
    );
};

export default LoginPage;
/*
import React from "react";
import LoginForm from '../../common/LoginForm/LoginForm';
import '../../common/LoginForm/LoginForm.css';
import './LoginPage.css';


    export const LoginPage = () => {
    return (
        <div className="formulario-login">
            <h1 className="encabezado-login">Iniciar sesion</h1>
            <LoginForm />
        </div>
    )
};


export default LoginPage
*/