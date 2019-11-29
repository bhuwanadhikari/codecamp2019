/*eslint-disable*/
import React from "react";

import { Container, Col } from "reactstrap";
import axios from "axios";
import './ContactUs.css';
function ContactUs() {



    return (
        <div className="container-contact">
            <div className="screen">
                <div className="screen-header">

                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                        <div className="app-title">
                            <span>CONTACT</span>
                            <span>US</span>
                        </div>
                        <div className="app-contact">CONTACT INFO : +977 9865623478</div>
                    </div>
                    <div className="screen-body-item">
                        <div className="app-form">
                            <div className="app-form-group">
                                <input className="app-form-control" placeholder="NAME" />
                            </div>
                            <div className="app-form-group">
                                <input className="app-form-control" placeholder="EMAIL" />
                            </div>

                            <div className="app-form-group message">
                                <input className="app-form-control" placeholder="MESSAGE" />
                            </div>
                            <div className="app-form-group buttons">
                                <button className="app-form-button cancel-button">CANCEL</button>
                                <button className="app-form-button">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ContactUs;
