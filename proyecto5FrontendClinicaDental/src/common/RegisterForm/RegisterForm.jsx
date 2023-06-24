import React, { useState } from "react";

const RegisterForm = () => {
    //Estado del formulario
    const [formData, setFormData] = useState ({  //Utilizamos el hook para declarar una variable formData (almacena los datos del form) y una funcion setFormData que se utiliza para actualizar el estado
        name:'',
        lastName:'',
        email:'',
        phone: ''
    });
    //Manejo del cambio en los campos de entrada
    const handleInputChange = (e) => {    //handleInputChange se utiliza como controlador de eventos para los cambios, tomamos evento (e) como argunmento, contiene la info sobre el evento que desncadeno(En este caso un cambio en el campo de entrada)
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    //Manejo del envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
    //Renderizado del componente
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