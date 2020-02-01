import React, { Component } from 'react';
import classes from './AddPage.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router';

class AddPage extends Component {
  constructor(props) {
    super(props);
    let name = props.isEdit ? props.page.name : '';
    let metaTitle = props.isEdit && props.page.meta ? props.page.meta.title : '';
    let metaDescription = props.isEdit && props.page.meta ? props.page.meta.description : '';

    this.state = {
      pageForm: {
        name: name,
        image: '',
        metaTitle: metaTitle,
        metaDescription: metaDescription
      },
      isEdit: props.isEdit
    };
  }
  handleChange = (event, i) => {
    const updatedForm = {
      ...this.state.pageForm
    };
    updatedForm[event.target.name] = event.target.value;
    this.setState({
      pageForm: updatedForm
    });
  };
  handleImageChange = (event, i) => {
    let file = event.target.files[0];
    // let size = (file.size / 1024 / 1024).toFixed(2);

    // let fileName = file.name;
    let updatedForm = {
      ...this.state.pageForm
    };
    updatedForm[event.target.name] = file;
    this.setState({
      pageForm: updatedForm,
      imageError: ''
    });
  };
  onSubmit = async e => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    try {
      let page = new FormData();
      if (
        !this.state.isEdit ||
        (this.state.isEdit && this.state.pageForm.image !== '')
      ) {
        page.append('image', this.state.pageForm.image);
      }
      if (!this.state.isEdit && this.state.pageForm.image === '') {
        alert('please add an image');
        return;
      }
      page.append('name', this.state.pageForm.name);
      page.append('metaTitle', this.state.pageForm.metaTitle);
      page.append('metaDescription', this.state.pageForm.metaDescription);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`
        }
      };
      let res;
      if (!this.state.isEdit) {
        res = await axios.post(`/api/pages/add-page`, page, config);
      } else {
        res = await axios.put(
          `/api/pages/${this.props.page._id}`,
          page,
          config
        );
      }
      if (res && res.status === 200) {
        if (!this.state.isEdit) {
          alert('Page added Successfully!');
          this.props.history.push(`/projects/${res.data._id}`);
        } else {
          alert('Page updated Successfully!');
        }
        this.props.toggleClose();
      }
    } catch (err) {
      console.error('error', err);
      alert('Error adding page!');
      this.props.toggleClose();
    }
  };
  render() {
    return (
      <div className={classes.AddPageContainer}>
        <div>
          {this.state.isEdit ? 'Edit' : 'Add'} Page{' '}
          {this.state.isEdit &&
          this.props.page._id !== '5e34a6c0ef581f9be4741ef5' &&
          this.props.canDelete ? (
            <span>
              <IconButton onClick={this.props.onDeletePage}>
                <DeleteIcon />
              </IconButton>
            </span>
          ) : (
            ''
          )}
        </div>

        <form
          className={classes.PageForm}
          onSubmit={e => this.onSubmit(e)}
          id='projectForm'>
          <TextField
            id='Name'
            name='name'
            label='Page Name'
            type='text'
            value={this.state.pageForm.name}
            className={classes.textField}
            onChange={event => this.handleChange(event)}
            margin='normal'
            variant='filled'
            inputProps={{ maxLength: 50 }}
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
          <div>Meta Tags</div>
          <TextField
            id='metaTitle'
            name='metaTitle'
            label='Meta Title'
            type='text'
            value={this.state.pageForm.metaTitle}
            className={classes.textField}
            onChange={event => this.handleChange(event)}
            margin='normal'
            variant='filled'
            inputProps={{ maxLength: 50 }}
          />
          <TextField
            id='metaDescription'
            name='metaDescription'
            label='Meta Description'
            type='text'
            value={this.state.pageForm.metaDescription}
            className={classes.textField}
            onChange={event => this.handleChange(event)}
            margin='normal'
            variant='filled'
            rows='4'
            multiline
            inputProps={{
              maxLength: 808
            }}
          />
          <div className={classes.ProjectActionRow}>
            <Button variant='contained' type='submit' color='primary'>
              {this.state.isEdit ? 'Update' : 'Add'} Page
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddPage);
