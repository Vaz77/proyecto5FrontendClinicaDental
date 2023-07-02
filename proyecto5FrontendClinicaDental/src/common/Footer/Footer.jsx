import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
        <Navbar.Toggle aria-controls="footer-nav" />
        <Navbar.Collapse id="footer-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">Enlace 1</Nav.Link>
            <Nav.Link href="#">Enlace 2</Nav.Link>
            <Nav.Link href="#">Enlace 3</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#">Otro enlace</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer