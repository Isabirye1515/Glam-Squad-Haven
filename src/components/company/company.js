import { Button, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
  
        <div className='menu1' >
              
            <Link  to="/" >
            <Tag>Home</Tag>
            </Link>
            <Link  to="/services"   >
            <Tag>Services</Tag>
            </Link>
            
            <Link   to="appointment" >
            <Tag>Appointments</Tag>
            </Link><br/>
            <Link   to="news" >
            <Tag>About Us</Tag>
            </Link>
            <Link   to="contact" >
            <Tag>Contact</Tag>
            </Link>
           
            
        </div>
    
    );
}

export default Company;
