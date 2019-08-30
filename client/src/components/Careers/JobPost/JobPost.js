import React, { Component, Fragment } from 'react';
import classes from './JobPost.module.css';
import Button from '@material-ui/core/Button';
import Loader from '../../UI/Loader/Loader';
import axios from 'axios'
import AuthContext from '../../../context/auth-context';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ResponsiveDialog from '../../UI/ResponsiveDialog/ResponsiveDialog';
import NewJobPost from '../NewJobPost/NewJobPost';
axios.defaults.baseURL = "http://localhost:5000";

class JobPost extends Component {
    state = {
        title: this.props.title,
        fileName: '',
        showDelete: false,

    }
    static contextType = AuthContext;

    inputRef = React.createRef();

    handleChange = (event) => {
        let file = this.inputRef.current.files[0];
        let fileName = file.name;

        this.setState({
            fileName: fileName
        })
        
    }

    handleUpload = async () =>{
        const obj = {
            resume: this.inputRef.current.files,
            jobTitle: this.state.title
        }
        try {
            const res = await axios.post('/api/jobs/resume', obj, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch(err) {
            console.log(err)
        }
    }

    handleDelete = () => {
        this.setState({
            showDelete: true
        })
    }

    toggleClose = (status) => {
        this.setState({
            showDelete: false,
            showEdit: false
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
    render () {
        let loading;
        if (this.state.loading) {
            loading = <Loader></Loader>
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
                    isOpen={this.state.showEdit === true}
                    onClose={()=>{this.setState({showEdit: false})}}
                    >
                        <NewJobPost onCloseEdit={(status)=>this.toggleClose(status)} isEdit={true} job={this.props.job}/>
                </ResponsiveDialog>
            <div className={classes.PostContainer}>
                <div className={classes.ResumeRow}>
                <div className={classes.JobTitle}>{this.props.title}</div>
                    {this.context.authenticated ?
                    <div>
                        <Fab color="primary" aria-label="edit" >
                            <EditIcon onClick={this.handleEdit} />
                        </Fab>
                        <Fab color="secondary" onClick={this.handleDelete} aria-label="edit">
                            <DeleteIcon />
                        </Fab>
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
                    <label htmlFor="resume" className={classes.SubmitResume}>SUBMIT RESUME</label>
                    <input
                        ref={this.inputRef}
                        type="file"
                        name="resume"
                        id="resume"
                        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,.pdf"
                        className={classes.ResumeUpload}
                        onChange={this.handleChange}
                        value={this.state.resume} />
                </form>
                <div className={classes.ResumeRow}>
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
