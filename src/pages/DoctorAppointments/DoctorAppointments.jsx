import React, { useState, useEffect } from 'react';
import { fetchAllAppointments } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import './DoctorAppointments.css'
import { Row, Col } from 'react-bootstrap'


function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { credentials } = useSelector(userData);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const result = await fetchAllAppointments(credentials.token, {});
        const allAppointments = result.data;
        setAppointments(allAppointments);
      } catch (error) {
        console.error('Error al obtener las citas:', error);
      }
    };

    getAppointments();
  }, []);

  return (
    <div className='generalHome'>
    <Row>
    <div className='doctorGeneral'>
      <h1 className='textDoctor'>Todas las citas como doctor</h1>
      {appointments.map(appointment => (
        <Col md={5} key={appointment.id} className='doctorAppointments'>
          <p>ID de la cita: {appointment.id}</p>
          <p>Hora: {appointment.time}</p>
          <p>Fecha: {appointment.date}</p>
          <p>Observaciones: {appointment.observations}</p>
        </Col>
      ))}
    </div>
    </Row>
    </div>
  );
}

export default DoctorAppointments;