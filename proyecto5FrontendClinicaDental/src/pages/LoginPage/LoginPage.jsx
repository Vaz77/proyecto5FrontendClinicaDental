import React from "react";
import Navbar from '../../common/Navbar/Navbar';
import LoginForm from '../../common/LoginForm/LoginForm';
import '../../common/LoginForm/LoginForm.css';



const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Iniciar sesion</h1>
            <LoginForm />
        </div>
    )
};


export default LoginPage