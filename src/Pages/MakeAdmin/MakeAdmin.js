import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const { reset } = useForm();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = data => {
        const user = { email };
        fetch('https://fly-bd-server.onrender.com/users/admin', {
            method: 'PUT',
            headers: {
        
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                    alert('Admin Added Successfully');
                    reset();
            })
            // .then(data => {
                
                
            // })

       
    }

    return (
        <div className=''>
             <Row>
                    <Col className='sidebar' md={2} xs={6}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='' md={10} xs={6}>
                    <h4 className='mt-5 .addpackage text-center'>Make an Admin</h4>
                    <Form  onSubmit={handleAdminSubmit}>
                    <Form.Control onBlur={handleOnBlur} className='w-50 product-form1 mx-auto mb-2 mt-2' type="email" placeholder="Enter email" />
                    <Button className='d-block mx-auto' type="submit">Make Admin</Button>
                    </Form>
                    </Col> 
                </Row>
            
        </div>
    );
};

export default MakeAdmin;