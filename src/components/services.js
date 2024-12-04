import { Column, Grid } from '@carbon/react';
import React from 'react';
import imagesA from "./../assets/ab.jpg";
import imagesB from "./../assets/ac.jpg";
import imagesC from "./../assets/ad.jpg";
const Services = () => {
const items = [
    {id:1,title:"Feature One",desc:"Customize these three columns to highlight your top services. To duplicate, delete, or move columns, select the column and use the top icons to perform your action.",image:imagesA},
    {id:2,title:"Skincare Treatments",desc:"To add a fourth column, reduce the size of these three columns using the right icon of each block. Then, duplicate one of the columns to create a new one as a copy.",image:imagesB},
    {id:3,title:"Feature Three",desc:"Delete the above image or replace it with a picture that illustrates your message. Click on the picture to change its rounded corner style.",image:imagesC}
]
    return (
        <div className='container mb-4' >
           <Grid>
            
            {items.map((item)=>(
                <Column key={item.id} lg={5} md={4} sm={4}  className='m-2 rounded bg-white p-0' >
                    <img src={item.image}  height="70%" width="100%" alt={item.image} className='images2' />
                    <h2>{item.title}</h2>
                    <p className='m-2' >{item.desc}</p>
                </Column>
            ))}
            </Grid> 
        </div>
    );
}

export default Services;
