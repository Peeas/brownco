import React, { useContext } from 'react';
import classes from './Project.module.css';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import AuthContext from '../../../context/auth-context';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Project = props => {
    const isAuth = useContext(AuthContext);
    const { width } = useWindowDimensions();
    const onEditProject = () => {
        props.onLaunchEdit(props.id)
    }
    const onDeleteProject = () => {
        props.onDeleteProject(props.id)
    }
    return (
        <div className={classes.ProjectContainer}>
            <div style={{order: (props.imagePosition === 'left' && width > 700) ? '2' : '1'}} className={classes.ProjectTextContainer}>
                <div>
                    <div className={classes.Orangebar}></div>
                    <div className={classes.HeaderRow}>
                        <div className={classes.SectionHeader}>
                            {props.projectTitle}
                        </div>
                        {
                            isAuth.authenticated ? (
                                <div className={classes.ProjectEditAction}>
                                    <IconButton onClick={onEditProject} color="primary" aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={onDeleteProject} color="primary" aria-label="edit">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            ) : ''
                        }
                        
                    </div>
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
