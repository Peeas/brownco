import React from 'react';
import classes from './Project.module.css';

const Project = props => {
    return (
        <div className={classes.ProjectContainer}>

            <div className={classes.ProjectTextContainer}>
                <div>
                    <div className={classes.Orangebar}></div>
                    <div className={classes.SectionHeader}>{props.projectTitle}</div>
                    <div className={classes.ConcreteCopy}>{props.projectText}</div>
                </div>
            </div>

            <div className={classes.ProjectImageContainer}>
                <img className={classes.ProjectImage} src={props.projectImage} alt={props.projectAlt}/>
            </div>

        </div>
    );
}

export default Project;
