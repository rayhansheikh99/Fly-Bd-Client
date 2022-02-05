import React, { useEffect, useState } from 'react';
import Packages from '../Packages/Packages';
import './allpackage.css'

const Allpackage = () => {
    const [packages, setPackages]=useState([])
    // data fetch 
    useEffect(()=>{
        fetch('https://fast-coast-67551.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=> setPackages(data))

    },[])

    return (
        <div className='package-page'>
           <div className='mt-1 card-design1'>
            <div><h4 className='text-center'>OUR VALUABLE PACKAGES</h4></div>
            <p className='text-center text-secondary'>Travel is the movement of people between distant geographical locations. <br/>Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 mt-3">
            
            {
              packages.map(packagge=> <Packages key={packagge._id} packagge={packagge}/>)
            }
        </div>
        </div>
            
        </div>
    );
};

export default Allpackage;