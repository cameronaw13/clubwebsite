import React from 'react'

import "./Projects.css"
import ProjectCard from "./ProjectCard.tsx"
import * as projectsJSON from "./projects.json";

const Projects: React.FC = () => {
    const projects = projectsJSON.projects;
    window.scrollTo(0,0);
    return (
        <div>
            <h1 style={{
                textAlign: "center", 
                fontSize: "36px",
                color: "var(--COC-Blue)"
            }}>
                PROJECTS
            </h1>
            <div className="Projects">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    name={project.name}
                    description={project.description}
                    developers={project.developers}
                    tech={project.tech}
                    github={project.github}
                    image={project.image}
                />
            ))}
        </div>
        </div>
    )
}

export default Projects;