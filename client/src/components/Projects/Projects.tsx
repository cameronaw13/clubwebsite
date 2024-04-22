import React, { useEffect, useState } from 'react'
import { collection, getDocs, DocumentData} from "firebase/firestore"
import { db } from "../../firebase.js"

import "./Projects.css"
import ProjectCard from "./ProjectCard.tsx"

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<DocumentData[]>();

    // TODO: Add pagination
    const fetchCollection = async (name) => {
        const queryDocs = await getDocs(collection(db, name));
        const queryData = queryDocs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setProjects(queryData);
    }

    useEffect(() => {
        try {
            fetchCollection("projects");
        } catch(e) {
            console.log(e);
        }
    }, []);

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