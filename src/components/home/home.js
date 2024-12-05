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
           
        
            {/* Welcome Section */}
            <Grid className='hello  '>
                <Column  lg={16} md={8} sm={4}  className='m-1 ' >
                <h1 className='m-3' > The Glam squad haven </h1>
                <p>
                To become the ultimate beauty and wellness destination, renowned for our exceptional services, talented team, and commitment to empowering our clients to live their best lives
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
