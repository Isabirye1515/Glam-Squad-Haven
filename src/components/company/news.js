import { Column, Grid, Search, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className='m-4 p-5  shadow ' >
            <Grid>
                <Column  lg={16} md={8} sm={4}  >
                <div> 
                    <h1 className='h-1 bg-red p-2' >News</h1>
                </div>
                </Column>
                <Column lg={8} md={4} sm={4} >
                <div>
                    <b>Blogs :</b>
                All About In
                
                    <Tag>news</Tag>

                
                </div>
                </Column>
                <Column lg={8} md={4} sm={4} >

                <div>
                    <Search
                    id='search'
                    labelText="Search"
                    aria-label='Search'
                     />
                </div>
                </Column>
                <Column lg={16} md={8} sm={4} >
                <div className='container rounded bg-white m-2' >
                    <h1>
                        There is no News yet !
                    </h1>

                </div>
                </Column>


            </Grid>
        </div>
    );
}

export default News;
