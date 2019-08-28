import React, { Component } from 'react'
import classes from './NewJobPost.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000";

class NewJobPost extends Component {
    state = {
        jobPostForm: {
            jobTitle: '',
            responsibilities: '',
            requirements: ['requirement 1']
        }
    }

    handleChange = (event) => {
        const updatedForm = {
            ...this.state.jobPostForm
        }
        updatedForm[event.target.name] = event.target.value;
        this.setState({
            loginForm: updatedForm
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: this.state.loginForm.userName,
            password: this.state.loginForm.password
        }
        this.context.login(user);
    }
    render() {
        return (
        <div className={classes.AuthContainer}>
                <div>
                    Job Post
                </div>
                <form onSubmit={e => this.onSubmit(e)} autoComplete="off">
                    <div>
                        <TextField
                            id="jobTitle"
                            name="jobTitle"
                            label="jobTitle"
                            type="email"
                            value={this.state.jobPostForm.jobTitle}
                            className={classes.textField}
                            onChange={(event)=> this.handleChange(event)}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="responsibilities"
                            name="responsibilities"
                            label="responsibilities"
                            type="responsibilities"
                            value={this.state.jobPostForm.responsibilities}
                            className={classes.textField}
                            onChange={(event)=> this.handleChange(event)}
                            margin="normal"
                            variant="filled"
                            multiline
                            rows="4"
                        />
                    </div>
                    {this.state.jobPostForm.requirements.map((requirment, i) => {
                        return (
                            <div key={i}>
                                <TextField
                                    id="requirements{i}"
                                    name="requirements{i}"
                                    label="requirements"
                                    type="requirements"
                                    value={requirment}
                                    className={classes.textField}
                                    onChange={(event)=> this.handleChange(event)}
                                    margin="normal"
                                    variant="filled"
                                 
                                />
                            </div>
                        )

                    })
                    }
                    <div className={classes.ActionRow}>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default NewJobPost;