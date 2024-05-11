import React from 'react'

import "./WhatWeDo.css"

import webImg1 from "../../../assets/HomePage/who-are-we-web-1.png"
import gameImg1 from "../../../assets/HomePage/who-are-we-game-1.png"

const WhatWeDo: React.FC = () => {
    const clubSchedule = "every Friday from 11:00 AM to 12:30 PM"
    const clubEmail = "COCTECHClub@my.canyons.edu"
    return (
        <div className="WhatWeDo">
            <h1 style={{textAlign: "center"}}>What do we do?</h1>
            <h3 style={{ 
                width: "75%", 
                margin: "auto", 
                marginBottom: "2rem",
                fontWeight: "normal"
            }}>
                Through educational workshops and student-led projects, we provide students opportunities to <b>obtain experience in programming.</b>
            </h3>
            <hr></hr>
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
            <hr></hr>
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
            <hr></hr>
            <h3 style={{ 
                width: "75%", 
                margin: "auto", 
                marginTop: "2rem",
                fontWeight: "normal",
                overflowWrap: "break-word"
            }}>
                We are always open to exploring new areas of Computer Science, so if you are interested in leading that initiative, come join our <b>club meetings {clubSchedule}</b>. To learn more, email us at <b>{clubEmail}.</b>
            </h3>
        </div>
    )
}

export default WhatWeDo;