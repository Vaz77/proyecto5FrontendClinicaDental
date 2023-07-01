import React, { useState, useEffect } from "react";
import { fetchUserData } from '../../services/apiCalls';
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import './ProfilePage.css';

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







