import React from 'react';
import classes from './Project.module.css';
import useWindowDimensions from '../../../utils/useWindowDimensions';

const Project = props => {
    const { width } = useWindowDimensions();
    return (
        <div className={classes.ProjectContainer}>
            <div style={{order: (props.imagePosition === 'left' && width > 700) ? '2' : '1'}} className={classes.ProjectTextContainer}>
                <div>
                    <div className={classes.Orangebar}></div>
                    <div className={classes.SectionHeader}>{props.projectTitle}</div>
                    <div className={classes.ConcreteCopy}>{props.projectText}</div>
                </div>
            </div>
            <div style={{order: (props.imagePosition === 'left' && width > 700) ? '1' : '2'}} className={classes.ProjectImageContainer}>
                <img className={classes.ProjectImage} src={props.projectImage} alt={props.projectAlt}/>
            </div>
        </div>
    );
}

export default Project;
