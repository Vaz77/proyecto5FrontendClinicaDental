import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
import CardItem from '../../common/CardItem/CardItem';
import cardImage from '../../assets/esteticaDental.png';
import cardImage2 from '../../assets/implantologia.png';
import cardImage3 from '../../assets/iconoOrtodoncia.png';
import cardImage4 from '../../assets/periodoncia.png';
import cardImage5 from '../../assets/odontopediatria.png';
import cardImage6 from '../../assets/endodoncia.png';
import cardImage7 from '../../assets/protesis.png';
import cardImage8 from '../../assets/cirugia.png';
import especialista from '../../assets/especialistas.jpg';
import primeraCita from '../../assets/primeraCita.jpg';
import financiacion from '../../assets/financiacion.jpg';
import ControlledCarousel from '../../common/ControlledCarousel/ControlledCarousel';



const HomePage = () => {
    return (
        <div className='general'>
        <h1 className="encabezado">Bienvenidos a nuestra clínica dental</h1>
        <div className='imagenPrincipal'>
        <ControlledCarousel />
        </div>
        <div className='infoHome'>
            <Row>
                <Col md={4} className='info-column'>
                    <img className='info-image' src={especialista} alt="Imagen 1" />
                    <div className='info-text'>
                        <h3>Doctores especializados</h3>
                        <p>Calidad y cuidado dental garantizados. Recomendamos acudir a especialistas que ofrecen servicios de alta calidad, respaldados por su dedicación y atención personalizada. Confía en su experiencia y compromiso para obtener el mejor cuidado dental. ¡Tu sonrisa está en buenas manos!</p>
                    </div>
                </Col>
                <Col md={4} className='info-column'>
                    <img className='info-image' src={primeraCita} alt="Imagen 2" />
                    <div className='info-text'>
                        <h3>Citas Online</h3>
                        <p>Comodidad y conveniencia en tu cuidado dental. Recomendamos aprovechar las citas virtuales para consultas y seguimiento, ahorrando tiempo y desplazamientos. Obtén atención personalizada desde la comodidad de tu hogar y mantén tu salud bucal al día. ¡Programa tu cita online hoy mismo!</p>
                    </div>
                </Col>
                <Col md={4} className='info-column'>
                    <img className='info-image' src={financiacion} alt="Imagen 3" />
                    <div className='info-text'>
                        <h3>Financiación a su medida</h3>
                        <p>Acceso a tratamientos dentales sin preocupaciones económicas. Aprovecha opciones flexibles de pago que se ajusten a tus necesidades, permitiéndote recibir el tratamiento que deseas sin comprometer tu presupuesto. ¡Obtén la sonrisa que mereces sin preocupaciones financieras!</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='general2'>
            <h2 className='textoTratamientos'>Tratamientos</h2>
            <div className='infoTratamientos'>
            <Row>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage3} alt="Imagen 1" />
                    <div className='info-textTratamientos'>
                    <Nav.Link as={NavLink} to='/servicios' exact> <h3>Ortodoncia</h3> </Nav.Link>
                        <p>Sonrisa perfecta y salud dental. Corrige problemas y mejora tu bienestar bucal</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage2} alt="Imagen 2" />
                    <div className='info-textTratamientos'>
                        <h3>Implantología</h3>
                        <p>Recupera tu sonrisa y función dental perdida. Una solución segura y duradera recomendada para restaurar tu bienestar oral</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Estetica dental</h3>
                        <p>Sonrisa radiante y confianza renovada. Mejora tu apariencia dental y resalta tu belleza natural. ¡Recomendado para lucir tu mejor versión!</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage5} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Odontopediatría</h3>
                        <p> Sonrisas saludables desde temprana edad. Brinda a tus hijos una atención dental especializada y divertida. ¡Recomendado para un crecimiento bucal sano y feliz!</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage4} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Periodoncia</h3>
                        <p>Cuida tus encías y conserva tus dientes. Tratamiento recomendado para prevenir y tratar enfermedades periodontales, garantizando una salud bucal óptima</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage6} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Endodoncia</h3>
                        <p>Salva tus dientes y alivia el dolor. Tratamiento recomendado para tratar infecciones en la raíz dental y preservar tu sonrisa de forma segura y efectiva.</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage7} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Prótesis dental</h3>
                        <p>Sonríe sin preocupaciones. Solución recomendada para reemplazar dientes perdidos y restaurar tu función masticatoria y estética dental. Recupera tu sonrisa completa y disfruta de una mejor calidad de vida</p>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage8} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                        <h3>Cirugia Oral</h3>
                        <p>Solución precisa y efectiva. Recomendada para tratar problemas complejos en la boca, como extracciones de muelas del juicio, colocación de implantes y correcciones quirúrgicas. Confía en la cirugía oral para mejorar tu salud bucal de manera segura y satisfactoria.</p>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
        </div>
    );
    };

export default HomePage;
