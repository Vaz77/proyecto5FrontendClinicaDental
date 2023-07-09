import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './HomePage.css';
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
import reseña from '../../assets/reseñaGoogle3.jpg'
import reseña2 from '../../assets/reseñaGoogle4.png'
import reseña3 from '../../assets/reseñaGoogle7.jpg'

const HomePage = () => {

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const elements = document.querySelectorAll('.fadeIn');
        elements.forEach((element) => {
            const elementPosition = element.offsetTop;
        
            if (scrollPosition > elementPosition - windowHeight + 100) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
            });
        };
        useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);
    return (
        <div className='generalHome'>
        <h1 className="encabezado">Bienvenidos a DentaLife</h1>
        <div className='imagenPrincipal'>
        <ControlledCarousel />
        </div>
        <div className='infoHome fadeIn'>
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
                    <NavLink as={NavLink} to='/citasOnline' exact="true" className="citasOnline"> <h3>Pedir Cita Online</h3> </NavLink>
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
        <div className='general2 fadeIn'>
            <h2 className='textoTratamientos'>Tratamientos</h2>
            <div className='infoTratamientos'>
            <Row>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage3} alt="Imagen 1" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="ortodoncia"> <h3>Ortodoncia</h3> </NavLink>
                        <h6>Sonrisa perfecta y salud dental. Corrige problemas y mejora tu bienestar bucal</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage2} alt="Imagen 2" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="implante"> <h3>Implantologia</h3> </NavLink>
                        <h6>Recupera tu sonrisa y función dental perdida. Una solución segura y duradera recomendada para restaurar tu bienestar oral</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="estetica"> <h3>Estetica dental</h3> </NavLink>
                        <h6>Sonrisa radiante y confianza renovada. Mejora tu apariencia dental y resalta tu belleza natural. ¡Recomendado para lucir tu mejor versión!</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage5} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="pediatria"> <h3>Odontopediatría</h3> </NavLink>
                        <h6> Sonrisas saludables desde temprana edad. Brinda a tus hijos una atención dental especializada y divertida. ¡Recomendado para un crecimiento bucal sano y feliz!</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage4} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="periodoncia"> <h3>Periodoncia</h3> </NavLink>
                        <h6>Cuida tus encías y conserva tus dientes. Tratamiento recomendado para prevenir y tratar enfermedades periodontales, garantizando una salud bucal óptima</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage6} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="endodoncia"> <h3>Endodoncia</h3> </NavLink>
                        <h6>Salva tus dientes y alivia el dolor. Tratamiento recomendado para tratar infecciones en la raíz dental y preservar tu sonrisa de forma segura y efectiva.</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage7} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="protesis"> <h3>Prótesis dental</h3> </NavLink>
                        <h6>Sonríe sin preocupaciones. Solución recomendada para reemplazar dientes perdidos y restaurar tu función masticatoria y estética dental. Recupera tu sonrisa completa y disfruta de una mejor calidad de vida</h6>
                    </div>
                </Col>
                <Col md={4} className='info-columnTratamientos'>
                    <img className='info-imageTratamientos' src={cardImage8} alt="Imagen 3" />
                    <div className='info-textTratamientos'>
                    <NavLink as={NavLink} to='/servicios' exact="true" className="cirugia"> <h3>Cirugía Oral</h3> </NavLink>
                        <h6>Solución precisa y efectiva. Recomendada para tratar problemas complejos en la boca, como extracciones de muelas del juicio, colocación de implantes y correcciones quirúrgicas. Confía en la cirugía oral para mejorar tu salud bucal de manera segura y satisfactoria.</h6>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
        <div className='general3 fadeIn'>
        <h2 className='textoOpiniones'>Opiniones</h2>
        <div className='infoGeneral3 fadeIn'>
            <Row>
                <Col md={5} className='info-column3'>
                    <img className='info-image3' src={reseña} alt="" />
                </Col>
                <Col md={5} className='info-column3'>
                    <img className='info-image3' src={reseña2} alt="" />
                </Col>
                <Col md={5} className='info-column3'>
                    <img className='info-image3' src={reseña3} alt="" />
                </Col>
            </Row>
        </div>
        </div>
        </div>
    );
    };

export default HomePage;
