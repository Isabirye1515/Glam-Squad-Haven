import { Email, EmailNew, MessageQueue, Phone } from '@carbon/icons-react';
import { Column, Form, Grid, TextArea, TextInput } from '@carbon/react';
import React from 'react';

const Contactus = () => {
    return (
        <div className='' >
            <div className='m-4 p-5  shadow '  >
            <Grid className='m-2' >

                <Column  lg={16} md={8} sm={4} >
                <div className=' bg-white p-2' >
                    <h1>Contact Us</h1>
                </div>

                <h2 className='m-2 text-black fw-light' >Contact us about anything related to our company or services.
                We'll do our best to get back to you as soon as possible.</h2>
                </Column>
                <Column lg={10} md={5} sm={4}  >

                <Form  className='mb-4' >
                    <TextInput
                    id='name'
                    labelText="name"
                    placeholder='Name'
                     />
                     <TextInput
                    id='email'
                    labelText="email"
                    placeholder='Email'
                    type='email'
                     />
                     <TextInput
                    id='number'
                    labelText="number"
                    placeholder='Phone Number'
                    type='tel'
                     />
                     <TextInput
                    id='company'
                    labelText="company"
                    placeholder='Company'
                    type='text'
                     />
                     <TextInput
                    id='subject'
                    labelText="sbject"
                    placeholder='subject'
                    type='text'

                     />
                     <TextArea
                    id='text'
                    labelText="text"
                    placeholder='Question'
                    
                     />
                </Form>
                </Column>
                <Column lg={4} md={3} sm={4} >
                <div className='text-info' >
                    <h2 className='text-dark'>Connect with us</h2>
                  <MessageQueue size={40}   />  Contact us <br/>
                    <Email size={40} /> info@yourcompany.example.com<br/>
                    <Phone size={40} />  +1 555-555-5556<br/>
                </div  >
                </Column>
            </Grid>
            </div>
        </div>
    );
}

export default Contactus;
