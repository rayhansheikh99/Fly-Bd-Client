import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/flybd.png';
import '../Menu/topmenu.css'

const Menu = () => {
  const {user, logOut} = useAuth();
    return (
        <div className='menubar'>
            <Navbar collapseOnSelect expand="lg" className='nav-color' variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src={logo}
          width="100"
          height="70"
          className="d-inline-block align-top"
        />
  </Navbar.Brand>
  <Navbar.Brand className='text-danger fw-bold' as={Link} to="/home">FLYBD</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" className='text-secondary'>Home</Nav.Link>
      <Nav.Link as={Link} to="/packages" className='text-secondary'>Packages</Nav.Link>
    </Nav>
    <Nav>
    {user.email && <Nav.Link as={Link} to="/dashboard" className='menu-text'>Dashboard</Nav.Link>}
      {user?.email?
       <Nav.Link onClick={logOut} as={Link} to="/login" className='me-5 menu-text'>Logout</Nav.Link>:
      <Nav.Link as={Link} to="/login" className='menu-text'>Login</Nav.Link>}
    </Nav>
    {user?.email?
      <Navbar.Text className='menu-text'>
        Welcome: {user?.displayName}
      </Navbar.Text>: ('')}
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Menu;