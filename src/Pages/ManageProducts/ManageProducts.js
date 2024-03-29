import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './manageproducts.css'

const ManageProducts = () => {
    const [products, setProducts]=useState([])
   
    // data fetch 
    useEffect(()=>{
        fetch('https://fly-bd-server.onrender.com/packages')
        .then(res=>res.json())
        .then(data=> setProducts(data))

    },[])

    const handleDeleteProduct = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://fly-bd-server.onrender.com/packages/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingProducts = products.filter(product => product._id!==id);
                setProducts(remainingProducts);
                
            }
        })
 
    }
        }

    return (
        <div className='manage'>
              <Row>
                    <Col className='mt-5 pt-3' md={3} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mt-5 mx-auto' md={9} xs={8}>
                    <h4 className='mt-5 text-center'>PACKAGE MANAGEMENT</h4>
                    <div className='mt-5'>
                    <div><h4>OUR PACKAGES</h4></div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
                        
                        {
                        products.map(product=>
                        <div key={product._id}> 
                       
                       <Card className="card h-100 card-design">
                            <Card.Img className="img-service d-block" variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><b>Price:</b> {product.price}</ListGroupItem>
                                
                            </ListGroup>
                            <Card.Body>
                            
                            <span className='icon-delete'>
                            <Button className='px-5 btn-design' onClick={()=>handleDeleteProduct(product._id)}><FontAwesomeIcon onClick={()=>handleDeleteProduct(product._id)} className='ms-3 mt-1 me-2' icon={faTrash}/>Delete</Button>
                            </span>
                            
                            </Card.Body>
                     </Card>
                     </div>)
                        }
                       
                    </div>
                    </div>
                    </Col>
                </Row>
        </div>
    );
};

export default ManageProducts;