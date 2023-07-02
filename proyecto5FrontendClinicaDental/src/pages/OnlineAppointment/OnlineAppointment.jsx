import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './OnlineAppointment.css';
import { createAppointment  } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { Link } from 'react-router-dom';
import UpdateAppointments from '../UpdateAppointments/UpdateAppointments';




const OnlineAppointment = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [observations, setObservations] = useState('');
    const [userId, setUserId] = useState('');
    const [serviceName, setServiceName] = useState('');
    const { credentials } = useSelector(userData);

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
        case 'time':
        setTime(value);
        break;
        case 'date':
        setDate(value);
        break;
        case 'observations':
        setObservations(value);
        break;
        case 'userId':
        setUserId(value);
        break;
        case 'serviceName':
        setServiceName(value);
        break;
        default:
        break;
    }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const appointmentData = {
            time,
            date,
            observations,
            userId,
            serviceName,
            };
            const response = await createAppointment(credentials.token, appointmentData);
            setTime('');
            setDate('');
            setObservations('');
            setUserId('');
            setServiceName('');

        } catch (error) {
            console.error('Error al crear la cita:', error);
        }
        };
    return (
    <div className="online-appointment-container">
        <div className='textoCabecera'>
        <h2 className='textoCita'>Solicitar Cita Online</h2>
        </div>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="time">
            <Form.Label>Hora</Form.Label>
            <Form.Control
            type="text"
            name="time"
            value={time}
            onChange={handleInputChange}
            required
            />
        </Form.Group>

        <Form.Group controlId="date">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
            type="text"
            name="date"
            value={date}
            onChange={handleInputChange}
            required
            />
        </Form.Group>

        <Form.Group controlId="observations">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
            as="textarea"
            name="observations"
            value={observations}
            onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="serviceName">
            <Form.Label>Tratamiento</Form.Label>
            <Form.Control
            type="text"
            name="serviceName"
            value={serviceName}
            onChange={handleInputChange}
            required
            />
        </Form.Group>
        <div className='botones'>
        <Button variant="primary" type="submit" className='boton'>
            Solicitar
        </Button>
        <Link to="/updateAppointments">
    <Button variant="primary" className='boton2'>
        Modificar Cita
    </Button>
</Link>

        </div>
        </Form>
    </div>
    );
};

export default OnlineAppointment;
