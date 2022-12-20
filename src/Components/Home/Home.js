import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import './Home.css';
import Services from '../Services/Services';
import UseServices from '../../hooks/UseServices';

const Home = () => {

    return (
        <div className='container'>
            <div className='slides'>
                <Carousel >
                    <Carousel.Item >
                        <img
                            className=" "
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" "
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=""
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='services'>
                <h3>ENGLISH EXTENSIVE COURSES</h3>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;