import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
        <nav aria-label="breadcrumb" >
            <ol className="breadcrumb  shadow rounded ">
            <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to="services">Services</Link>
                </li>
               
              
                <li className="breadcrumb-item">
                    <Link to="contact">Contact</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to="appointment">Appointments</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to="news">About Us</Link>
                </li>
               
               
                
                
               
            </ol>
        </nav>
    );
}

export default Company;
