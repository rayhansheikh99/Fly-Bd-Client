import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './manageorders.css'

const ManageOrders = () => {

    const [orders, setOrders]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://fly-bd-server.onrender.com/allorder')
        .then(res=>res.json())
        .then(data=> setOrders(data))


    },[])

       //delete an order
       const handleDeleteOrder = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `https://fly-bd-server.onrender.com/orders/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingOrders = orders.filter(order => order._id!==id);
                setOrders(remainingOrders);
            }
        })
 
    }
        }


    return (
        <div className=''>
             <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mx-auto mt-5'  md={10} xs={10}>
                    <div className=' mb-5 text-center'><h2 className=''>Manage All Order</h2></div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3 order">
            
             
                {
                    //showing data here
                    orders.map(order => 
                        <Card className="card h-100 me-2 rounded"  key={order._id}>
                           
                           <ListGroup className="list-group-flush ">
                            <ListGroupItem className='font-monospace bg-secondary text-white '>Tour Package: {order.packageName}</ListGroupItem>
                            <ListGroupItem>E-mail: {order.email}</ListGroupItem>
                            <ListGroupItem>Phone: {order.phone}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                        <Button onClick={()=>handleDeleteOrder(order._id)} className='px-2 btn-design'><FontAwesomeIcon onClick={()=>handleDeleteOrder(order._id)} className='me-1 icon-delete' icon={faTrash} />DELETE</Button>
                        <Button className=' btn-design ms-5 px-3'>ACCEPT</Button>
                        </Card.Body>
                    </Card>
                    
                    )
                }
            
        </div>
                    </Col> 
                </Row>
            
        </div>
    );
};

export default ManageOrders;