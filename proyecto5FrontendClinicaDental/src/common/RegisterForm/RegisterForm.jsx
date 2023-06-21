import React, { useState } from "react";

const RegisterForm = () => {
    const [formData, setFormData] = useState ({
        name:'',
        lastName:'',
        email:'',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <input className="input-register"
            type="text" 
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="email" 
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="tel" 
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="password" 
            name="password"
            placeholder="Contraseña,debe contener 6 caracteres mínimo"
            value={formData.password}
            onChange={handleInputChange}
            required
            />
            <input className="input-register"
            type="password" 
            name="password"
            placeholder="Vuelve a introducir la contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
            />
            <button type="submit" className="boton-register">Registrarse</button>
        </form>
    )

}

export default RegisterForm;