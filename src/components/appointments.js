import { Calendar, CalendarAdd } from '@carbon/icons-react';
import { Column, Grid } from '@carbon/react';
import React from 'react';

const Appointments = () => {
    return (
        <div className='p-5 ' >
            <Grid className='p-2' >
                <Column lg={16} md={8} sm={4} >
                <div className='rounded bg-info' >
                    <center>
                    <h5 className='m-3 p-3' >Use the top button '+ New' to create an appointment type.</h5>
                    </center>
                </div>
                </Column>
               
                <Column lg={16} md={8} sm={4} >
                <center>
                <CalendarAdd size={300} />
                </center>
               
                </Column>
                <Column lg={16} md={8} sm={4} >
                <div  >
                <center>
                    <h3 className='fw-bolder m-4' >There is currently no appointment available.</h3>
                    </center>
                </div>
                </Column>
            
                
            </Grid>
        </div>
    );
}

export default Appointments;
