import React, { Component } from 'react'
import classes from './NewJobPost.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
axios.defaults.baseURL = "http://localhost:5000";

class NewJobPost extends Component {
    state = {
        jobPostForm: {
            title: '',
            responsibilities: '',
            requirements: ['requirement 1'],
        },
        isEdit: false

    }

    componentDidMount() {
        if (this.props.isEdit) {
            let jobs = this.state.jobPostForm;
            jobs.title = this.props.job.title;
            jobs.responsibilities = this.props.job.responsibilities
            jobs.requirements = this.props.job.requirements
            this.setState({
                jobPostForm: jobs,
                isEdit: true
            })
        }
        
    }

    handleChange = (event, i) => {
        const updatedForm = {
            ...this.state.jobPostForm
        }
        
        if (event.target.name !== "requirements") {
            updatedForm[event.target.name] = event.target.value;
        } else {
            updatedForm[event.target.name].splice(i, 1, event.target.value)
            
        }
        this.setState({
            jobPostForm: updatedForm
        });
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const jobPost = this.state.jobPostForm;
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            }
            const body = JSON.stringify(jobPost);
            let res
            if (this.props.isEdit) {
                res = await axios.put(`/api/jobs/${this.props.job._id}`, body, config);
                if (res.status === 200) {
                    this.props.onCloseEdit(false)
                }
            } else {
                res = await axios.post('/api/jobs', body, config);
                if (res.status === 200) {
                    this.props.addJob(res.data)
                    // this.props.toggleClose()
                }
            }

        } catch(err) {
            console.error(err)
        }
    }
    onAddRequirement = () => {
        const updatedForm = {
            ...this.state.jobPostForm
        }
        updatedForm['requirements'].push('New Requirement');
        this.setState({
            jobPostForm: updatedForm
        })
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
                            id="title"
                            name="title"
                            label="job Title"
                            type="text"
                            value={this.state.jobPostForm.title}
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
                            label="Responsibilities"
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
                                    name="requirements"
                                    label="Requirements"
                                    type="requirements"
                                    value={requirment}
                                    className={classes.textField}
                                    onChange={(event)=> this.handleChange(event, i)}
                                    margin="normal"
                                    variant="filled"
                                 
                                />
                            </div>
                        )
                    })
                    }
                    <div className={classes.AddRequirement}>
                        <Button onClick={this.onAddRequirement} color="primary">
                            + Add Requirement
                        </Button>
                    </div>
                    <div className={classes.ActionRow}>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default NewJobPost;