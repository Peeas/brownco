import React, { Component, Fragment } from 'react'
import authContext from '../../context/auth-context';
import Button from '@material-ui/core/Button';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';
import AddProject from './AddProject/AddProject';
import classes from './Projects.module.css'
import Hero from '../UI/Hero/Hero';
import ProjectList from './ProjectList/ProjectList';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
class Projects extends Component {
    state = {
        projects: [],
        loading: true,
        showJobModal: false
    }
    static contextType = authContext;
    componentDidMount() {
        this.getProjects();
    }

    getProjects = async () => {
        this.setState({
            loading: true
        })
        try {
            const res = await axios.get('/api/project/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let data = res.data;
            let projects = [];
            data.forEach(project => projects.push(project));
            this.setState({
                loading: false,
                projects: projects
            })
        } catch(err) {
            console.log(err);
            this.setState({loading:false})
        }
    }
    toggleClose = () => {
        this.setState({
            showJobModal: !this.state.showJobModal
        });
    }

    render() {
        return (
            <Fragment>
                    {
                        this.state.loading ? (
                            <div  className={classes.ProjectsContainer}>
                                <Loader />
                            </div>
                        ) : (
                            <div>
                                <ResponsiveDialog
                                    isOpen={this.state.showJobModal === true}
                                    onClose={this.toggleClose}>
                                        <AddProject toggleClose={this.toggleClose} />
                                </ResponsiveDialog>
                                <div className={classes.ProjectsContainer}>
                                    <Hero heroText={'Projects'} />
                                    <ProjectList projects={this.state.projects} />
                                    {
                                        this.context.authenticated ?
                                            (
                                                <div className={classes.AddProjectContainer}>
                                                    <Button onClick={this.toggleClose} color="primary">
                                                        + Add Project
                                                    </Button> 
                                                </div>
                                            )
                                        : ''
                                    }
                                </div>
                            </div>
                        )
                    }
            </Fragment>
        )
    }
}

export default Projects;