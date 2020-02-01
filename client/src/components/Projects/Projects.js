import React, { Component, Fragment } from 'react';
import authContext from '../../context/auth-context';
import Button from '@material-ui/core/Button';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';
import AddProject from './AddProject/AddProject';
import classes from './Projects.module.css';
import Hero from '../UI/Hero/Hero';
import ProjectList from './ProjectList/ProjectList';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import AddPage from './AddPage/AddPage';
import Meta from '../Meta/Meta';

class Projects extends Component {
  state = {
    page: null,
    projects: [],
    loading: true,
    showEditModal: false,
    editMode: false,
    editProject: '',
    showAddPage: false,
    title: 'Projects',
    heroImage: null,
    id: null,
    pageEdit: false
  };

  static contextType = authContext;

  componentDidMount() {
    this.init();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.id !== state.id) {
      return { id: props.match.params.id };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.state.id) {
      this.init();
    }
  }

  init = () => {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    if (id) {
      this.setState({ id: id });
      this.getPage(id);
    } else {
      this.setState({ loading: false });
    }
  };

  getPage = async id => {
    this.setState({ loading: true });
    try {
      const res = await axios.get(`/api/pages/${id}`, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (res && res.status === 200) {
        this.setState({
          page: res.data,
          projects: res.data.projects,
          title: res.data.name,
          heroImage: '/' + res.data.file
        });
        this.setState({ loading: false });
      }
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  };

  toggleClose = () => {
    this.setState({
      editMode: false,
      showEditModal: !this.state.showEditModal
    });
    this.init();
  };

  onLauchEdit = e => {
    let editProject = this.state.projects.find(project => {
      return project._id === e;
    });
    this.setState({
      editMode: true,
      showEditModal: true,
      editProject: editProject
    });
  };

  onDeleteProject = async id => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.delete(
        `/api/project/${id}/page/${this.state.page._id}`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`
          }
        }
      );
      if (res && res.status === 200) {
        alert('Project successfully removed');
        this.init();
      }
    } catch (err) {
      alert('Error removing project!');
      console.error('error: ', err);
    }
  };
  onLaunchAddPage = bool => {
    this.setState({
      pageEdit: bool,
      showAddPage: true
    });
  };
  onClosePage = () => {
    this.context.getPages();
    this.init();
    this.setState({ showAddPage: false });
  };
  onDeletePage = () => {
    this.state.projects.forEach(project => {
      this.onDeleteProject(project._id);
    });
    if (this.state.projects.length === 0) {
      this.deletePage(this.state.page._id);
    }
  };

  deletePage = async id => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.delete(`/api/pages/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`
        }
      });
      if (res && res.status === 200) {
        alert('Page deleted');
        this.context.getPages();
        this.props.history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <div className={classes.ProjectsContainer}>
            <Loader />
          </div>
        ) : (
          <div>
            <ResponsiveDialog
              isOpen={this.state.showEditModal}
              onClose={this.toggleClose}>
              <AddProject
                page={this.state.page}
                editMode={this.state.editMode}
                project={this.state.editProject}
                toggleClose={this.toggleClose}
              />
            </ResponsiveDialog>
            <ResponsiveDialog
              isOpen={this.state.showAddPage}
              onClose={this.onClosePage}>
              <AddPage
                canDelete={this.state.projects.length === 0}
                onDeletePage={() => this.onDeletePage()}
                isEdit={this.state.pageEdit}
                page={this.state.page}
                toggleClose={this.onClosePage}
              />
            </ResponsiveDialog>
            <div className={classes.ProjectsContainer}>
              <Meta
                title={this.state.page.meta && this.state.page.meta.title ? this.state.page.meta.title + ' | Brownco' : 'Projects | Brownco'}
                description={this.state.page.meta && this.state.page.meta.description ? this.state.page.meta.description : ''}
              />
              <Hero
                projectPage={this.state.page !== null}
                onEditPage={() => this.onLaunchAddPage(true)}
                authenticated={this.context.authenticated}
                bgImageAlt={'projects-bg-image-brownco'}
                heroImage={this.state.heroImage}
                heroText={this.state.title}
              />
              {this.state.projects.length === 0 ? (
                <div className={classes.ProjectsEmpty}>
                  <h1> Projects coming soon </h1>
                </div>
              ) : (
                <ProjectList
                  launchEdit={id => this.onLauchEdit(id)}
                  projects={this.state.projects}
                  deleteProject={id => this.onDeleteProject(id)}
                />
              )}

              {this.context.authenticated ? (
                <div className={classes.AddProjectContainer}>
                  {this.state.page !== null ? (
                    <Button onClick={this.toggleClose} color='primary'>
                      + Add Project Row
                    </Button>
                  ) : (
                    ''
                  )}
                  <Button
                    onClick={() => this.onLaunchAddPage(false)}
                    variant='contained'
                    color='primary'>
                    + Add Project Page
                  </Button>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Projects;
