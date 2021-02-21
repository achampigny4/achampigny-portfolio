import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './about.css';

class About extends Component {
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
                                About Me
                                </h2>
                                {/* divder under title */}
                                <div className="dropdown-divider" />
                                <div className="image-wrapper float-left">
                                    <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/profilepic.jpg" alt="Selfie of me on top of a Mountain in Bavaria" className="h-25 p-3" style={{ width: '220px' }} />
                                </div>
                                <p id="about">Hello,
                                            <br /><br />
                                            My name is Alissa. I am a Full Stack Web Developer based out of Kingston, New Hampshire. I am passionate about using my strong interpersonal skills from being a medical professional for 11 years to make user-friendly applications.
                                            <br /><br />
                                            I have experience with HTML, CSS, and Javascript and greatly enjoy learning new technology. As a highly organized and determined web developer, I find it rewarding to collaborate with a team to build responsive applications.
                                            <br /><br />
                                            In my free time, I enjoy spending time with my dog, learning how to surf, and going on adventures abroad or locally.
                                            <br /><br />
                                    <b>Programming Languages: </b> HTML, CSS, Javascript.
                                            <br /><br />
                                    <b>Technical Skills: </b> HTML, CSS, Javascript, Jquery, React, responsive design, Bootstrap, Materialize, Material UI,  Node.js, OOP, MySQL, NoSQL, Heidi SQL, Workbench SQL, MongoDB, Robo 3T, Sequelize, AJAX, APIs, Express.js, Handlebars.js, analytical skills, search engine optimization, testing and debugging, Heroku, Github, Git bash, GitLab, Slack, Visual studio code, Postman.
                                            <br /><br />
                                    <b>Fun Fact: </b> I am a member of The New England Pinball League.
                                            </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="row space" />
            </Container>
        );
    }
}

export default About;