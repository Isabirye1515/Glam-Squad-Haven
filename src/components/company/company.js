import { Button, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
  
        <div className='menu1 m-0' >
              
            <Link className='m-2' to="/" >
            <Tag type="blue" size="sm" >Home</Tag>
            </Link>
            <Link className='m-2'  to="/services"   >
            <Tag type="blue" size="sm"  >Services</Tag>
            </Link>
        
            <Link  className='m-2' to="news" >
            <Tag type="blue" size="sm"  >About Us</Tag>
            </Link>
            <Link  className='m-2' to="contact" >
            <Tag type="blue" size="sm"  >Contact</Tag>
            </Link>
           
            
        </div>
    
    );
}

export default Company;
