import React from 'react';
import './HomePage.css';
import CardItem from '../../common/CardItem/CardItem';
import cardImage from '../../assets/Ortodoncia.jpg';
import cardImage2 from '../../assets/implanteDental.png';
import cardImage3 from '../../assets/periodontitis.jpg';
import ControlledCarousel from '../../common/ControlledCarousel/ControlledCarousel';

const HomePage = () => {
    return (
        <div className='general'>
        <h1 className="encabezado">Bienvenidos a nuestra clínica dental</h1>
        <div className='imagenPrincipal'>
        <ControlledCarousel />
        </div>
        <div className='card-container'>
        <CardItem
            title="Ortodoncia"
            imageSrc={cardImage}
            description="This is the description for card 1"
            updateAt="3 mins ago"
            className="card-item"
        />
        <CardItem
            title="Implante"
            imageSrc={cardImage2}
            description="This is the description for card 2"
            updateAt="3 mins ago"
            className="card-item"
        />
        <CardItem
            title="Periodontitis"
            imageSrc={cardImage3}
            description="This is the description for card 3"
            updateAt="3 mins ago"
            className="card-item"
        />
        </div>
        </div>
    );
    };

export default HomePage;
