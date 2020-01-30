import React from 'react';
import Project from '../Project/Project';
import classes from './ProjectList.module.css';

const ProjectList = (props) => {
    return (
        <div>
            {props.projects.map((project, i) => (
                <Project
                    key={project._id}
                    id={project._id}
                    className={classes.ProjectContainer}
                    projectTitle={project.title}
                    projectText={project.description}
                    projectImage={project.file}
                    imagePosition={project.imagePosition}
                    onLaunchEdit={(id) => props.launchEdit(id)}
                    onDeleteProject={(id) => props.deleteProject(id)}
                />
            ))}
        </div>
    );
}

export default ProjectList;
