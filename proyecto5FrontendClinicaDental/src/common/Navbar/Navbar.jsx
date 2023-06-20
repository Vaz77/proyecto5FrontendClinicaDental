import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/registro' className="navbar-link">Registro</Link>
            <Link to='/login' className="navbar-link">Inicio de sesión</Link>
        </nav>
    );
};


export default Navbar;