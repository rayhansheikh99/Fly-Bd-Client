import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Menu/topmenu.css'


const Topmenu = () => {
    return (
        <div className='topmenu py-2 d-flex'>
            <p className='me-2 ms-4 text-white'>FOLLOW US:</p>
            <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a className='me-2 ms-2' href="https://www.instagram.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faYoutube} /></a>
            <a className='me-2 ms-2' href="https://twitter.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <div className='phone d-flex text-white'>
            <FontAwesomeIcon className='mt-1 me-1 text-dark' icon={faPhoneSquare} />
            <p>+01888888888</p>
            </div>
           
        </div>
    );
};

export default Topmenu;