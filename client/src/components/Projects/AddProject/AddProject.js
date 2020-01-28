import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './AddProject.module.css';
import axios from 'axios';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class AddProject extends Component {
  state = {
    addProjectForm: {
      title: '',
      description: '',
      image: '',
      imagePosition: 'right'
    },
    imageName: '',
    isEdit: false
  };
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
    let fileName = file.name;
    let updatedForm = {
      ...this.state.addProjectForm
    };
    updatedForm[event.target.name] = file;
    this.setState({
      addProjectForm: updatedForm,
      imageName: fileName
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    console.log(this.state.addProjectForm);
    const token = localStorage.getItem('token');
    try {
      let project = new FormData();
      project.append('image', this.state.addProjectForm.image);
      project.append('title', this.state.addProjectForm.title);
      project.append('description', this.state.addProjectForm.description);
      project.append('imagePosition', this.state.addProjectForm.imagePosition)
      console.log('project', project);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`
        }
      };
      const res = await axios.post(`/api/project/add-project`, project, config);
      console.log('res', res);
      if (res && res.status === 200) {
        alert('Project added Successfully!');
        this.props.toggleClose();
      }
    } catch (err) {
      console.log('error');
      alert('Error adding project!');
      this.props.toggleClose();
    }
  };
  render() {
    return (
      <div className={classes.AddProjectContainer}>
        <div>New Project</div>
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
          />
          <label htmlFor='image'>Project Image</label>
          <TextField
            id='image'
            name='image'
            type='file'
            accept='image/*'
            className={classes.textField}
            onChange={event => this.handleImageChange(event)}
            margin='normal'
            variant='outlined'
          />
          <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Image Position</FormLabel>
            <RadioGroup
                aria-label="position"
                name="imagePosition"
                value={this.state.addProjectForm.imagePosition}
                onChange={event => this.handleChange(event)}>
                <FormControlLabel value="left" control={<Radio />} label="Left" />
                <FormControlLabel value="right" control={<Radio />} label="Right" />
            </RadioGroup>

          </FormControl>
          <div className={classes.ProjectActionRow}>
            <Button variant='contained' type='submit' color='primary'>
              Add Project
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
