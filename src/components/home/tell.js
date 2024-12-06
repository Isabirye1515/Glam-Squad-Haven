import React from 'react';
import { Column, Grid } from '@carbon/react';

const Tell = () => {
    const beautyServices = [
        {
            category: "Hair Care",
            items: [
                { 
                    name: "Hair Dressing", 
                    price: "$50", 
                    description: "Expert styling and cutting tailored to suit your unique style and personality." 
                },
                { 
                    name: "Hair Treatments", 
                    price: "$70", 
                    description: "Rejuvenating treatments to restore shine and health to your hair, leaving it smooth and silky." 
                },
                { 
                    name: "Hair Coloring", 
                    price: "$90", 
                    description: "Professional coloring services using high-quality products for vibrant, long-lasting results." 
                },
            ],
        },
        {
            category: "Skin Care",
            items: [
                { 
                    name: "Facial Treatments", 
                    price: "$60", 
                    description: "Revitalizing facials designed to cleanse, exfoliate, and rejuvenate your skin." 
                },
                { 
                    name: "Massage and Spa", 
                    price: "$80", 
                    description: "Relaxing massages and spa therapies to ease tension and promote overall well-being." 
                },
                { 
                    name: "Skin Care Products", 
                    price: "Varies", 
                    description: "A curated selection of premium skincare products tailored to your skin's needs." 
                },
            ],
        },
        {
            category: "Beauty Enhance.",
            items: [
                { 
                    name: "Makeup and Veiling", 
                    price: "$100", 
                    description: "Flawless makeup application and elegant veiling for any special occasion." 
                },
                { 
                    name: "Manicure and Pedicure", 
                    price: "$40", 
                    description: "Pampering services to keep your nails perfectly shaped and polished." 
                },
            ],
        },
    ];
    

    return (
        <div>
            <center>
            <Grid className=" p-3">
                {beautyServices.map((drink, index) => (
                    <Column lg={5} md={3} sm={4} key={index}>
                        <div className={`${index % 2 === 0 ? 'bg-dark text-info ml-4 p-5' : 'bg-white text-info mr-4'} p-4`}>
                            <h1>{drink.category}</h1>
                            {drink.items.map((item, i) => (
                                <div key={i} className="mb-4 m-2">
                                    <h5>{item.name}</h5>
                                    <p>{item.price}</p>
                                    <p className='mb-2' >{item.description}</p>
                                </div>
                            ))}
                        </div><br/>
                    </Column>
                ))}
            </Grid>
            </center>
        </div>
    );
};

export default Tell;
