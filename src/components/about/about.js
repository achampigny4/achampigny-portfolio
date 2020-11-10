import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
// import { Container, Row, Col, Image } from 'react-bootstrap';
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
                            <h1 className="display-6 text-info">About Me</h1>
                            {/* divder under title */}
                            <div className="dropdown-divider" />
                            {/* card contents */}
                            <div className="container">
                                <div className="card border-0">
                                    <section className="row single-post mt-5 no-gutters">
                                        <div className="col-md-12">
                                            <div className="image-wrapper float-left pr-3">
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/profilepic.jpg" alt="Selfie of me on top of a Mountain in Bavaria" className="h-25 p-3" style={{ width: '250px' }} />
                                            </div>
                                            <div className="single-post-content-wrapper p-3 col-sm-12 col-md-12 col-lg-12">
                                                <p id="about">Hello,
                                            <br /><br />    My name is Alissa. I am a Full-Stack Web Developer based out of Kingston, New Hampshire.
                                            I have been a medical professional for 11 years and now I am beginning a career on the software side.
                                            <br /><br />    In my free time, I enjoy spending time with my dog, going on adventures abroad and locally, and playing in the New England Pinball League.
                                            </p>
                                            </div>
                                            {/* col-md-12 */}
                                        </div>
                                    </section>
                                    {/* card border-0 */}
                                </div>
                                {/* container */}
                            </div>
                            {/* shadow p-4 mb-4 bg-white rounded */}
                        </div>
                    </form>
                </Container>
                {/* blank row after card*/}
                <div className="row space" />
            </div>
            /* //     <Container>
                //         <Row className="text-center">
                    //             <Col xs={12} sm={4} sm-offset={2} className="wrapper">
                        //                 <Image src="public/images/rattlesnakemtn.jpg" rounded className="about-profile-pic" />
    //                 <h3>About Me</h3>
    //                 <p>about me paragraphs here</p>
    //             </Col>
    //         </Row>
    //     </Container>
    {/* /* <Container>
                <row>
                    <header className="App-header">
                        <Card className="shadow-small bg-white rounded">
                            <Card.Img width="200px" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/profilepic.jpg" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="font-weight-bold">Alissa Champigny</Card.Title>
                                <Card.Text>Full Stack Web Developer</Card.Text>
                            </Card.Body>
                        </Card>
                    </header>
                </row>
            </Container> */
        );
    }
}

export default About;