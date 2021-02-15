import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import Name from '../name/name';

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="/">
          <h1><strong>Alissa Champigny</strong></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="nav-link text-light" to="/">About</NavLink>
            <NavLink className="nav-link text-light" to="/Portfolio">Portfolio</NavLink>
            <NavLink className="nav-link text-light" to="/Contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default MyNav;