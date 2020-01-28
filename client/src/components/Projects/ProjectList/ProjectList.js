import React from 'react';
import Project from '../Project/Project';
import classes from './ProjectList.module.css'
const ProjectList = (props) => {
    return (
        <div>
            {props.projects.map((project, i) => (
                <Project
                    key={i}
                    className={classes.ProjectContainer}
                    projectTitle={project.title}
                    projectText={project.description}
                    projectImage={project.file}
                    imagePosition={project.imagePosition}
                />
            ))}
        </div>
    );
}

export default ProjectList;
