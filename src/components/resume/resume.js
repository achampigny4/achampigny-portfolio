import React from "react";

function Resume() {
    return (
        <div>
            {/* blank row above card */}
            <div className="row mb-5" />
            {/* back ground style */}
            <div className="shadow p-4 mb-4 bg-white rounded">
                {/* header */}
                <h2 className="text-info">
                    <img className="waveIcon" alt="wave" src="https://raw.githubusercontent.com/achampigny4/achampigny-portfolio/main/public/images/icon.png" />
                        Resume
                        </h2>
                {/* divder under title */}
                <div className="dropdown-divider" />
                {/* card contents */}
                <div className="container">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Resume-Alissa-Champigny" src="https://docs.google.com/document/d/e/2PACX-1vSpNdlLp8l7lQeHGKZ5aMWKflh6Q_LFDDbQbZL3WLCDpXvBfGiNBvaDP8Yy7OPPONSbPG75jnJhMBqZ/pub?embedded=true"></iframe>
                    </div>
                </div>
            </div>
            {/* blank row after card*/}
            <div className="row space" />
        </div>
    );
}

export default Resume;