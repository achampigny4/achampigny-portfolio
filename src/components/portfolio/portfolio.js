import React, { Component } from 'react';
import './portfolio.css';

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
                                {/* portfolio project cards */}
                                <div className="card-group">
                                    <div className="card-deck">
                                        {/* project 1 */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/readmegenerator.png" className="card-img-top" alt="Readme Generator screenshot" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        {/* link and text style */}
                                                        <a href="https://github.com/achampigny4/ReadMeGenerator" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Readme Generator</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 2 */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/team.png" className="card-img-top" alt="Team Profile Generator" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        {/* link and text style */}
                                                        <a href="https://github.com/achampigny4/TeamProfileGenerator" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Team Profile</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 3 */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/adultsOnly.png" className="card-img-top" alt="Adults Only Petfinder website" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        {/* link and text style */}
                                                        <a href="https://github.com/achampigny4/adults-pet-finder" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Adults Only Petfinder</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 4 */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/budgettracker.png" className="card-img-top" alt="Screenshot of budget tracker application" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        {/* link and text style */}
                                                        <a href="https://github.com/achampigny4/budget-tracker" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Budget Tracker</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 5 card */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/workdayscheduler.png" className="card-img-top" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        <a href="https://github.com/achampigny4/WorkDayScheduler" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Work Day Scheduler</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 6 card */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/burger.png" className="card-img-top" alt="Burgers and Brew Application" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        <a href="https://github.com/achampigny4/burger" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Burgers and Brew!</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* project 7 card */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/weWorkout.png" className="card-img-top" alt="We Workout Application" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        <a href="https://github.com/achampigny4/we-workout" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>We Workout</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Resume pdf card */}
                                        <div className="col mb-4">
                                            <div className="card">
                                                {/* project img */}
                                                <img src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/resume.png" className="card-img-top" alt="Resume" />
                                                {/* button location */}
                                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                                    {/* button style */}
                                                    <button type="button" className="btn btn-info">
                                                        <a href="https://docs.google.com/document/d/e/2PACX-1vQuGFR0s8Ukhg5mXMot1g7kVOPsa-A_uwF-uxsXzzbpOi7pDotXiteHsDoEOIFi4V6xFAJKzi30EHQi/pub" target="_blank" style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>Resume</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* card-deck */}
                                    </div>
                                    {/* card-group */}
                                </div>
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