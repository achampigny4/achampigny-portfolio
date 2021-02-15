import React, { Component } from 'react';
import './portfolio.css';
import { CardGroup, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

class Portfolio extends Component {
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
                                Portfolio
                                </h2>
                                {/* divider under title */}
                                <div className="dropdown-divider" />

                                <Container>
                                    <Row>
                                        <CardGroup>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/jobTrackr.png" alt="Job Trackr login page" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Job Trackr</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/dylanbest15/Job-Trackr/tree/Alissa"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://whispering-woodland-82554.herokuapp.com/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/weWorkout.png" alt="We Workout Application" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">We Work Out App</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/we-workout"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://weworkoutapp.herokuapp.com/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/adultsOnly.png" alt="Adults Only Petfinder website" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Adults Only Petfinder</h5></Card.Title>
                                                        <Card.Text>
                                                            Front-End Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/adults-pet-finder"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://hilbug.github.io/adults-pet-finder/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/resume.png" alt="Resume" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Resume</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://docs.google.com/document/d/e/2PACX-1vSpNdlLp8l7lQeHGKZ5aMWKflh6Q_LFDDbQbZL3WLCDpXvBfGiNBvaDP8Yy7OPPONSbPG75jnJhMBqZ/pub"><i className="fas fa-file-alt fa-lg" /></a>
                                                            {/* <a className="text-info" href="/AlissaChampignyResume.pdf" download="AlissaChampignyResume"><i class="fas fa-download fa-lg"/></a> */}
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/burger.png" alt="Burgers and Brew Application" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Burgers and Brew</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/burger"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://burgers-and-brew.herokuapp.com/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '350px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/workdayscheduler.png" alt="screenshot of workday scheduler" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Work Day Scheduler</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/WorkDayScheduler"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://achampigny4.github.io/WorkDayScheduler/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '410px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/budgettracker.png" alt="Budget tracker app" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Progressive Budget Tracker</h5></Card.Title>
                                                        <Card.Text>
                                                            Back-End Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/budget-tracker"><i className="fab fa-github fa-lg" /></a>
                                                            <a className="text-info ml-2" href="https://travel-budget-tracker.herokuapp.com/"><i class="fas fa-external-link-alt fa-lg" /></a>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col lg={4}>
                                                <Card
                                                    style={{ height: '410px' }}
                                                    className="mb-2">
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
                                                <Card
                                                    style={{ height: '410px' }}
                                                    className="mb-2">
                                                    <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/readmegenerator.png" alt="command prompt screen shot" />
                                                    <Card.Body>
                                                        <Card.Title><h5 className="text-info">Readme.md Generator</h5></Card.Title>
                                                        <Card.Text>
                                                            Full-Stack Developer <br /> <br />
                                                        </Card.Text>
                                                        <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                            <a className="text-info" href="https://github.com/achampigny4/ReadMeGenerator"><i className="fab fa-github fa-lg" /></a>
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

export default Portfolio;