import React from "react";


const ProjectCard = ({name, image, description}) => {
  
    return (
        <section className="project-section">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
        </section>
    )
}

export default ProjectCard