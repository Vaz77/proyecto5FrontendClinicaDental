import React from "react";
import LoginForm from '../../common/LoginForm/LoginForm';
import '../../common/LoginForm/LoginForm.css';
import './LoginPage.css';




const LoginPage = () => {
    return (
        <div className="formulario-login">
            <h1 className="encabezado-login">Iniciar sesion</h1>
            <LoginForm />
        </div>
    )
};


export default LoginPage