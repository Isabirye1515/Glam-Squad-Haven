import { Column, Grid, Search, Tag } from '@carbon/react';
import React from 'react';

const News = () => {
    return (
        <div className='m-4 p-3  shadow ' >
            <Grid>
                <Column  lg={16} md={8} sm={4}  >
                <div> 
                    <h1 className='h-1 bg-red' >News</h1>
                </div>
                </Column>
                <Column lg={8} md={4} sm={4} >
                <div>
                    <b>Blogs :</b>
                <Tag>All</Tag>
                    <Tag>news</Tag>
                    <Tag>Blogs</Tag>
                    <Tag>Success Stories</Tag>
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
