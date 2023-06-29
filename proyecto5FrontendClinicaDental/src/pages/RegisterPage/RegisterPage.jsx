/*
import React from 'react';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import '../../common/RegisterForm/RegisterForm.css'
import './RegisterPage.css'


const RegisterPage = () => {
return (
    <div className='formulario-registro'>
    <h1 className='encabezado-registro'>Registro</h1>
    <RegisterForm />
    </div>
);
};

export default RegisterPage;
*/
import React from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from 'react-bootstrap';
import "./RegisterPage.css";
import { registerUser } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { register } from "../userSlice"
import { useNavigate } from "react-router-dom";


export const RegisterPage = () => {
    const [user, setUser] = useState({
        name: "",
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
    }

    const submitHandler = (e, body) => {
        e.preventDefault()
        registerUser(body)
        .then(res => {
            let decoded = jwtDecode(res)
            dispatch(
                register({
                    token: res,
                    name: decoded.name,
                    role: decoded.rol
                })
            );
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
                controlId="formBasicPassword"
                >
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="name"
                    name="name"
                    placeholder="Enter name"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
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
                Enviar
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    </>
    );
};


export default RegisterPage;
