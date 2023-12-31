import React from 'react';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../pages/userSlice';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logtipoClinica.png';

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const token = user.credentials.token;
  const role = user.data.role;
  const name = user.data.name;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" bg="" variant="dark" className='navbar'>
      <div className='container-fluid'>
        <NavLink as={NavLink} to='/' exact="true">
          <img src={logo} alt="Logo" className="logo" />
          <h5 className='textoLogo'>DentaLife</h5>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="linksNavbar ml-auto">
            <NavLink as={NavLink} to='/' exact="true" className="inicio">
              <h5>Inicio</h5>
            </NavLink>
            <NavLink as={NavLink} to='/registro' exact="true" className="registro">
              <h5>Registro</h5>
            </NavLink>
            <NavLink as={NavLink} to='/citasOnline' exact="true" className="iniciarSesion">
              <h5>Cita Online</h5>
            </NavLink>
            <NavLink as={NavLink} to='/servicios' exact="true" className="iniciarSesion">
              <h5>Tratamientos</h5>
            </NavLink>
            {token && role === 2 && (
              <NavLink as={NavLink} to='/doctorAppointments' exact="true" className="iniciarSesion">
                <h5>Citas registradas</h5>
              </NavLink>
            )}
            {token && role === 1 && (
              <NavLink as={NavLink} to='/allUsers' exact="true" className="iniciarSesion">
                <h5>Usuarios registrados</h5>
              </NavLink>
            )}
            {token && role === 3 && (
            <NavLink as={NavLink} to='/perfil' exact="true" className="iniciarSesion">
              <h5>Perfil de Usuario</h5>
            </NavLink>
            )}
          </Nav>
          <Nav className="ml-auto">
            {token ? (
              <>
              <h5 className="iniciarCerrar bienvenida">Bienvenid@ {name}</h5>
              <NavLink as={NavLink} to="/" exact="true" className="iniciarCerrar" onClick={handleLogout}>
                <h5>Cerrar sesión</h5>
              </NavLink>
              </>
            ) : (
              <>
              <NavLink as={NavLink} to="/login" exact="true" className="iniciarCerrar">
                <h5>Iniciar sesión</h5>
              </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;

