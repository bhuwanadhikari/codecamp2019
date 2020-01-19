import React from 'react';
import './HomeButton.css';

function HomeButton(props) {
    return (
        <a href='#selected-list' onClick={() => props._bringForm(true)}>
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
