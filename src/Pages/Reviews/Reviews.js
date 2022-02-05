import React from 'react';
import { Card } from 'react-bootstrap';
import { RatingView} from 'react-simple-star-rating'




const Reviews = (props) => {
    const {name, review, rating}=props.review
    return (
        <div>
             <Card className="card h-100 card-design card2">
                   
                    <Card.Body className='d-block mx-auto'>
                        <h5>{name}</h5>
                        <p><q>{review}</q></p>
                        <RatingView ratingValue= {rating} /* RatingView Props */ />
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Reviews;