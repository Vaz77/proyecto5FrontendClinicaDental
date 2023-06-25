import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3></h3>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
        />
        <Carousel.Caption>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3></h3>
            <p>
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default ControlledCarousel;