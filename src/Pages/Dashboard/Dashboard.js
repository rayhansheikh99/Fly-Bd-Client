import React from 'react';
import {Row, Col} from "react-bootstrap";
// import AllProduct from '../AllProduct/AllProduct';
import './dashboard.css'
import Sidebar from './Sidebar/Sidebar';
const Dashboard = () => {
    return (
        <div className='dash-page'>
        
                <Row>
                    <Col className='sidebar' md={2} xs={6}>      
                    <Sidebar/>
                       
                    </Col>
                    <Col className='' md={10} xs={6}>
                    <h3 className='text-center'>Welcome to Admin Dashboard</h3>
                    </Col> 
                </Row>
          
        </div>
    );
};
export default Dashboard;