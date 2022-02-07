import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider/slider-1.jpg'
import slider2 from '../../../images/slider/slider-2.jpg'
import slider3 from '../../../images/slider/slider-3.jpg'
import './slider.css'

const Slider = () => {
    // home slider here
    return (
        <div>
            <Carousel className='mt-5 slider' variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption className='text-group'>
                    <h2 className='slider-text'>YOUR JOURNEY BEGINS</h2>
                    <p className='text-white'>Making your experience with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider2}
                    alt="Second slide"
                    />
                    <Carousel.Caption className='text-group'>
                    <h2 className='slider-text'>A MYSTICAL ADVENTURE</h2>
                    <p className='text-white'>We want to make your visit as convenient as possible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 size-slider"
                    src={slider3}
                    alt="Third slide"
                    />
                    <Carousel.Caption className='text-group'>
                    <h2 className='slider-text'>TOP DESTINATIONS</h2>
                    <p className='text-white'>Everyone working in the office is very knowledgeable.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;