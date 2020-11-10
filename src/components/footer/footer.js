import React, { Component } from 'react';
// import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';

class MyFooter extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
        <ul className="nav justify-content-center">
          {/* <li className="nav-item">
            <a className="nav-link text-info" href="./contact.html"><i className="fas fa-address-book" />
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link text-info" href="mailto:achampigny4@gmail.com"><i className="fas fa-envelope" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="tel:1-603-793-2449"><i className="fas fa-phone" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="https://github.com/achampigny4" target="_blank"><i className="fab fa-github" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="https://www.linkedin.com/in/alissa-champigny-b1171a1a5/" target="_blank"><i className="fab fa-linkedin" /></a>
          </li>
          <div className="row container d-flex flex-column">
            <ul className="d-sm-flex d-block flex-nonwrap text-capitalize text-info">
              <p>©Copyright</p>
            </ul></div>
        </ul>
      </nav>
    );
  }
};

export default MyFooter;