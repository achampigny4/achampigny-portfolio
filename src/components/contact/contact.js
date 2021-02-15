import React, { Component } from 'react';
// import './contact.css';
import { Container, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto" className="mt-4 mb-4">
                        {/* card backgroud style */}
                        <form className="p-4 bg-light rounded justify-content-center">
                            <div className="responsive">
                                <div className="shadow p-4 bg-white rounded">
                                    {/* header */}
                                    <h2 className="text-info">
                                        <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                                Contact
                                </h2>
                                    {/* divider under title */}
                                    <div className="dropdown-divider" />
                                    <div className="single-post-content-wrapper p-3">
                                        <p>
                                            <b>Email: </b> achampigny4@gmail.com
                                            <br /><br />
                                            <b>Phone Number: </b> 1 (603) 793-2449
                                            <br /><br />
                                            <b>Github: </b> https://github.com/achampigny4
                                                <br /><br />
                                            <b>LinkedIn: </b> https://www.linkedin.com/in/alissa-champigny-b1171a1a5/
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;