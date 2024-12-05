import { Button, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
  
        <div className='menu1' >
              
            <Link className='m-2' to="/" >
            <Tag class="btn btn-outline-success"  type="blue"  >Home</Tag>
            </Link>
            <Link className='m-2'  to="/services"   >
            <Tag class="btn btn-outline-success"  type="blue"   >Services</Tag>
            </Link>
        
            <Link  className='m-2' to="news" >
            <Tag class="btn btn-outline-success"   type="blue"   >About Us</Tag>
            </Link>
            <Link  className='m-2' to="contact" >
            <Tag class="btn btn-outline-success"   type="blue"  >Contact</Tag>
            </Link>
           
            
        </div>
    
    );
}

export default Company;
