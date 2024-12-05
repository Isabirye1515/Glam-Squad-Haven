import { Email, Home, LogoFacebook, LogoLinkedin, LogoTwitter, LogoYoutube, MessageQueue, Phone } from '@carbon/icons-react';
import { Column, Grid } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div  className=' bg-dark text-success p-4 fw-light'>
            <Grid>
                <Column  lg={5} md={2} sm={4}  >
                <div className='mb-4' >
               <h2 className='text-white' > Useful Links</h2>
               <Link to="services"  >
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
           
            <Link to="news" >
            News
            </Link><br/><br />
           
            <Link to="/" >
            Home
            </Link>
                </div>

                </Column>
                <Column  lg={5} md={2} sm={4}  >
                <div className='text-white mb-4' >
                <h1   >About us</h1>
We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.

Our products are designed for small to medium size companies willing to optimize their performance.
                </div>
                </Column>
                <Column  lg={5} md={2} sm={4} >
                <div className='text-info' >
                    <h2 className='text-white'>Connect with us</h2>
                  <MessageQueue size={20}   />  Contact us <br/>
                    <Email size={20} /> info@yourcompany.example.com<br/>
                    <Phone size={20} />  +1 555-555-5556<br/>
                </div  >
                <div className='mt-4' >
                <LogoFacebook size={50}/>
                <LogoYoutube   size={50}/>
                <LogoTwitter size={50}/>
                <LogoLinkedin size={50}/>
                <Home size={50}/>
                </div>
                </Column>
            </Grid>
            
        </div>
    );
}

export default Footer;
