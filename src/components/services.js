import { Column, Grid } from '@carbon/react';
import React from 'react';
import imagesA from "./../assets/lk.jpg";
import imagesB from "./../assets/pa.jpg";
import imagesC from "./../assets/zg.jpg";
import imagesD from "./../assets/zb.jpg";
import imagesE from "./../assets/za.jpg";
import imagesF from "./../assets/lj.jpg";
const Services = () => {
const items = [
    {id:1,title:"Hair Dressing",desc:"Transform your look with our expert hairdressing services! Whether it's a trendy cut, a vibrant new color, or a flawless style for a special occasion, we are here to bring your vision to life. Your hair deserves the best care and attention, and that's exactly what we deliver",image:imagesA},
    {id:2,title:"Makeup and Veiling",desc:"Radiate confidence with our professional makeup and veiling services. Perfect for weddings, parties, or any special event, we tailor every look to enhance your natural beauty. Let us make you feel elegant, stunning, and camera-ready for your big day or celebration.",image:imagesB},
    {id:3,title:"Manicure and Pedicure",desc:"Pamper yourself with our luxurious manicure and pedicure treatments. From classic nail care to intricate nail art, we ensure your hands and feet look and feel their best. Indulge in a relaxing experience that leaves you refreshed and polished to perfection.",image:imagesC},
    {id:4,title:"Facial Treatment",desc:"Glow from within with our rejuvenating facial treatments. Designed for all skin types, our services help combat acne, fine lines, and dullness, leaving your skin radiant and refreshed. Experience the ultimate in personalized skincare and self-care.",image:imagesD},
    {id:5,title:"Massage And Spa",desc:"Relax, unwind, and recharge with our soothing massage and spa services. From stress-relieving aromatherapy to deep tissue massages that target tension, we provide the perfect escape for your body and mind. Treat yourself—you deserve it!",image:imagesE},
    {id:5,title:"Skin Care Products",desc:"Nourish your skin with our premium skincare products. Carefully selected to suit every skin type, our products deliver hydration, protection, and a youthful glow. Elevate your skincare routine with solutions that truly work.",image:imagesF}

]
    return (
        <div className='mb-5 p-2' >
           <Grid>
            
            {items.map((item)=>(
                <Column key={item.id} lg={5} md={4} sm={4}  className='m-2 rounded bg-white p-0' >
                    <img src={item.image}  height="70%" width="100%" alt={item.image} className='images2' />
                    <h2>{item.title}</h2>
                   <b> <p className='desc m-2  text-dark ' >{item.desc}</p></b>
                </Column>
            ))}
            </Grid> 
        </div>
    );
}

export default Services;
