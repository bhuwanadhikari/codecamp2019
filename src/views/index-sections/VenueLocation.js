/*eslint-disable*/
import React from "react";

import { Container, Col } from "reactstrap";
import axios from "axios";
import './ContactUs.css';
function Venue() {



    return (
        <div className="container-venue">
            <div id="maps" style={{ height: '1px', width: '100%', position: 'relative', top: '-60px' }}></div>
            <h2 style={{ textAlign: 'center', marginTop: '80px' }} id='faqs'>Venue</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4970.147009041778!2d83.9729951254231!3d28.255137701438922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595006d6a3d97%3A0x19ff5adc4b5b8efe!2sRIC%20building%2C%20WRC!5e0!3m2!1sen!2snp!4v1574920018635!5m2!1sen!2snp" className="Map" width="900" height="500" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>


        </div>

    )
}

export default Venue;
