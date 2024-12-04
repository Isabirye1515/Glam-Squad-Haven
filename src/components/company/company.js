import { Button } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
    
        <div className='m-4 p-3  shadow ' >
            <a href="https://gram-squad-haven.vercel.app/services"   >
            <Button>Services</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/shop" >
            <Button>Shop</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/success" >
            <Button>Success</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/contact" >
            <Button>Contact</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/appointments" >
            <Button>Appointments</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/about" >
            <Button>About Us</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/new" >
            <Button>News</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/company" >
            <Button>Company</Button>
            </a><br/><br />
            <a href="https://gram-squad-haven.vercel.app/" >
            <Button>Home</Button>
            </a>
        </div>
    
    );
}

export default Company;
