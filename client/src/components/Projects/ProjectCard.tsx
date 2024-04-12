import React from 'react'

interface ProjectCardInterface {
    name: string,
    description: string,
    tech: string[]
    link?: string
    image?: string
}

const ProjectCard: React.FC<ProjectCardInterface> = ({
    name = "Project Name", 
    description = "Project Description", 
    tech = ["N/A"],
    link = "",
    image = ""
}) => {
    return (
        <div className="ProjectCard">
            {/* Renders green image when true */}
            {/* {image
                ? <img src="https://www.formica.com/-/media/project/formica/global/products/swatch-images/07897/07897-swatch.jpg"/>
                : <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"/>} */}
            {/* TO-DO: Link image variable to images in assets folder */}
            <img src={image || "https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"}></img>
            <h3>
                {name}
                {link && <> - <a href={link}>GitHub</a></>}
            </h3>
            <p>{description}</p>
            <p><b>Technologies Used:</b> {tech.join(", ")}</p>
        </div>
    )
}

export default ProjectCard;