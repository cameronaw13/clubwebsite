import React from 'react'

import "./WhatWeDo.css"

import webImg1 from "/public/who-are-we-web-1.png"
import gameImg1 from "/public/who-are-we-game-1.png"

const WhatWeDo: React.FC = () => {
    return (
        <div className="WhatWeDo">
            <h1 style={{textAlign: "center"}}>What do we do?</h1>
            <p style={{ width: "75%", margin: "auto", marginBottom: "1rem"}}>Through educational workshops and student-led projects, we provide students opportunities to obtain experience in programming.</p>
            <div className="WhatWeDoTeam">
                <img 
                    className="WhatWeDoTeamImg"
                    src={webImg1} 
                    alt="An image of one our of web development projects"
                ></img>
                <div className="WhatWeDoTeamText">
                    <h2>Web Development</h2>
                    <ul>
                        <li>Front-End Development</li>
                        <li>Back-End Development</li>
                        <li>Database Management</li>
                    </ul>
                </div>
            </div>
            <div className="WhatWeDoTeam">
                <img 
                    className="WhatWeDoTeamImg"
                    src={gameImg1} 
                    alt="An image of one our of game development projects"
                ></img>
                <div className="WhatWeDoTeamText">
                    <h2>Game Development</h2>
                    <ul>
                        <li>Scripting</li>
                        <li>Gameplay Design</li>
                        <li>Asset Management</li>
                    </ul>
                </div>
            </div>
            <p style={{ width: "75%", margin: "auto", marginTop: "2rem"}}>We are always open to exploring new areas of Computer Science, so if you are interested in leading that initiative, come join our club meetings!</p>
        </div>
    )
}

export default WhatWeDo;