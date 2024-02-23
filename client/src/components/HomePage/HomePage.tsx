import React from 'react'
import Welcome from './components/Welcome'
import MeetUs from './components/MeetUs'
import AboutUs from './components/AboutUs'
import WhatWeDo from './components/WhatWeDo'



const HomePage: React.FC = () => {
    return (
        <div>
            <Welcome/>
            <MeetUs/>
            <AboutUs/>
            <WhatWeDo/>
        </div>
    )
}

export default HomePage;