

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
        surname: "",
        email: "",
        password: "",
        phone: "",
        userType: "patient",
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
            
            // let decoded = jwtDecode(res)
            
            // dispatch(
            //     register({
            //         token: res,
            //         name: decoded.name,
            //         role: decoded.rol
            //     })
            // );
            
            navigate("/")
        })
    }

    return (
        <>
        <div className="generalHome">
        <Container className="formulario">
        <Row className="justify-content-center m-5">
            <Col
            xs={10}
            md={6}
            >
            <Form>
            <Form.Group
                className="mb-3"
                controlId="formBasicName"
                >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="name"
                    name="name"
                    placeholder="Introduce tu nombre"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="formBasicSurname"
                >
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                    type="surname"
                    name="surname"
                    placeholder="Introduce tus apellidos"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                >
                <Form.Label>Correo eléctronico</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Correo eléctronico"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>

                <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="formBasicPhone"
                >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={(e)=>{inputHandler(e)}}
                />
                </Form.Group>
                <Button
                variant="primary"
                type="submit"
                onClick={(e)=>{submitHandler(e, user)}}
                >
                Registrar
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
        </div>
    </>
    );
};


export default RegisterPage;
