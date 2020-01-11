import React, { Component, Fragment } from 'react'
import authContext from '../../context/auth-context';
import Button from '@material-ui/core/Button';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';
import AddProject from './AddProject/AddProject';
import classes from './Projects.module.css'
import Hero from '../UI/Hero/Hero';
import Project from './Project/Project';
class Projects extends Component {
    state = {
        projects: [],
        loading: false,
        showJobModal: false
    }
    static contextType = authContext;

    toggleClose = () => {
        this.setState({
            showJobModal: !this.state.showPost
        });
    }

    render() {
        return (
            <Fragment>
                <ResponsiveDialog
                    isOpen={this.state.showJobModal === true}
                    onClose={this.toggleClose}>
                        <AddProject></AddProject>
                </ResponsiveDialog>
                <div className={classes.ProjectsContainer}>
                    <Hero heroText={'Projects'} />
                    <Project 
                        projectTitle={'Concrete Construction'}
                        projectText={"Brownco Construction Company, Inc performs new concrete projects as well as concrete repairs, refurbishment and facility concrete maintenance. From site preparation, formwork, prefabrication, placement to finish, Brownco will complete your concrete projects in a timely, efficient and safe manner."}
                        projectImage={'https://i.ytimg.com/vi/NCZ0eg1zEvw/maxresdefault.jpg'}/>

                    {
                        this.context.authenticated ?
                            (
                                <Button onClick={this.toggleClose} color="primary">
                                    + Add Project
                                </Button> 
                            )
                        : ''
                    }
                </div>
            </Fragment>
        )
    }
}

export default Projects;