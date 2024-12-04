import { Button, Column, Grid, Tag } from '@carbon/react';
import React from 'react';
import HeroSecton from './heroSecton';
import Tell from './tell';
import Inform from './inform';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div >
            <div   className='home-up p-5 mb-0'>
        
            {/* Navigation Buttons */}
            <Grid>
                
                <Column lg={16} md={8} sm={4} className='shop'>
                <Link to="/">
                    <Tag className="p-2 m-2" >Home</Tag>
                    </Link>
                    <Tag className="p-2 m-2 " >Services</Tag>
                    < Tag className="p-2 m-2 " >Shop</Tag>
                    <Link to="/company">
                    <Tag className="p-2 m-2 " >Company</Tag>
                    </Link>
                    <Tag className="p-2 m-2 " >Contact</Tag> 
                </Column>
                
            </Grid>
        
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
            </div>
            <div><HeroSecton /></div>
            <div><Tell /></div>
            <div> <Inform /></div>

            
         
        </div>
    );
};

export default Home;
