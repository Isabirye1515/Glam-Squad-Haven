import { Email, Home, LogoFacebook, LogoLinkedin, LogoTwitter, LogoYoutube, MessageQueue, Phone } from '@carbon/icons-react';
import { Column, Grid } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';
import faceBok from "./../assets/y.png"
import tiktok from "./../assets/z.png"
import insta from "./../assets/x.png"
import youtube from "./../assets/e.png"
import gmail from "./../assets/rk.png"

const Footer = () => {
    return (

        <div  className=' bg-dark text-success p-5 fw-light'>
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
                  <Email size={20} /><a   href=' https://mail.google.com/mail/u/2/#inbox?compose=CllgCJTLphkdHDGdQdvsjDMrtjlFClvFQjsrXnDdktHWJwHGpVnDDvfxCbBKDgtPJGvTvtFSmPg' target='_blank' rel='noopener norefferer'>glansquadhaven@gmail.com</a><br/>
                  <Phone size={20} /> <a href='tel:+256-757985988' >+256-757985988</a><br/>
                </div  >
                <div className='mt-4' >
                    <a className='m-2' href='https://www.facebook.com/profile.php?id=61569955415896&name=xhp_nt__fb__action__open_user&__n=K' target='_blank' rel='noopener norefferer'><img src={faceBok} height={40} width={40} alt="facebook" /></a>
                    <a className='m-2' href='https://m.youtube.com/@GlamSquadHaven' target='_blank' rel='noopener norefferer'><img src={youtube} height={40} width={40} alt="youtube" /></a>
                    <a className='m-2' href='https://www.instagram.com/glam_squad_haven/' target='_blank' rel='noopener norefferer'><img src={insta} height={40} width={40} alt="instagram" /></a>
                    <a  className='m-2' href='https://vm.tiktok.com/ZMkRdCYns/' target='_blank' rel='noopener norefferer'><img src={tiktok} height={40} width={40} alt="tiktok" /></a>
                    <a  className='m-2' href=' https://mail.google.com/mail/u/2/#inbox?compose=CllgCJTLphkdHDGdQdvsjDMrtjlFClvFQjsrXnDdktHWJwHGpVnDDvfxCbBKDgtPJGvTvtFSmPg' target='_blank' rel='noopener norefferer'><img src={gmail} height={40} width={40} alt="gmail" /></a>
                    
                
                
    
                </div>
                </Column>
            </Grid>
            
        </div>
    );
}

export default Footer;
