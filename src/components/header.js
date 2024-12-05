import React, { useState } from 'react';
import logo from "../assets/IMG-20241201-WA0022.jpg"
import { Column, Grid, Search } from '@carbon/react';
import { Home, Menu, ShoppingCart } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import Company from './company/company';
import Manual from './company/menu';
const Header = () => {
    const [menu,setMenu] = useState(false);
    const handleMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <div>
        
        <Grid  className='header p-2 bg-dark text-info' >

            <Column lg={1} sm={1} md={1}  >
            <img   src={logo}  width={60} height={60} alt='logo' />
            </Column>
            <Column lg={13} md={6} sm={2}>
            <h1 className='fw-bolder' >
                Glam Squad Haven
            </h1>
            <p>where beauty meets expertise </p>
           
            </Column>
            
            <div className='shop'  >
                <div>
                    <Link to="/shop">
                <ShoppingCart class="btn btn-sm btn-outline-secondary m-1"   size={30} />
                </Link>
                </div>
                <div>
                
                <Menu class="btn btn-sm btn-outline-secondary m-1"  onClick={handleMenu} size={30} />
                </div>
            </div>
            
            
       
        </Grid>
        {menu && (
                
    
                    <center> <Manual /></center>
           
            
        )}
        </div>
    );
}

export default Header;
