import React from 'react';
import RegisterForm from '../../common/RegisterForm/RegisterForm';
import '../../common/RegisterForm/RegisterForm.css'
import './RegisterPage.css'


const RegisterPage = () => {
return (
    <div className='formulario-registro'>
    <h1 className='encabezado-registro'>Registro</h1>
    <RegisterForm />
    </div>
);
};

export default RegisterPage;
