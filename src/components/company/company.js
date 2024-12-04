import { Button } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
    
        <div className='m-4 p-3  shadow ' >
            <a href="http://localhost:3000/services"   >
            <Button>Services</Button>
            </a><br/><br />
            <a href="http://localhost:3000/shop" >
            <Button>Shop</Button>
            </a><br/><br />
            <a href="http://localhost:3000/success" >
            <Button>Success</Button>
            </a><br/><br />
            <a href="http://localhost:3000/contact" >
            <Button>Contact</Button>
            </a><br/><br />
            <a href="http://localhost:3000/appointments" >
            <Button>Appointments</Button>
            </a><br/><br />
            <a href="http://localhost:3000/about" >
            <Button>About Us</Button>
            </a><br/><br />
            <a href="http://localhost:3000/new" >
            <Button>News</Button>
            </a><br/><br />
            <a href="http://localhost:3000/company" >
            <Button>Company</Button>
            </a><br/><br />
            <a href="http://localhost:3000/" >
            <Button>Home</Button>
            </a>
        </div>
    
    );
}

export default Company;
