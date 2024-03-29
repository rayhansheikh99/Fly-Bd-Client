import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './review.css'

const Review = () => {
    const {user} = useAuth();
    //useform use here and POST Method Apply
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://fly-bd-server.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className='dash-page'>
             <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mt-5 mx-auto' md={10} xs={10}>
                    <h4 className='text-center'>Give Your Review</h4>
            <form className="booking-form product-form" onSubmit={handleSubmit(onSubmit)}>
        
                <input defaultValue={user.displayName} {...register("name",{ required: true })} />
                <input placeholder="Give Rating(0-5)" defaultValue="" {...register("rating", { required: true })} />
                <input placeholder="Write Your comment" defaultValue="" {...register("review",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Submit</Button>
            </form>
            
                    </Col> 
                </Row>
           
        </div>
    );
};

export default Review;