import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../../services/apiCalls";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    getAllUsers();
    }, []);

    const getAllUsers = async () => {
    try {
        const response = await fetchAllUsers();
        setUsers(response.data);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
    };

    return (
    <div>
        <h1>Todos los usuarios registrados</h1>
        {users.length === 0 ? (
        <p>No hay usuarios registrados</p>
        ) : (
        <ul>
            {users.map((user) => (
            <li key={user.id}>
                Nombre: {user.name}, Apellido: {user.surname}, Email: {user.email}
            </li>
            ))}
        </ul>
        )}
    </div>
    );
};

export default AllUsers;
