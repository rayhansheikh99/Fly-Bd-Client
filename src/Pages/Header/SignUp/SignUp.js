import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Menu from '../Menu/Menu';
import Topmenu from '../Menu/Topmenu';
import Footer from '../../Footer/Footer';
import './signup.css'

const SignUp = () => {
  
  //sign up system apply here
  const {signInWithGoogle, handleNameChange, handleRegistration, handleEmailChange, handlePasswordChange, error} = useFirebase();


    return (
      <div>
      <Topmenu/>
         <Menu/>
        <div className='page-size'>
        <Form className='signup-form' onSubmit={handleRegistration}>
          <h5>Please Sign Up Here</h5><br/>
<Form.Group className="mb-3">
  
<Form.Control className="bg-color" onBlur={handleNameChange} placeholder="Full Name" required />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Control className="bg-color" onBlur={handleEmailChange} type="email" placeholder="Email" required />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Control className="bg-color" onBlur={handlePasswordChange} type="password" placeholder="Password" required />
<div>{error}</div>
</Form.Group>
<div className='d-flex'>
  <p onClick={signInWithGoogle} className='google-sign me-4'>Sign Up with Google</p>
  <Link to="/login"> Already Have an Account</Link>
  </div>
  <Button className='px-5 btn-desing-all px-5' type="submit" >
Sign Up
</Button><br/>
</Form>

    </div>
    <Footer/>
        </div>
    );
};

export default SignUp;