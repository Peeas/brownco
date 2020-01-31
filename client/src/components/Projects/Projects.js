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
        showEditModal: false,
        editMode: false,
        editProject: ''
    }
    static contextType = authContext;
    componentDidMount() {
        window.scrollTo(0, 0);
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
            let projs = [];
            data.forEach(el => projs.push(el));            
            this.setState({projects: projs, loading: false})
            this.setState({
                loading: false,
                projects: projs
            })
        } catch(err) {
            console.log(err);
            this.setState({loading:false})
        }
    }
    toggleClose = () => {
        this.setState({
            editMode: false,
            showEditModal: !this.state.showEditModal
        });
        this.getProjects();
    }

    onLauchEdit = (e) => {
        let editProject = this.state.projects.find(project => {
            return project._id === e
        })
        this.setState({
            editMode: true,
            showEditModal: true,
            editProject: editProject
        })
    }

    onDeleteProject = async(id) => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.delete(`/api/project/${id}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `${token}`
                }
            })
            if (res && res.status === 200) {
                alert('Project successfully removed');
                this.getProjects();
            }
        } catch(err) {
            alert('Error removing project!');
            console.error('error: ', err)
        }
    }

    render() {
        return (
            <Fragment>
                    {
                        this.state.loading ? (
                            <div className={classes.ProjectsContainer}>
                                <Loader />
                            </div>
                        ) : (
                            <div>
                                <ResponsiveDialog
                                    isOpen={this.state.showEditModal === true}
                                    onClose={this.toggleClose}>
                                        <AddProject
                                            editMode={this.state.editMode}
                                            project={this.state.editProject}
                                            toggleClose={this.toggleClose} />
                                </ResponsiveDialog>
                                <div className={classes.ProjectsContainer}>
                                    <Hero
                                        bgImageAlt={'projects-bg-image-brownco'}
                                        heroText={'Projects'} />
                                    {
                                        this.state.projects.length === 0 ? <div className={classes.ProjectsEmpty}><h1> Projects coming soon </h1></div>: (
                                        <ProjectList
                                            launchEdit={(id)=> this.onLauchEdit(id)}
                                            projects={this.state.projects}
                                            deleteProject={(id) => this.onDeleteProject(id)} />
                                        )
                                    }
                                    
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