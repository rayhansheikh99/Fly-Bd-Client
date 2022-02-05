import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './myorders.css'

const MyOrders = () => {
    const {user} = useAuth();
    console.log(user.email)
    
    const [orders, setOrders]=useState([])
    
    // data fetch 
    useEffect(()=>{
        fetch(`https://fast-coast-67551.herokuapp.com/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        console.log(orders.name)


    },[])

           //delete an order and DELETE Method Apply Here
           const handleDeleteOrder = id =>{
            const proceed = window.confirm("Are you want to delete?")
            if(proceed){
                const url = `https://fast-coast-67551.herokuapp.com/orders/${id}`
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
        <div className='page-size-bg'>
        <Row>
        <Col className='sidebar' md={2} xs={2}>      
        <Sidebar/>
           
        </Col>
        <Col className='' md={10} xs={10}>
        <div className=''><h2 className=''>My Booking List</h2></div>
        <div className='order'>
        <div className='d-flex row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3'>
        
                {
                   
                        orders.map(order => 
                            <Card className="card h-100 me-2 rounded"  key={order._id}>
                               
                               <ListGroup className="list-group-flush ">
                                <ListGroupItem className='font-monospace bg-secondary text-white '>Tour Package: {order.packageName}</ListGroupItem>
                                <ListGroupItem>E-mail: {order.email}</ListGroupItem>
                                <ListGroupItem>Phone: {order.phone}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                            <Button onClick={()=>handleDeleteOrder(order._id)} className='px-2 btn-design'><FontAwesomeIcon onClick={()=>handleDeleteOrder(order._id)} className='me-1 icon-delete' icon={faTrash} />DELETE</Button>
                            {/* <Button className='me-2 py-2 px-2'>{order.status}</Button> */}
                            </Card.Body>
                        </Card>
                        
                        )
                        
                }
                    
                
               
         </div>
         </div>
        </Col> 
    </Row>
    </div>

        
    );
};

export default MyOrders;