import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

class Resume extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-4 mb-4">
                    <Col lg={11}>
                        <Card className="p-4 bg-light rounded">
                            <div className="shadow p-4 bg-white rounded">
                                {/* header */}
                                <h2 className="text-info">
                                    <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                                    <a className="text-info" href="https://docs.google.com/document/d/e/2PACX-1vSpNdlLp8l7lQeHGKZ5aMWKflh6Q_LFDDbQbZL3WLCDpXvBfGiNBvaDP8Yy7OPPONSbPG75jnJhMBqZ/pub"><i className="fas fa-file-alt fa-sm p-2" /></a>
                                    Resume
                                </h2>
                                {/* divder under title */}
                                <div className="dropdown-divider" />
                                {/* card contents */}
                                <Col>
                                    <ResponsiveEmbed style={{ height: '600px' }}>
                                        <iframe title="Resume-Alissa-Champigny" src="https://docs.google.com/document/d/e/2PACX-1vSpNdlLp8l7lQeHGKZ5aMWKflh6Q_LFDDbQbZL3WLCDpXvBfGiNBvaDP8Yy7OPPONSbPG75jnJhMBqZ/pub?embedded=true"></iframe>
                                    </ResponsiveEmbed>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="row space" />
            </Container>
        );
    }
}

export default Resume;