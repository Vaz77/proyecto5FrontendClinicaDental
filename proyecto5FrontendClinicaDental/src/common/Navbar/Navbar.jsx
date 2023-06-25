import React from 'react';
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../public/logotipoClinica.jpeg';



const CustomNavbar = () => {
    return (
    <Navbar expand="lg" bg="" variant="dark">
        <div className='container-fluid'>
        <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />Clínica Dental
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/registro">Registro</Nav.Link>
            <Nav.Link href="/login">Inicio de sesión</Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown" className='ml-auto'>
                <NavDropdown.Item href="#action/3.1">Citas Online</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Servicios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Opiniones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    );
};

export default CustomNavbar;