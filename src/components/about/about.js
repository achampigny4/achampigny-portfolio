import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './about.css';

class About extends Component {
    render() {
        return (
            <div>
                {/* blank row above card */}
                <div className="row mb-5" />
                <Container className="offset-12 align wrapper">
                    {/* card back ground style */}
                    <form className="p-4 mb-4 bg-light text-dark border rounded border-info">
                        <div className="shadow p-4 mb-4 bg-white rounded">
                            {/* header */}
                            <h2 className="text-info">
                                <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                                About Me
                                </h2>
                            {/* divder under title */}
                            <div className="dropdown-divider" />
                            {/* card contents */}
                            <div className="container">
                                <div className="card border-0">
                                    <div className="col-md-12">
                                        <div className="image-wrapper float-left pr-3">
                                            <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/profilepic.jpg" alt="Selfie of me on top of a Mountain in Bavaria" className="h-25 p-3" style={{ width: '250px' }} />
                                        </div>
                                        <div className="single-post-content-wrapper p-3 col-sm-12 col-md-12 col-lg-12">
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
                                            <b>Technical Skills: </b> React, Jquery, responsive design, Bootstrap, Materialize, Material UI,  Node.js, OOP, SQL, MySQL, NoSQL, Heidi SQL, Workbench SQL, MongoDB, Sequelize, AJAX, APIs, Express.js, Handlebars.js, Github, Heroku, analytical skills, search engine optimization, testing and debugging.
                                            <br /><br />
                                            <b>Fun Fact: </b> I am a member of The New England Pinball League.
                                            </p>
                                        </div>
                                        {/* col-md-12 */}
                                    </div>
                                    {/* card border-0 */}
                                </div>
                                {/* container */}
                            </div>
                            {/* shadow p-4 mb-4 bg-white rounded */}
                        </div>
                    </form>
                </Container>
                {/* blank row after card*/}
                <div className="row mb-5" />
            </div>
        );
    }
}

export default About;