import React, { Component } from 'react';
import './portfolio.css';
import { CardGroup, Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

class Portfolio extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-4 mb-4">
                    <Col>
                        <Card className="p-4 bg-light rounded justify-content-center">
                            <div className="shadow p-4 bg-white rounded">
                                {/* header */}
                                <h2 className="text-info">
                                    <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                                Portfolio
                                </h2>
                                {/* divider under title */}
                                <div className="dropdown-divider" />

                                <CardGroup>

                                    <Col lg={4}>
                                        <Card
                                            style={{ height: 'auto' }}
                                            className="mb-2">
                                            <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/jobTrackr.png" alt="Job Trackr login page" />
                                            <Card.Body>
                                                <Card.Title><h5 className="text-info">Job Trackr</h5></Card.Title>
                                                <Card.Text>
                                                    <b>Full-Stack Developer and Project Manager</b> for a remote job search application that allows the user to track each step of the application process all in one location. This app resolves the need for multiple logins on multiple sites to find the status of their job application.
                                                    <br /> <br />
                                                    <b>Technologies:</b> HTML, CSS, Javascript, Material-UI, React.js, Remotive API, Node.js, Axios, Express.js, Concurrently, Passport.js, Bcrypt.js, MySQL, Sequelize, Heroku, Dotenv, ESLint, nodemon, Postman.
                                                    <br /> <br />
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
                                            style={{ height: 'auto' }}
                                            className="mb-2">
                                            <Card.Img variant="top" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/weWorkout.png" alt="We Workout Application" />
                                            <Card.Body>
                                                <Card.Title><h5 className="text-info">We Work Out App</h5></Card.Title>
                                                <Card.Text>
                                                    <b>Developer</b> for mobile friendly fitness application which allows users who infrequently workout to easily exercise at home. We Workout’s database provides premade workouts, exercise explanations and the ability to create personalized workouts.
                                                    <br /> <br />
                                                    <b>Technologies:</b> Sequelize, Passport, MySQL, Node.js, Express, Express-Handlebars, ESLint, jQuery, Heroku, CSS, HTML, Bootstrap, Animate.CSS, Trello, Balsamiq.
                                                    <br /> <br />
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

                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="row space" />
            </Container>
        );
    }
}

export default Portfolio;