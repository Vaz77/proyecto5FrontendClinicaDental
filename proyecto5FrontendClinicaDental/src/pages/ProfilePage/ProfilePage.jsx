import React, { useState, useEffect } from "react";
import { fetchUserData, updateUserData } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import './ProfilePage.css';
import { Button, Modal, Form } from 'react-bootstrap';




const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [editedUser, setEditedUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const { credentials } = useSelector(userData);

    useEffect(() => {
    const getUserData = async () => {
        try {
        const userData = await fetchUserData(credentials.token);
        setUser(userData);
        setEditedUser(userData);
        } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        }
    };
    getUserData();
    }, []);

    const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async () => {
    try {
        const updatedUserData = await updateUserData(credentials.token, editedUser);
        setUser(updatedUserData);
        setEditedUser(updatedUserData);
        console.log('Perfil actualizado:', updatedUserData);
        handleCloseModal();
    } catch (error) {
        console.error('Error al actualizar el perfil del usuario:', error);
    }
    };

    const handleCloseModal = () => {
    setShowModal(false);
    };

    const handleShowModal = () => {
    setShowModal(true);
    };

    return (
    <div>
        {user ? (
        <div className="cardGeneralProfile">
            <div className="cardProfile">
            <div className="titleCard">
                <h2>Perfil de Usuario</h2>
            </div>
            <div className="fotoProfileGeneral">
                <div className="fotoProfile"></div>
            </div>
            <div className="textoProfile">
                <p>Nombre: {user.name}</p>
                <p>Apellidos: {user.surname}</p>
                <p>Teléfono: {user.phone}</p>
                <p>Correo electrónico: {user.email}</p>
            </div>
            <Button variant="primary" onClick={handleShowModal} className="botonModificarProfile">
                Modificar
            </Button>
            </div>
        </div>
        ) : (
        <p className="cargandoUsuario">Cargando datos del usuario...</p>
        )}

        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Modificar datos de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formSurname">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                type="text"
                name="surname"
                value={editedUser.surname}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                type="text"
                name="phone"
                value={editedUser.phone}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleInputChange}
                />
            </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
            </Button>
            <Button variant="primary" onClick={handleUpdateProfile}>
            Guardar cambios
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
    );
};

export default UserProfile;




/*
import React, { useState, useEffect } from "react";
import { fetchUserData } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import './ProfilePage.css';
const [editedUser, setEditedUser] = useState(null);


const UserProfile = () => {
    const [user, setUser] = useState(null);
    const { credentials } = useSelector(userData)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await fetchUserData(credentials.token);
                setUser(userData);
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };
        getUserData();
    }, []);

    return (
        <div>
            {user ? (
                <div className="cardGeneralProfile">
                <div className="cardProfile">
                    <div className="titleCard">
                    <h2>Perfil de Usuario</h2>
                    </div>
                    <div className="fotoProfileGeneral">
                    <div className="fotoProfile"></div>
                    </div>
                    <div className="textoProfile">
                    <p>Nombre: {user.name}</p>
                    <p>Apellidos: {user.surname}</p>
                    <p>Teléfono: {user.phone}</p>
                    <p>Correo electrónico: {user.email}</p>
                    </div>
                </div>
                </div>
            ) : (
                <p className="cargandoUsuario">Cargando datos del usuario...</p>
            )}
        </div>
    );
};

export default UserProfile;


*/




