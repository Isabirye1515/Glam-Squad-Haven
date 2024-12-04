import { Calendar, ChartLine, List, ShoppingBag } from '@carbon/icons-react';
import { Column, Grid, Row, Search, Select, SelectItem, Tag } from '@carbon/react';
import React from 'react';

const Shop = () => {
    return (
        <div className='m-4' >
            <Grid className='m-2' >
                <Column lg={3} md={2} sm={4} >
                <div>
                    <h2>Price Range</h2>
                </div>
                </Column >
                <Column lg={6} md={4} sm={4}  >
                <div>
                    <Search
                    id='search'
                    labelText="Search"
                    aria-label='Search'
                     />
                </div>
                </Column>
                
                <Column lg={5} md={3} sm={2} >
                <Select>
                    <SelectItem   
                    text="Featured" />
                    <SelectItem
                    text="Newest Arrival" />

                    <SelectItem text="Name(A-Z)" />
                    <SelectItem text="Price -Low to High"/>
                    <SelectItem  text="Price -High to Low" />

                </Select>

                </Column>
                <Column  lg={2} md={2} sm={2} >
                <List size={30} />
                </Column>

            </Grid>


            
            <Grid  className='m-2' >
                <Column lg={4}md={2} sm={4} >
                <div>
                <input type="range" min="0" max="100" value="50" step="1" />
                </div>
                </Column>
                <Column lg={12} md={6} sm={4} >
                <div>
                <Calendar size={100} />
                </div>
                
                <div>

                    <h2>Booking Fees</h2>
                    <Tag>Published</Tag>
                </div>
        
                </Column>
            </Grid>
        </div>
    );
}

export default Shop;
