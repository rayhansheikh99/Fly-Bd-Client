import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './packages.css'

const Packages = (props) => {

    const{_id, name, image, price, duration}=props.packagge

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
                    </ListGroup>
                    <Card.Body className='mx-auto'>
                  
                  <Link to={`/packageDetails/${_id}`}><Button className='px-3 btn-design'><FontAwesomeIcon className='me-2' icon={faPlusSquare} />MORE INFO</Button></Link>
                    
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Packages;