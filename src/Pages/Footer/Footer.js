import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  const today = new Date();
    return (
        <div>

          {/* footer section  */}
          
        <div className="footer-container">
        <div className="container">
        <div className="right-footer-container text-center">
                <h5>Start using FlyBD today</h5>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"   
                />
               <a href='/'> <FontAwesomeIcon className='paper-icon' icon={faPaperPlane}/></a>
                <br/>
            </div><br/>

          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-center text-start mt-4">
                <h5>Let's chat</h5>
                <div className="icons-container d-flex justify-content-center ">
                  <div className="icon">
                  <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagramSquare} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://twitter.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitterSquare} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faYoutube} /></a>
                  </div>
                  <div className="icon">
                  <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebookSquare} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  
                  <Nav.Link className="footer-menu text-center" as={Link} to="/home#home">Home</Nav.Link>
                  <Nav.Link className="footer-menu text-center" as={Link} to="/products">Packages</Nav.Link>
                  <Nav.Link className="footer-menu text-center" as={Link} to="/about#about">About Us</Nav.Link>
                  <Nav.Link className="footer-menu text-center" as={Link} to="/contact#contact">Contact Us</Nav.Link>
            
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
               
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="d-flex">
                    <FontAwesomeIcon className='mt-1' icon={faMapMarkerAlt} />
                    <p className='ms-2'>
                      Road No. 1, Dhanmondi, Dhaka
                      <br /> Dhaka Division, Bangladesh
                    </p>
                  </div>
                  
                </div>
                <div>
                <p className="mt-2 d-flex align-items-center justify-content-center">
                  <small>FlyBD &copy; {today.getFullYear()} All rights reserved.</small>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;