import { Calendar, ChartLine, List, ShoppingBag } from '@carbon/icons-react';
import { Column, Grid, Row, Search, Select, SelectItem, Tag } from '@carbon/react';
import React from 'react';

const Shop = () => {
    return (
        <div className='shops'>
             <div> 
                    <h1 className='h-1 text-success p-5' >Shop</h1>
                </div>
        <div className='m-4 p-5  shadow text-white' >
            <Grid className='m-2' >
                <Column lg={4} md={2} sm={4} >
                <div>
                    <h2>Price Range</h2>
                </div><br/><br/>
                <div>
                <input type="range" min="0" max="100" value="50" step="1" />
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

            </Grid>



            <Grid  className='m-2 text-light' >
                
                <Column lg={14} md={6} sm={3} >
                <div>
                <Calendar size={100} />
                </div>
                
                <div>

                    <h2>Booking Fees</h2>
                    <Tag>Published</Tag>
                </div>
        
                </Column>
                <Column  lg={2} md={2} sm={1} >
                <List size={30} />
                </Column>

            </Grid>
        </div>
        </div>
    );
}

export default Shop;
