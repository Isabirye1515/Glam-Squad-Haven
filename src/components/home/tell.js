import React from 'react';
import { Column, Grid } from '@carbon/react';

const Tell = () => {
    const drinks = [
        {
            category: "Coffees",
            items: [
                { name: "Coffee Latte", price: "$4.50", description: "Sleek, minimalist space offering meticulously brewed coffee and espresso drinks using freshly roasted beans." },
                { name: "Cappuccino", price: "$4.25", description: "A vibrant spot known for its expertly crafted coffee, sourced directly from farmers and roasted to perfection." },
                { name: "Espresso", price: "$4.10", description: "Artisanal espresso with a focus on direct trade and exceptional quality in a chic, comfortable setting." },
            ],
        },
        {
            category: "Teas",
            items: [
                { name: "Earl Grey", price: "$3.50", description: "A classic black tea blend infused with the aromatic essence of bergamot, offering a fragrant, citrusy flavor." },
                { name: "Jasmine Green Tea", price: "$3.00", description: "Delicate green tea scented with jasmine blossoms, providing a soothing and floral experience." },
                { name: "Chamomile Tea", price: "$4.00", description: "Herbal tea made from dried chamomile flowers, known for its calming properties and gentle, apple-like flavor." },
            ],
        },
    ];

    return (
        <div>
            <center>
            <Grid className="m-5 p-3">
                {drinks.map((drink, index) => (
                    <Column lg={6} md={6} sm={3} key={index}>
                        <div className={`container ${index % 2 === 0 ? 'bg-dark text-info m-2' : 'bg-white text-info m-2'} p-4`}>
                            <h1>{drink.category}</h1>
                            {drink.items.map((item, i) => (
                                <div key={i} className="mb-4 m-2">
                                    <h5>{item.name}</h5>
                                    <p>{item.price}</p>
                                    <p>{item.description}</p>
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
