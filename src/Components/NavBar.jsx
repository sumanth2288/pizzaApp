import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home"><img src='images/logo.png' alt='' width={300} height={30}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
                <Nav.Link href='#home'>Home</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/policy">
                <Nav.Link>Terms & policy</Nav.Link>
            </LinkContainer>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar