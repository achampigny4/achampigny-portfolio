import React, { Component } from 'react';
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap';

class MyNav extends Component {
  render() {
    //                 <Navbar>
    //                     <Navbar.Header>
    //                         <Navbar.Brand>
    //                             <Link to="/">Alissa Champigny</Link>
    //                         </Navbar.Brand>
    //                         <Navbar.Toggle />
    //                     </Navbar.Header>
    //                     <Navbar.Collapse>
    //                         <Nav pullRight>
    //                             <NavItem eventKey={1} ComponentClass={Link} href="/" to="/">
    //                                 About
    //                         </NavItem>
    //                             <NavItem eventKey={2} ComponentClass={Link} href="/Portfolio" to="/Portfolio">
    //                                 Portfolio
    //                         </NavItem>
    //                             <NavItem eventKey={3} ComponentClass={Link} href="/Contact" to="/Contact">
    //                                 Contact
    //                         </NavItem>
    //                         </Nav>
    //                     </Navbar.Collapse>
    //                 </Navbar>
    return (
      <Navbar className="navbar bg-info m-0 py-0 px-0 px-md-5">
        <Container>
          <Navbar.Brand className="m-0 p-3 col-12 col-md-4">
            <h1 className="display-5"><strong>Alissa Champigny</strong></h1>
          </Navbar.Brand>
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a className="nav-link text-light" href="./">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="./portfolio">Portfolio</a>
            </li>
          </ul>
        </Container>
      </Navbar>
    );
  }
};

export default MyNav;