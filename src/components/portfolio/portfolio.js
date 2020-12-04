import React, { Component } from 'react';
import './portfolio.css';
import { CardGroup, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {
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
                                {/* card title */}
                                <h1 className="display-4 text-info">Portfolio</h1>
                                {/* divider under title */}
                                <div className="dropdown-divider" />

                                <Container>
                                    <Row>
                                        <CardGroup>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/jobTrackr.png" alt="Job Trackr login page" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Job Trackr</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/dylanbest15/Job-Trackr/tree/Alissa"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/weWorkout.png" alt="We Workout Application" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">We Work Out App</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/we-workout"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/adultsOnly.png" alt="Adults Only Petfinder website" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Adults Only Petfinder</h5></Card.Title>
                                                        <Card.Text>
                                                            Front-End Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/adults-pet-finder"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/resume.png" alt="Resume" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Resume</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://docs.google.com/document/d/e/2PACX-1vQuGFR0s8Ukhg5mXMot1g7kVOPsa-A_uwF-uxsXzzbpOi7pDotXiteHsDoEOIFi4V6xFAJKzi30EHQi/pub"><i className="fas fa-file-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/burger.png" alt="Burgers and Brew Application" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Burgers and Brew</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/burger"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/workdayscheduler.png" alt="screenshot of workday scheduler" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Work Day Scheduler</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/WorkDayScheduler"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/budgettracker.png" alt="Budget tracker app" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Progressive Budget Tracker</h5></Card.Title>
                                                        <Card.Text>
                                                            Back-End Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/budget-tracker"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/teamGenerator.png" alt="command prompt screen shot" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Team Generator</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/TeamProfileGenerator"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card>
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/readmegenerator.png" alt="command prompt screen shot" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Readme.md Generator</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/achampigny-portfolio/blob/main/public/images/readmegenerator.png"><i className="fab fa-github fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                        </CardGroup>
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

export default About;