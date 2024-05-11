import React from 'react'

import "./AboutUs.css"

import img1 from "../../../assets/HomePage/about-us-1.jpg"

const AboutUs: React.FC = () => {
    return (
        <div className="AboutUs">
            <div>
                <h1>Who are we?</h1>
                <p>We are a club for students who are interested in <b>Computer Science, Software Engineering, and the tech industry.</b> Our goal is to increase involvement in these fields outside of the academic courses offered at College of the Canyons.</p>
            </div>
            <img 
                className="AboutUsImg"
                src={img1} 
                alt="A picture of the COC TECH Club at the 2024 COC Star Party."
            ></img>
        </div>
    )
}

export default AboutUs;