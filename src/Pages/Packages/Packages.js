import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './packages.css'

const Packages = (props) => {

    const{_id, name, image, price, describe, duration}=props.packagge

    return (
        <div>
             <Card className="card h-100 card-design">
                    <Card.Img className="img-service d-block" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Price:</b> {price}</ListGroupItem>
                        <ListGroupItem><b>Duration:</b> {duration}</ListGroupItem>
                        <ListGroupItem>{describe.slice(0,200)}...</ListGroupItem>
                    </ListGroup>
                    <Card.Body className='mx-auto'>
                    
                  <Link to={`/Shipping/${_id}`}><Button className='px-5 btn-design'><FontAwesomeIcon className='me-2' icon={faCartPlus} />Book Now</Button></Link>
                    
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Packages;