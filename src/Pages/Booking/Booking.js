import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './booking.css';

const Booking = () => {

    const [product, setProduct] = useState([])
    const [packageDetails, setPackageDetails] = useState({})
    const {serviceId} = useParams();

    useEffect(()=>{
        fetch(`https://fast-coast-67551.herokuapp.com/packages`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
        const foundService = product.find(
            (products)=>products._id===serviceId);
            setPackageDetails(foundService);
      
    },[product,serviceId]);
  
    //useform use here and POST Method Apply here
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://fast-coast-67551.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };
    return (
        <div className=''>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name",{ required: true })} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue={packageDetails?.name} {...register("packageName",{ required: true })} />
                <input placeholder="Address" defaultValue="" {...register("address",{ required: true })} />
                <input placeholder="Message" defaultValue="" {...register("message",{ required: true })} />
                <input placeholder="phone number" defaultValue="" {...register("phone",{ required: true })} />
                <Button type="submit" className='btn-book d-block'>Book Ticket</Button>
            </form>
        </div>
    );
};

export default Booking;