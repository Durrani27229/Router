import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home">
            <Link to=""><img
            
            alt=""
            src="https://miro.medium.com/v2/resize:fit:572/1*Mo-09Vngs5t_oWGqHZuPtg.png"
            width="100"
            height="40"
            className="d-inline-block align-top"
          /></Link>
            {' '}
        
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me- mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link fw-bold' to="">Home</Link >
            <Link className='nav-link fw-bold' to="about">About</Link >
            <Link className='nav-link fw-bold' to="contact">Contact</Link >
            <Link className='nav-link fw-bold' to="services">Services</Link >
            
          
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Header
