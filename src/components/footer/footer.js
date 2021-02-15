import React, { Component } from 'react';
import './footer.css';

class MyFooter extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light justify-content-center">
        <div className="row container justify-content-center">
          <h6 className="text-info mb-0">Connect</h6>
        </div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link text-info" href="mailto:achampigny4@gmail.com"><i className="fas fa-envelope" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="tel:1-603-793-2449"><i className="fas fa-phone" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="https://github.com/achampigny4"><i className="fab fa-github" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-info" href="https://www.linkedin.com/in/alissa-champigny-b1171a1a5/"><i className="fab fa-linkedin" /></a>
          </li>
          <div className="row container justify-content-center">
            <p className="copyright text-info mb-0 mt-0">©Copyright</p>
          </div>
        </ul>
      </nav>
    );
  }
};

export default MyFooter;