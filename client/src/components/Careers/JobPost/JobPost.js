import React from 'react';
import classes from './JobPost.module.css';
const JobPost = props => {
    
    return (
        <div>
            <div className={classes.JobTitle}>{props.title}</div>
            <div className={classes.ResponsibilitiesTitle}>Responsibilities</div>
            <div className={classes.Responsibilities}>{props.responsibilities}</div>
            <div className={classes.RequirementTitle}>Requirements</div>
            {props.requirements.map((el, key) => {
                let requirement = el;
                return (
                    <div className={classes.Requirement} key={key}> - {requirement}</div>
                )
            })}
            <div className={classes.SubmitResume}>SUBMIT RESUME</div>
            <div className={classes.Bar}></div>
        </div>
    );
}

export default JobPost;
