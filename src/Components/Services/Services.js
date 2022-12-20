import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import UseServices from '../../hooks/UseServices';
import DetailsServices from '../DetailsServices/DetailsServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = UseServices();
    return (
        <div className='service'>
            {
                services.map(service => <DetailsServices service={service}></DetailsServices>)
            }
        </div>
    );
};

export default Services;