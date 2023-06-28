import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function RegisterForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
    };

    return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
            />
            <Form.Control.Feedback type="invalid">
            Please choose a username.
            </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid city.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid state.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Form.Group className="mb-3">
        <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
        />
        </Form.Group>
        <Button type="submit">Submit form</Button>
    </Form>
    );
}

export default RegisterForm;

/*
import React, { useState } from "react";

const RegisterForm = () => {
    //Estado del formulario
    const [formData, setFormData] = useState ({  //Utilizamos el hook para declarar una variable formData (almacena los datos del form) y una funcion setFormData que se utiliza para actualizar el estado
        name:'',
        lastName:'',
        email:'',
        phone: ''
    });
    //Manejo del cambio en los campos de entrada
    const handleInputChange = (e) => {    //handleInputChange se utiliza como controlador de eventos para los cambios, tomamos evento (e) como argunmento, contiene la info sobre el evento que desncadeno(En este caso un cambio en el campo de entrada)
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    //Manejo del envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
    //Renderizado del componente
    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input className="input-register"
            type="text" 
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="email" 
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="tel" 
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="password" 
            name="password"
            placeholder="Contraseña,debe contener 6 caracteres mínimo"
            value={formData.password}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="password" 
            name="password"
            placeholder="Vuelve a introducir la contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
            />
            <button type="submit" className="boton-register">Registrarse</button>
        </form>
    )

}

export default RegisterForm;

*/