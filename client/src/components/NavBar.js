import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";


function NavBar({ user, setUser }) {
  const [toLogin, setToLogin] = useState(false);

  if (toLogin) {
    return <Redirect to="/login" />
  }

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        setToLogin(true);
      }
    });
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">Fanart Expo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            {user ? <Nav.Link as={Link} to="/login" onClick={handleLogoutClick} >Logout</Nav.Link> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            <Nav.Link as={Link} to="/fanart" >Fanart</Nav.Link>
            <Nav.Link as={Link} to="/my-fanart" >My Fanart</Nav.Link>
            <Nav.Link as={Link} to="/add-fanart" >Add Fanart</Nav.Link>
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