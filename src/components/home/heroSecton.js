import { Column, Grid } from '@carbon/react';
import React from 'react';
import image1 from "./../../assets/pa.jpg";
import image2 from "./../../assets/zf.jpg";
import image3 from "./../../assets/zi.jpg";
import image4 from "./../../assets/zz.jpg";


const HeroSecton = () => {
    const info = [
        { id: 1, image: image1, info: "Radiate confidence with our professional makeup and veiling services" },
        { id: 2, image: image2, info: "Pamper yourself with our luxurious manicure and pedicure treatments" },
        { id: 3, image: image3, info: "Glow from within with our rejuvenating facial treatments" },
        { id: 4, image: image4, info: "Relax, unwind, and recharge with our soothing massage and spa services" },
    ];
    return (
        <div className='section p-3' >
            <div className='fw-light p-3 m-4' >
                    <h2>Savor the Flavors of Our Bistro</h2>
                   <p> Delight in Every Bite, Every Moment</p>
                </div>
              {/* Info Section */}
              <Grid className='hello2  p-4' >
                
                {info.map((item) => (
                    <Column key={item.id} lg={4} md={4} sm={4} className="info-card">
                        <center>
                        <div className='rounded text-info  m-2 ' >
                            <h3 className='fw-lighter m-3 '  >0{item.id}</h3>
                            <img src={item.image} height="20%" width="80%" alt={item.info}  className='image2' />
                            <p className='fw-bolder m-4 p-4' >{item.info}</p>
                        </div>
                        </center>
                    </Column>
                ))}
            </Grid>
        </div>
    );
}

export default HeroSecton;
