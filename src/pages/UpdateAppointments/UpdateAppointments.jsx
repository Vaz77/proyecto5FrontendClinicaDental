import React, { useState, useEffect } from 'react';
import { fetchUserAppointments, updateAppointment } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';
import './UpdateAppointments.css'

function UpdateAppointments() {
  const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modifiedAppointment, setModifiedAppointment] = useState({
    id: '',
    time: '',
    date: '',
    observations: '',
  });
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  useEffect(() => {
    const getUserAppointments = async () => {
      try {
        const fetchedAppointments = await fetchUserAppointments(credentials.token);
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error('Error fetching user appointments:', error);
      }
    };
    getUserAppointments();
  }, []);
  useEffect(() => {
    if (searchDate.trim() !== '') {
      const filteredAppointments = appointments.filter(
        (appointment) => appointment.date === searchDate
      );
      setFilteredAppointments(filteredAppointments);
    } else {
      setFilteredAppointments(appointments);
    }
  }, [searchDate, appointments]);
  const handleModifyAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
    setModifiedAppointment({
      id: appointment.id,
      time: appointment.time,
      date: appointment.date,
      observations: appointment.observations,
    });
  };
  const handleSaveChanges = async () => {
    try {
      await updateAppointment(credentials.token, modifiedAppointment);
      setShowModal(false);
      const updatedAppointments = await fetchUserAppointments(credentials.token);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };
  return (
    <div className='generalHome'>
      <div>
      <h2 className='misCitas'>Mis citas</h2>
      <div className='generalUpdate'>
        <Form.Group controlId="searchDate">
          <Form.Label className='filtroBusqueda'>Buscar cita por fecha</Form.Label>
          <Form.Control
            type="text"
            className='inputDate'
            value={searchDate}
            placeholder='Introducir fecha xx/xx/xxxx'
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </Form.Group>
      </div>
      </div>
      {filteredAppointments.length ? (
  <Row>
    {filteredAppointments.map((appointment) => {
      return (
        <Col key={appointment.id} md={5}className='appointmentsUser'>
          <p>ID de la cita: {appointment.id}</p>
          <p>Hora: {appointment.time}</p>
          <p>Fecha: {appointment.date}</p>
          <p>Observaciones: {appointment.observations}</p>
          <Button
            variant="primary"
            className="botonUpdate"
            onClick={() => handleModifyAppointment(appointment)}
          >
            Modificar Cita
          </Button>
          <hr />
        </Col>
      );
    })}
  </Row>
) : (
  <p className="loadingAppointments">No hay citas disponibles para la fecha seleccionada.</p>
)}
        <Modal show={showModal} onHide={() =>       setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modificar Cita</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formAppointmentId">
                <Form.Label>ID de la cita</Form.Label>
                <Form.Control
                  type="text"
                  value={modifiedAppointment.id}
                readOnly
                />
              </Form.Group>
              <Form.Group controlId="formAppointmentTime">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="text"
                  value={modifiedAppointment.time}
                  onChange={(e) =>
                    setModifiedAppointment({
                      ...modifiedAppointment,
                      time: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formAppointmentDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  value={modifiedAppointment.date}
                  onChange={(e) =>
                    setModifiedAppointment({
                      ...modifiedAppointment,
                      date: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formAppointmentObservations">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={modifiedAppointment.observations}
                  onChange={(e) =>
                    setModifiedAppointment({
                      ...modifiedAppointment,
                      observations: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}
export default UpdateAppointments;



