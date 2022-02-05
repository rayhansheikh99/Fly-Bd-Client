import React, { useState } from 'react';
import { useEffect } from 'react';
import AllReview from '../AllReview/AllReview';
import Slider from '../Header/Slider/Slider';
import Packages from '../Packages/Packages';
import './home.css';
const Home = () => {
    
    const [packages, setPackages]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=>res.json())
        .then(data=> setPackages(data.slice(0,6)))

    },[])

    return (
        <div>
            <Slider/>
            <div className='card-design1'>
            <div><h4 className='text-center'>MOST POPULAR TOURS</h4></div>
            <p className='text-center text-secondary'>Travel is the movement of people between distant geographical locations. <br/>Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              packages.map(packagge=> <Packages key={packagge._id} packagge={packagge}/>)
            }

        </div>
        </div>
        <AllReview/>
        </div>
    );
};

export default Home;