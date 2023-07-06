import React, { useState, useEffect } from 'react';
import { fetchAllAppointments } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';







function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const { credentials } = useSelector(userData);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const result = await fetchAllAppointments(credentials.token, {});
        const allAppointments = result.data; // Acceder a la propiedad 'data' del resultado
        setAppointments(allAppointments);
      } catch (error) {
        console.error('Error al obtener las citas:', error);
      }
    };

    getAppointments();
  }, []);

  return (
    <div>
      <h1>Todas las citas como doctor</h1>
      {appointments.map(appointment => (
        <div key={appointment.id}>
          <p>ID de la cita: {appointment.id}</p>
          <p>Hora: {appointment.time}</p>
          <p>Fecha: {appointment.date}</p>
          <p>Observaciones: {appointment.observations}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorAppointments;

  
/*
const DoctorAppointments = () => {
    const { credentials } = useSelector(userData());
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
    const fetchAppointments = async () => {
        try {
        const userAppointments = await fetchUserAppointments(credentials.token);
        setAppointments(userAppointments);
        } catch (error) {
        console.error('Error fetching appointments:', error);
        }
    };

    fetchAppointments();
    }, [credentials.token]);

    return (
    <>
        <h1>Todas las citas como dentista</h1>
        {appointments.map((appointment) => (
        <div key={appointment.id}>
            <p>ID de la cita: {appointment.id}</p>
            <p>Hora: {appointment.time}</p>
            <p>Fecha: {appointment.date}</p>
            <p>Observaciones: {appointment.observations}</p>
        </div>
        ))}
    </>
    );
};

export default DoctorAppointments;

*/