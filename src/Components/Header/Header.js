import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/teachers'>Teachers</Link>
                <Link to='/about'>About Us</Link>
            </nav>
            <h2>Nurul Language School</h2>
        </div>







    );
};

export default Header;