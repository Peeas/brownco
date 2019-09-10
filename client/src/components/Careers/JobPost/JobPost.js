import React, { Component, Fragment } from 'react';
import classes from './JobPost.module.css';
import Button from '@material-ui/core/Button';
import Loader from '../../UI/Loader/Loader';
import axios from 'axios'
import AuthContext from '../../../context/auth-context';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ResponsiveDialog from '../../UI/ResponsiveDialog/ResponsiveDialog';
import NewJobPost from '../NewJobPost/NewJobPost';

class JobPost extends Component {
    state = {
        title: this.props.title,
        fileName: '',
        showDelete: false,
        file: null,
        showSuccess: false,
        showFail: false
    }

    static contextType = AuthContext;

    handleChange = (event) => {
        let file = event.target.files[0];
        let fileName = file.name;
        this.setState({
            fileName: fileName,
            file: file
        })
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.setState({
            fileDataUri: reader.result
          }) 
        };
    }

    handleUpload = async () =>{
        const data = new FormData();
        data.append('file', this.state.file);
        const id = this.props.jobKey;
        try {
            const res = await axios.post(`/api/jobs/resume/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res && res.status === 200) {
                this.handleSuccess()
            }
        } catch(err) {
            console.error(err);
            this.setState({
                showFail: true,
                fileName: ''
            })
        }
    }
    handleSuccess = () => {
        this.setState({
            showSuccess: true,
            fileName: ''
        })
    }
    handleDelete = () => {
        this.setState({
            showDelete: true
        })
    }

    toggleClose = (status) => {
        this.setState({
            showDelete: false,
            showEdit: false,
            showSuccess: false,
            showFail: false,
        });
        if (status && status === true) {
            this.deletePost();
        }
    }

    deletePost = async () => {
        const token = localStorage.getItem('token');

        try {
            const res = await axios.delete(`/api/jobs/${this.props.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            if (res) {
                this.props.onRemove(this.props.id)
            }
        } catch(error) {
            console.error(error);
        }
    }
    handleEdit = () => {
        this.setState({
            showEdit: true
        })
    }
    closeEdit = (job) => {
        this.setState({
            showEdit: false,
        });
        this.props.updateJob(job)
    }
    render () {
        let loading;
        if (this.state.loading) {
            loading = <Loader />
        } else {
            loading = 'Upload'
        }
        return (
            <Fragment>

                <ResponsiveDialog
                    isOpen={this.state.showDelete === true}
                    onClose={(status)=>this.toggleClose(status)}
                    isDeleteJob={true}>

                        <div className={classes.MessagePadding}>
                            are you sure you want to delete?
                        </div>

                </ResponsiveDialog>

                <ResponsiveDialog
                    isOpen={this.state.showSuccess || this.state.showFail}
                    onClose={(status)=>this.toggleClose(status)}
                    isDeleteJob={false}>

                        <div className={classes.MessagePadding}>
                            {this.state.showSuccess ? 'success!' : 'Error sending resume please contact us'}
                        </div>

                </ResponsiveDialog>

                <ResponsiveDialog
                    isOpen={this.state.showEdit === true}
                    onClose={()=>{this.setState({showEdit: false})}}>
                        <NewJobPost
                            onCloseEdit={(job)=>this.closeEdit(job)}
                            isEdit={true}
                            job={this.props.job}/>
                </ResponsiveDialog>

                <div className={classes.PostContainer} key={this.props.jobKey}>

                    <div className={classes.ResumeRow}>

                        <div className={classes.JobTitle}>
                            {this.props.title}
                            
                        </div>
                         { this.context.authenticated ?
                            <div className={classes.JobActions}>
                                <div>Job ID: {this.props.jobKey}</div>
                                <div>
                                    <IconButton onClick={this.handleEdit} aria-label="edit">
                                        <EditIcon  />
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton color="secondary" onClick={this.handleDelete} aria-label="edit">
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                            : ''}
                        
                    </div>

                    <div className={classes.ResponsibilitiesTitle}>Responsibilities</div>

                    <div className={classes.Responsibilities}>{this.props.responsibilities}</div>

                    <div className={classes.RequirementTitle}>Requirements</div>

                    {this.props.requirements.map((el, key) => {
                        let requirement = el;
                        return (
                            <div className={classes.Requirement} key={key}> - {requirement}</div>
                        )
                    })}

                    <br/>

                    <form encType="multipart/form-data">
                        {!this.state.fileName ?
                               <label htmlFor={this.props.jobKey} className={classes.SubmitResume}>
                                    SUBMIT RESUME
                                </label>                 
                        : '' }

                        <input
                            type="file"
                            name="resume"
                            id={this.props.jobKey}
                            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,.pdf"
                            className={classes.ResumeUpload}
                            onChange={this.handleChange}
                            value={this.state.resume} />

                    </form>

                    <div className={classes.ResumeRow} key={this.props.jobKey}>
                        <div>{this.state.fileName}</div>
                        {this.state.fileName && this.state.fileName !== '' ? <Button onClick={this.handleUpload} variant="outlined">
                            {loading}
                        </Button> : ''}
                    </div>

                    <div className={classes.Bar}></div>

                </div>

            </Fragment>
        );
    }

}

export default JobPost;

