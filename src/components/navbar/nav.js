import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class MyNav extends Component {
  render() {
    return (
      <Navbar className="navbar bg-info m-0 py-0 px-0 px-md-5">
        <Container>
          <Navbar.Brand className="m-0 p-3 col-12 col-md-4">
            <h1 className="display-5"><strong>Alissa Champigny</strong></h1>
          </Navbar.Brand>
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/Portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
    );
  }
};

export default MyNav;