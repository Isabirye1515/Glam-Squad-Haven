import { Column, Grid } from '@carbon/react';
import React from 'react';
import image1 from "./../../assets/a.jpg";
import image2 from "./../../assets/c.jpg";
import image3 from "./../../assets/d.jpg";
import image4 from "./../../assets/e.jpg";


const HeroSecton = () => {
    const info = [
        { id: 1, image: image1, info: "Fresh ingredients, deliciously prepared" },
        { id: 2, image: image2, info: "A cozy ambiance for any occasion" },
        { id: 3, image: image3, info: "Gourmet dishes that will tempt your taste buds" },
        { id: 4, image: image4, info: "Experience our passion for great food and service" },
    ];
    return (
        <div>
              {/* Info Section */}
              <Grid className='hello2' >
                {info.map((item) => (
                    <Column key={item.id} lg={4} md={4} sm={2} className="info-card">
                        <center>
                        <div className='container rounded text-info bg-white m-2 ' >
                            <h3   >0{item.id}</h3>
                            <img src={item.image} height={150} width={150} alt={item.info} />
                            <p className='fw-bold' >{item.info}</p>
                        </div>
                        </center>
                    </Column>
                ))}
            </Grid>
        </div>
    );
}

export default HeroSecton;
