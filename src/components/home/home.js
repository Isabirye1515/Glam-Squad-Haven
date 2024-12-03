import { Button, Column, Grid, Tag } from '@carbon/react';
import React from 'react';
import HeroSecton from './heroSecton';
import Tell from './tell';
import Inform from './inform';


const Home = () => {
    return (
        <div className='home-up '>
            <center>
            {/* Navigation Buttons */}
            <Grid>
                
                <Column lg={16} md={8} sm={4} className='shop'>
                    <Tag  >Home</Tag>
                    <Tag>Services</Tag>
                    < Tag>Shop</Tag>
                    <Tag>Company</Tag>
                    <Tag>Contact</Tag>
                </Column>
                
            </Grid>
            </center>
            {/* Welcome Section */}
            <Grid className='hello  '>
                <Column  lg={16} md={8} sm={4}  className='m-5' >
                <h1>A Deep Dive into Flavor and Innovation</h1>
                <p>
                    Transform your dining experience with our new menu, where classic dishes meet
                    modern creativity. Elevate your palate with flavors that blend tradition and
                    innovation seamlessly.
                </p>
                </Column>
                
            </Grid>
            <div><HeroSecton /></div>
            <div><Tell /></div>
            <div> <Inform /></div>

            
         
        </div>
    );
};

export default Home;
