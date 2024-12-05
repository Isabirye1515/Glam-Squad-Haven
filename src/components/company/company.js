import { Button, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
  
        <div className='menu1 m-0' >
              
            <Link  to="/" >
            <Tag type="blue" size="sm" >Home</Tag>
            </Link>
            <Link  to="/services"   >
            <Tag type="blue" size="sm"  >Services</Tag>
            </Link>
        
            <Link   to="news" >
            <Tag type="blue" size="sm"  >About Us</Tag>
            </Link>
            <Link   to="contact" >
            <Tag type="blue" size="sm"  >Contact</Tag>
            </Link>
           
            
        </div>
    
    );
}

export default Company;
