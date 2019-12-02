import React from 'react';
import './HomeButton.css';

function HomeButton(props) {
    return (
        <a href='#register' onClick={() => props._bringForm(true)}>
            <div className="buttonBox" >
                <div className="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit Idea
            </div>
            </div>
        </a >
    )
}

export default HomeButton
