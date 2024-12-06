import { Column, Grid, Search, Tag } from '@carbon/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='appointments' >
        <div className='m-4 p-5  shadow ' >
             <div>
            <Grid>
                <Column  lg={16} md={8} sm={4}  >
                <div> 
                    <h1 className='h-1 text-success p-2' >Success Stories</h1>
                </div>
                </Column>
                <Column lg={8} md={4} sm={4} >
                <div className='text-white' >
                    <b>Blogs :</b>
                All Our
                    
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
                <div className=' rounded  m-2' >
                    <h1 className='text-light' >
                        There is no Success Stories  yet !
                    </h1>

                </div>
                </Column>


            </Grid>
        </div>

        </div>
        </div>
    );
}

export default Success;
