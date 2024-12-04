import { List } from '@carbon/icons-react';
import { Column, Grid, Search, Select, SelectItem } from '@carbon/react';
import React from 'react';

const Shop = () => {
    return (
        <div>
            <Grid>
                <Column lg={3}  >
                <div>
                    <h2>Price Range</h2>
                </div>
                </Column >
                <Column lg={6}  >
                <div>
                    <Search
                    id='search'
                    labelText="Search"
                    aria-label='Search'
                     />
                </div>
                </Column>
                
                <Column lg={5} >
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
                <Column  lg={2} >
                <List size={30} />
                </Column>

            </Grid>
            <Grid>
                <Column>
                <div>
                    
                </div>
                </Column>
            </Grid>
        </div>
    );
}

export default Shop;
