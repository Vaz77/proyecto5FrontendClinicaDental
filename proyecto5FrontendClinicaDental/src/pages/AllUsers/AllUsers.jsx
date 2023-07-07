import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllUsers } from '../../services/apiCalls';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const userToken = useSelector((state) => state.user.credentials.token);

    useEffect(() => {
    getAllUsers();
    }, []);

    const getAllUsers = async () => {
    try {
        const response = await fetchAllUsers(userToken);
        setUsers(response.data);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
    };

    if (users.length === 0) {
    return <p>No hay usuarios registrados</p>;
    }

    return (
    <div>
        <h1>Todos los usuarios registrados</h1>
        <ul>
        {users.map((user) => (
            <li key={user.id}>
            Nombre: {user.name}, Apellido: {user.surname}, Email: {user.email}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default AllUsers;





