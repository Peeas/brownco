import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './AddProject.module.css';
import axios from 'axios';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Loader from '../../UI/Loader/Loader';

class AddProject extends Component {
  constructor(props) {
    super(props);
    let projectForm;
    if (props.editMode) {
      projectForm = {
        title: props.project.title,
        description: props.project.description,
        image: '',
        imagePosition: props.project.imagePosition
      };
    } else {
      projectForm = {
        title: '',
        description: '',
        image: '',
        imagePosition: 'right'
      };
    }
    this.state = {
      addProjectForm: projectForm,
      imageName: '',
      isEdit: props.editMode,
      imageError: '',
      loading: false
    };
  }

  handleChange = (event, i) => {
    const updatedForm = {
      ...this.state.addProjectForm
    };
    updatedForm[event.target.name] = event.target.value;
    this.setState({
      addProjectForm: updatedForm
    });
  };
  handleImageChange = (event, i) => {
    let file = event.target.files[0];
    let size = (file.size / 1024 / 1024).toFixed(2);
    if (file && size > 3) {
      this.setState({
        imageError: 'please select an image under 3 mb'
      });
    } else {
      let fileName = file.name;
      let updatedForm = {
        ...this.state.addProjectForm
      };
      updatedForm[event.target.name] = file;
      this.setState({
        addProjectForm: updatedForm,
        imageName: fileName,
        imageError: ''
      });
    }
  };
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    if (this.state.imageError) {
      alert('Please select an image under 3mb. Larger images will affect site performance');
      this.setState({ loading: false });
      return;
    }
    const token = localStorage.getItem('token');
    try {
      let project = new FormData();
      if (
        !this.state.isEdit ||
        (this.state.isEdit && this.state.addProjectForm.image !== '')
      ) {
        project.append('image', this.state.addProjectForm.image);
      }
      if (this.state.addProjectForm.title === '' || this.state.addProjectForm.description === '') {
        alert('Title and Description are required');
        this.setState({ loading: false });
        return;
      }
      if (!this.state.isEdit && this.state.addProjectForm.image === '') {
        alert('please add an image');
        this.setState({ loading: false });
        return;
      }
      project.append('title', this.state.addProjectForm.title);
      project.append('description', this.state.addProjectForm.description);
      project.append('imagePosition', this.state.addProjectForm.imagePosition);
      project.append('pageId', this.props.page._id);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`
        }
      };
      let res;
      if (!this.state.isEdit) {
        res = await axios.post(`/api/project/add-project`, project, config);
      } else {
        res = await axios.put(
          `/api/project/${this.props.project._id}`,
          project,
          config
        );
      }
      if (res && res.status === 200) {
        this.setState({ loading: false });
        if (!this.state.isEdit) {
          alert('Project added Successfully!');
        } else {
          alert('Project updated Successfully!');
        }
        this.props.toggleClose();
      }
    } catch (err) {
      console.error('error', err);
      this.setState({ loading: false });
      alert('Error adding project!');
      this.props.toggleClose();
    }
  };
  render() {
    return (
      <div className={classes.AddProjectContainer}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div>{this.state.isEdit ? 'Edit' : 'Add'} Project</div>
            <form
              className={classes.ProjectForm}
              onSubmit={e => this.onSubmit(e)}
              id='projectForm'>
              <TextField
                id='title'
                name='title'
                label='Project Title'
                type='text'
                value={this.state.addProjectForm.title}
                className={classes.textField}
                onChange={event => this.handleChange(event)}
                margin='normal'
                variant='filled'
                inputProps={{ maxLength: 50 }}
              />
              <TextField
                id='description'
                name='description'
                label='Project Description'
                multiline
                rows='4'
                value={this.state.addProjectForm.description}
                className={classes.textField}
                onChange={event => this.handleChange(event)}
                margin='normal'
                variant='filled'
                inputProps={{
                  maxLength: 808
                }}
              />
              <label htmlFor='image'>
                {!this.state.isEdit ? (
                  'Project Image'
                ) : (
                  <span>
                    New Image <i> (leave blank for existing image) </i>
                  </span>
                )}
              </label>
              <TextField
                id='image'
                name='image'
                type='file'
                error={this.state.imageError !== ''}
                className={classes.textField}
                helperText={this.state.imageError}
                onChange={event => this.handleImageChange(event)}
                margin='normal'
                variant='outlined'
                inputProps={{ accept: 'image/*' }}
              />
              <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Image Position</FormLabel>
                <RadioGroup
                  aria-label='position'
                  name='imagePosition'
                  value={this.state.addProjectForm.imagePosition}
                  onChange={event => this.handleChange(event)}>
                  <FormControlLabel
                    value='left'
                    control={<Radio />}
                    label='Left'
                  />
                  <FormControlLabel
                    value='right'
                    control={<Radio />}
                    label='Right'
                  />
                </RadioGroup>
              </FormControl>
              <div className={classes.ProjectActionRow}>
                <Button variant='contained' type='submit' color='primary'>
                  {this.state.isEdit ? 'Update' : 'Add'} Project
                </Button>
              </div>
            </form>
          </Fragment>
        )}
      </div>
    );
  }
}

export default AddProject;
