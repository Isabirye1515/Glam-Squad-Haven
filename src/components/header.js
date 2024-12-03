import React from 'react';
import logo from "../assets/IMG-20241201-WA0022.jpg"
import { Column, Grid } from '@carbon/react';
import { Home, Menu, ShoppingCart } from '@carbon/icons-react';
const Header = () => {
    return (
        <div>
        
        <Grid  className='container'  >

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
                <ShoppingCart  size={30} />
                </div>
                <div>
                <Menu  size={30} />
                </div>
            </div>
           
            


        </Grid>
        </div>
    );
}

export default Header;
