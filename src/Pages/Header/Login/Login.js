import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './login.css'
const Login = () => {
  //login system apply here
  const { handleSignIn, handleEmailChange, signInWithGoogle, handlePasswordChange} = useFirebase();
  const history = useHistory();
  let location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
    return (
        <div className='page-size'>
            <Form className='' onSubmit={handleSignIn}>
              <h5>Please Login Here</h5><br/>
              <Form.Group className="mb-3 input-size" controlId="formBasicEmail">
                <Form.Control className="input-size bg-color" onBlur={handleEmailChange} type="email" placeholder="Enter your email" required/>
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Control className="input-size bg-color" onBlur={handlePasswordChange} type="password" placeholder="Enter your password" required />
              </Form.Group>
              <div className='d-flex'>
              <p onClick={handleGoogleSignIn} className='google-sign me-4'>Login with Google</p>
              <Link to="/signup"> Create a New Account </Link>
              </div>
              <Button className='px-5 mt-2 btn-desing-all px-5' type="submit" >
               Login
              </Button><br/>
            </Form>
        </div>

    );
};

export default Login;