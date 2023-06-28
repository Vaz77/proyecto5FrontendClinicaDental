import React from 'react';
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../public/logotipoClinica.jpeg';
import { NavLink } from 'react-router-dom';




const CustomNavbar = () => {
    return (
    <Navbar expand="lg" bg="" variant="dark">
        <div className='container-fluid'>
        <Nav.Link as={NavLink} to='/' exact> 
        <img src={logo} alt="Logo" className="logo" />Clínica Dental 
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="linksNavbar">
            <Nav.Link as={NavLink} to='/' exact> <h5>Inicio</h5> </Nav.Link>
            <Nav.Link as={NavLink} to='/registro' exact> <h5>Registro</h5> </Nav.Link>
            <Nav.Link as={NavLink} to='/login' exact> <h5>Iniciar sesión</h5> </Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown" className='ml-auto'>
                <NavDropdown.Item href="#action/3.1">Citas Online</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/servicios' exact> <h6>Tratamientos</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Opiniones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/perfil' exact> <h6>Perfil de usuario</h6>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    );
};

export default CustomNavbar;