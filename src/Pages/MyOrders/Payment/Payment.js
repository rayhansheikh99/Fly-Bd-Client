import React from 'react';
import './payment.css'
import pay from '../../../images/coming-soon.jpg'
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
const Payment = () => {
    return (
        // payment message show 



        <div className=''>
             <Row>
                    <Col className='sidebar' md={2} xs={2}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='mx-auto' md={10} xs={10}>
                    <img className='payment-img mt-2 rounded mx-auto d-block' src={pay} alt=''></img>
                    </Col> 
                </Row>
            
        </div>
    );
};

export default Payment;