import { Button, Column, Grid, Tag } from '@carbon/react';
import React from 'react';
import HeroSecton from './heroSecton';
import Tell from './tell';
import Inform from './inform';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div >
            <div   className='home-up p-5 '>
        
            </div>
            <div   className='hero'><HeroSecton /></div>
            <div><Tell /></div>
            <div> <Inform /></div>

            
         
        </div>
    );
};

export default Home;
