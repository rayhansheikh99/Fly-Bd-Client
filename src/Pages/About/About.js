import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img from "../../images/about.jpg"
import './about.css'

const About = () => {
    return (

        // about section

        <div  className='about-page'>
            <Row xs={1} md={2} className="g-4">

                <Col>
                <Card.Img className='' variant="top" src={img} />
                </Col>
                <Col>
                <p>FLYBD is a trusted and reliable tour and travel agency Dhaka Division , Bangladesh . We are here to bring the luxury to your traveling. FLYBD is a proud member of Association of Travel Agents of Bangladesh-ATAB and also Tour Operators Association of Bangladesh. Safe traveling, your security, and your enjoyment are our main focus during your travels.</p> 
                </Col>
                </Row>
           

        </div>
    );
};

export default About;