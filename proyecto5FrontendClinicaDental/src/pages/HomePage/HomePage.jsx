import '../HomePage/HomePage.css';
import React from 'react';
import Navbar from '../../common/Navbar/Navbar';

const HomePage = () => {
    return ( 
    <div>
        <Navbar />
        <div className='general'>
        <h1 className="encabezado">Bienvenidos a nuestra clínica dental</h1>
        </div>
    </div>
    )
}

export default HomePage;