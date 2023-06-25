import React, { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};
    
return (
    <form className = "login-form" onSubmit={handleSubmit}>
        <input 
        className="input-login"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleInputChange}
        required
        />
                <input 
        className="input-login"
        type="password"
        name="pasword"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleInputChange}
        required
        />
    
    <button type="submit" className="boton-login">
        Iniciar sesión
    </button>
    </form>
    );
};

export default LoginForm;
