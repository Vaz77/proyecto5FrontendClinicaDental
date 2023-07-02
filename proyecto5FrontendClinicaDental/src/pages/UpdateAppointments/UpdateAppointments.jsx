import React, { useState, useEffect } from 'react';
import { fetchUserAppointments } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';


function UpdateAppointments() {
const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getUserAppointments = async () => {
      try {
        const appointments = await fetchUserAppointments(credentials.token);
        setAppointments(appointments);
      } catch (error) {
        console.error('Error fetching user appointments:', error);
      }
    };

    getUserAppointments();
  }, []);

  return (
    <div>
      <h2>Todas las citas del usuario</h2>
      {appointments.length ? (
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <p>ID de la cita: {appointment.id}</p>
            <p>Hora: {appointment.time}</p>
            <p>Fecha: {appointment.date}</p>
            <p>Observaciones: {appointment.observations}</p>
            <hr />
          </div>
        ))
      ) : (
        <p className="loadingAppointments">Cargando citas del usuario...</p>
      )}
    </div>
  );
}

export default UpdateAppointments;


