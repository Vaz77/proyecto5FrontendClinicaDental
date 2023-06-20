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
            <input 
            type="text" 
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
            />
            <input 
            type="email" 
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
            />
            <input 
            type="tel" 
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
            />
            <button type="submit">Registrarse</button>
        </form>
    )

}

export default RegisterForm;