import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
        <div className='p-5 m-4' >
            <Link to="services"   >
            Services
            </Link><br/><br />
            <Link to="shop" >
            Shop
            </Link><br/><br />
            <Link to="success" >
            Success
            </Link><br/><br />
            <Link to="contact" >
            Contact
            </Link><br/><br />
            <Link to="appointment" >
            Appointments
            </Link><br/><br />
            <Link to="about" >
            About Us
            </Link>
            <Link to="new" >
            News
            </Link><br/><br />
            <Link to="company" >
            Company
            </Link><br/><br />
            <Link to="/" >
            Home
            </Link>
        </div>
    );
}

export default Company;
