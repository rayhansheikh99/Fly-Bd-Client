import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './addproduct.css'

const AddProduct = () => {
      //useform use here and POST Method Apply
      const { register, handleSubmit, reset } = useForm();
      const onSubmit = data => {
          fetch('https://fast-coast-67551.herokuapp.com/packages', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)
          })
              .then(res => res.json())
              .then(result => {
                  if (result.insertedId) {
                      alert('Item Added Successfully');
                      reset();
                  }
              })
      };
      return (
        
          <div className=''>
                 <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mx-auto' md={10} xs={10}>
                    <h4 className='text-center'>Add Package From Here</h4>
              <form className="booking-form product-form" onSubmit={handleSubmit(onSubmit)}>
          
                  <input  placeholder="Package Name" defaultValue="" {...register("name",{ required: true })} />
                  <input  placeholder="Price" defaultValue="" {...register("price", { required: true })} />
                  <input  placeholder="Duration" defaultValue="" {...register("duration", { required: true })} />
                  <input placeholder="Description" defaultValue="" {...register("describe",{ required: true })} />
                  <input placeholder="Image Link" defaultValue="" {...register("image",{ required: true })} />
                  <Button type="submit" className='btn-book d-block'>Add Item</Button>
              </form>
                    </Col> 
                </Row>
              
          </div>
    );
};

export default AddProduct;