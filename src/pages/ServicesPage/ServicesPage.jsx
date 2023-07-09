import React from 'react';
import { Row, Col } from 'react-bootstrap';
import tratamiento1 from '../../assets/ortodoncia.jpeg';
import tratamiento2 from '../../assets/implante.jpeg';
import tratamiento3 from '../../assets/estetica.jpeg';
import tratamiento4 from '../../assets/odontopediatria.jpeg';
import tratamiento5 from '../../assets/periodoncia.jpeg';
import tratamiento6 from '../../assets/endodoncia.jpeg';
import tratamiento7 from '../../assets/protesis.jpeg';
import tratamiento8 from '../../assets/cirugia.jpeg';
import './ServicesPage.css';

const ServicesPage = () => {
  const treatments = [
    { image: tratamiento1, name: 'Ortodoncia' },
    { image: tratamiento2, name: 'Implante' },
    { image: tratamiento3, name: 'Estética' },
    { image: tratamiento4, name: 'Odontopediatría' },
    { image: tratamiento5, name: 'Periodoncia' },
    { image: tratamiento6, name: 'Endodoncia' },
    { image: tratamiento7, name: 'Prótesis' },
    { image: tratamiento8, name: 'Cirugía Oral' },
  ];

  return (
    <div className="generalHome">
      <h1 className="textoServicios">Tratamientos</h1>
      <Row className="treatment-row">
        {treatments.map((treatment, index) => (
          <Col md={3} key={index} className="treatment-column">
            <img src={treatment.image} alt={treatment.name} className="treatment-image" />
            <h3 className="treatment-name">{treatment.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesPage;
