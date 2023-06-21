import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import '../../common/RegisterForm/RegisterForm.css'


const RegisterPage = () => {
return (
    <div>
    <Navbar />
    <h1>Registro</h1>
    <RegisterForm />
    </div>
);
};

export default RegisterPage;
