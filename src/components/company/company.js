import { Button, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
  
        <div className='menu1' >
              
            <Link  to="/" >
            <Tag class="btn btn-outline-success m-1"  type="blue"  >Home</Tag>
            </Link>
            <Link   to="/services"   >
            <Tag class="btn btn-outline-success m-1"  type="blue"   >Services</Tag>
            </Link>
        
            <Link   to="news" >
            <Tag class="btn btn-outline-success m-1 "   type="blue"   >About Us</Tag>
            </Link>
            <Link   to="contact" >
            <Tag class="btn btn-outline-success m-1"   type="blue"  >Contact</Tag>
            </Link>
           
            
        </div>
    
    );
}

export default Company;
