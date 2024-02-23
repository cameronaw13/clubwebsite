import React from 'react'

import "./Projects.css"
import ProjectCard from "./ProjectCard.tsx"
import * as projectsJSON from "./projects.json";

const Projects: React.FC = () => {
    const projects = projectsJSON.projects;
    return (
        <div className="Projects">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    name={project.name}
                    description={project.description}
                    tech={project.tech}
                    github={project.github}
                    image={project.image}
                />
            ))}
        </div>
    )
}

export default Projects;