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
        <Nav.Link as={NavLink} to='/' > 
        <img src={logo} alt="Logo" className="logo" /><h5 className='textoLogo'>DentaLife </h5>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="linksNavbar">
            <Nav.Link as={NavLink} to='/' > <h5>Inicio</h5> </Nav.Link>
            <Nav.Link as={NavLink} to='/registro' > <h5>Registro</h5> </Nav.Link>
            <Nav.Link as={NavLink} to='/login' > <h5>Iniciar sesión</h5> </Nav.Link>
            <NavDropdown title="Menú" id="basic-nav-dropdown" className='ml-auto'>
                <NavDropdown.Item href="#action/3.1">Citas Online</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/servicios' > <h6>Tratamientos</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Opiniones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/perfil' > <h6>Perfil de usuario</h6>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    );
};

export default CustomNavbar;