import React from 'react';
import logo from "../assets/IMG-20241201-WA0022.jpg"
import { Column, Grid } from '@carbon/react';
import { Home, Menu, ShoppingCart } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
        
        <Grid  className='header p-2 bg-dark text-info' >

            <Column lg={1} sm={1} md={1}  >
            <img   src={logo}  width={60} height={60} alt='logo' />
            </Column>
            <Column lg={13} md={6} sm={2}>
            <h1 className='fw-bolder' >
                Gram Squad Haven
            </h1>
            </Column>
            
            <div className='shop'  >
                <div>
                    <Link to="/shop">
                <ShoppingCart  size={30} />
                </Link>
                </div>
                <div>
                <Link to="/company">
                <Menu  size={30} />
                </Link>
                </div>
            </div>
           
            


        </Grid>
        </div>
    );
}

export default Header;
