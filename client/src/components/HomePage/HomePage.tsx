import React from 'react'

import Welcome from './components/Welcome'
import MeetUs from './components/MeetUs'
import AboutUs from './components/AboutUs'
import WhatWeDo from './components/WhatWeDo'

const HomePage: React.FC = () => {
    window.scrollTo(0,0);
    return (
        <>
            <Welcome/>
            <AboutUs/>
            <WhatWeDo/>
        </>
    )
}

export default HomePage;