import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavBar({ user }) {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">Fanart Expo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            {user ? <Nav.Link as={Link} to="/logout">Logout</Nav.Link> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav class="nav nav-tabs flex-row">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Fanart</a>
        <a class="nav-link" href="#">Artists</a>
        <a class="nav-link ms-auto" href="#">Sign In</a>
      </nav> */}
    </div>
  )
}

export default NavBar;