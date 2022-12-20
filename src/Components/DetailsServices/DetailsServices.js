import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './DetailsServices.css'

const DetailsServices = (props) => {
    const { name, price, duration, img } = props.service;
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Price:${price}</p>
                        <p>Duration:{duration}</p>

                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>


        </div>
    );
};

export default DetailsServices;