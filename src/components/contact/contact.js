import React, { Component } from 'react';
// import './contact.css';
import { CardGroup, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                {/* blank row above card */}
                <div className="row mb-5" />
                {/* blank col */}
                <div className="container co 14 offset-12 s12 align wrapper">
                    {/* card backgroud style */}
                    <form className="p-4 mb-4 bg-light text-dark border rounded border-info">
                        <div className="responsive">
                            <div className="shadow p-4 mb-4 bg-white rounded">
                                {/* header */}
                                <h2 className="text-info">
                                    <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                                Contact
                                </h2>
                                {/* divider under title */}
                                <div className="dropdown-divider" />

                                <Container>
                                    <Row>
                                       
                                    </Row>
                                </Container>

                                {/* shadow p-4 mb-4 bg-white rounded */}
                            </div>
                            {/* responsive */}
                        </div>
                    </form>
                    {/* blank column on side */}
                </div>
                {/* blank row after card*/}
                <div className="row space" />
            </div>
        );
    }
}

export default Contact;