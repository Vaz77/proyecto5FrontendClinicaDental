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
    { image: tratamiento1, name: 'Ortodoncia: Mejora tu sonrisa con nuestro tratamiento de ortodoncia. Nuestros especialistas te brindarán atención personalizada para corregir la alineación de tus dientes y obtener una sonrisa perfecta. No ignores los problemas de maloclusión, ya que pueden afectar tu salud dental y autoestima. ¡Agenda tu consulta hoy y descubre el poder de una sonrisa alineada y radiante!' },
    { image: tratamiento2, name: 'Implante: Sonríe con confianza y recupera la funcionalidad de tus dientes con implantes dentales de alta calidad. Olvídate de las molestias y disfruta de una sonrisa natural y duradera. ¡Visítanos y descubre cómo los implantes pueden transformar tu vida!' },
    { image: tratamiento3, name: 'Estética: Descubre la belleza de tu sonrisa con nuestros tratamientos de estética dental. Mejora el color, la forma y el tamaño de tus dientes para lograr una sonrisa radiante. Nuestro equipo de especialistas te brindará la atención personalizada que mereces. ¡Ven y transforma tu sonrisa hoy mismo!' },
    { image: tratamiento4, name: 'Odontopediatría: Nos preocupamos por la salud dental de los más pequeños. Nuestro equipo de odontopediatría está especializado en el cuidado dental infantil, brindando un ambiente cálido y amigable para que los niños se sientan cómodos. Garantizamos un enfoque suave y divertido para promover una buena salud bucal desde temprana edad. Confía en nosotros para el cuidado dental de tus hijos.' },
    { image: tratamiento5, name: 'Periodoncia: Nuestro equipo de especialistas en periodoncia ofrece tratamientos y cuidados personalizados para prevenir, diagnosticar y tratar enfermedades de las encías. Con un enfoque en la salud periodontal, podemos ayudarte a mantener tus encías en óptimas condiciones y prevenir complicaciones a largo plazo. Cuida de tus encías y disfruta de una sonrisa radiante y saludable.' },
    { image: tratamiento6, name: 'Endodoncia: Mediante este procedimiento, se elimina la pulpa dental afectada y se limpia el conducto radicular, para luego sellarlo y protegerlo. Al someterte a una endodoncia, puedes evitar la extracción dental y conservar tu sonrisa natural.' },
    { image: tratamiento7, name: 'Prótesis: Sonríe sin preocupaciones con nuestras prótesis dentales. Diseñadas a medida, brindan comodidad y funcionalidad. Recupera la confianza en tu sonrisa, mejora la masticación y la dicción. Confía en nuestra calidad y durabilidad para una sonrisa completa y hermosa.' },
    { image: tratamiento8, name: 'Cirugía Oral: Nuestros procedimientos quirúrgicos abordan desde extracciones dentales hasta implantes óseos. Recupera la funcionalidad y estética de tu sonrisa de manera segura y efectiva. Nuestro equipo altamente capacitado y tecnología avanzada garantizan resultados exitosos.' },
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
