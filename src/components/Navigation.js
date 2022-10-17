import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import headshot from '../assets/images/headshot.jpeg'

function Navigation() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Transport Me To:</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
    // return (
    //     <div>
    //     <Link to="/">
    //       Home
    //     </Link>

    //     <Link to="/portfolio">
    //         Portfolio
    //     </Link>

    //     <Link to="/resume">
    //         Resume
    //     </Link>

    //     <Link to="/about">
    //         About
    //     </Link>

    //     <Link to="/contact">
    //         Contact
    //     </Link>
    //     <div>
    //     <img src={headshot} alt="Tracy Rose Guajardo headshot" className='screenshot' />
    //     </div>
    //     </div>
    // );
}

export default Navigation;