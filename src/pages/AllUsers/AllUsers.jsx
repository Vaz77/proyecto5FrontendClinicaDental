import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchAllUsers } from '../../services/apiCalls';
import { Row, Col } from 'react-bootstrap'
import './AllUsers.css'

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

    const pairs = users.reduce((result, user, index) => {
        if (index % 2 === 0) {
          result.push(users.slice(index, index + 2));
        }
        return result;
      }, []);

    return (
    <div className='generalHome'>
        
      <h1 className='textUsers'>Todos los usuarios registrados</h1>
      <div className='profileUsers'>
      {pairs.map((pair, index) => (
        <Row key={index} className=''>
          {pair.map((user) => (
            <Col key={user.id} sm={6} className='usuarios'>
                <div className='fotoProfile'></div>
              <p>Nombre: {user.name}</p>
              <p>Apellido: {user.surname}</p>
              <p>Email: {user.email}</p>
            </Col>
          ))}
        </Row>
      ))}
    </div>
    </div>
    
    );
};

export default AllUsers;





