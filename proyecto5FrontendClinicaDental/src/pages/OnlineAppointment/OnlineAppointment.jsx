import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './OnlineAppointment.css';

const OnlineAppointment = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [observations, setObservations] = useState('');
    const [userId, setUserId] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [createAppointmentError, setCreateAppointmentError] = useState(null);

    const handleInputChange = (event) => {
    const { name, value } = event.target;

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
        case 'serviceId':
        setServiceId(value);
        break;
        default:
        break;
    }
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch('/api/createAppointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            time,
            date,
            observations,
            userId,
            serviceId,
        }),
        });

        if (response.ok) {
        setCreateAppointmentError(null);
        setTime('');
        setDate('');
        setObservations('');
        setUserId('');
        setServiceId('');
        // Realiza cualquier otra acción que desees después de crear la cita
        } else {
        const errorData = await response.json();
        setCreateAppointmentError(errorData.error);
        }
    } catch (error) {
        console.error('Error creating appointment:', error);
        setCreateAppointmentError('Failed to create appointment');
    }   
    };

    return (
    <div className="online-appointment-container">
        <h2>Solicitar Cita Online</h2>
        {createAppointmentError && <p className="error-message">{createAppointmentError}</p>}
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

        <Form.Group controlId="serviceId">
            <Form.Label>Tratamiento</Form.Label>
            <Form.Control
            type="text"
            name="serviceId"
            value={serviceId}
            onChange={handleInputChange}
            required
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Solicitar
        </Button>
        </Form>
    </div>
    );
};

export default OnlineAppointment;
