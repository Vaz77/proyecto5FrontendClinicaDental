import React, { useState } from "react";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    // Aquí se debe agregar la lógica para enviar los datos del perfil al backend y actualizarlos
    };

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
        <input
        className="input-profile"
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleInputChange}
        required
        />
        <input
        className="input-profile"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleInputChange}
        required
        />
        <button type="submit" className="boton-profile">
        Guardar cambios
        </button>
        </form>
    );
    };

export default ProfileForm;
