import React from "react";
import Card from 'react-bootstrap/Card';

const CardItem = ({ title, imageSrc, description, updateAt }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {updateAt}</small>
            </Card.Footer>
        </Card>
    )
}


export default CardItem;