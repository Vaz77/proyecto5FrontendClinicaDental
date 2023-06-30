import React from 'react';
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
        <NavLink as={NavLink} to='/' exact="true"> 
        <img src={logo} alt="Logo" className="logo" /><h5 className='textoLogo'>DentaLife </h5>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="linksNavbar">
            <NavLink as={NavLink} to='/' exact="true" className="inicio"> <h5>Inicio</h5> </NavLink>
            <NavLink as={NavLink} to='/registro' exact="true" className="registro"> <h5>Registro</h5> </NavLink>
            <NavLink as={NavLink} to='/login' exact="true" className="iniciarSesion"> <h5>Iniciar sesión</h5> </NavLink>
            <NavDropdown title="Menú" id="basic-nav-dropdown" className='dropdown'>
                <NavDropdown.Item href="#action/3.1" className="">Citas Online</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/servicios' exact="true"> <h6>Tratamientos</h6>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Opiniones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/perfil' exact="true"> <h6>Perfil de usuario</h6>
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    );
};

export default CustomNavbar;