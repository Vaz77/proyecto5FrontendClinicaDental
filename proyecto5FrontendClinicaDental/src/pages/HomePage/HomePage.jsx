import '../HomePage/HomePage.css';
import React from 'react';
import Navbar from '../../common/Navbar/Navbar';

const HomePage = () => {
    return ( 
        <div className='general'>
        <Navbar />
        <h1 className="encabezado">Bienvenidos a nuestra clínica dental</h1>
        </div>
    )
}

export default HomePage;