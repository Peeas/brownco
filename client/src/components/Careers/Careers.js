import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';

import classes from './Careers.module.css';
import AuthContext from '../../context/auth-context'
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import JobPost from './JobPost/JobPost';
import NewJobPost from './NewJobPost/NewJobPost';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';

axios.defaults.baseURL = "http://localhost:5000";

class Careers extends Component {
    state = {
        jobs: [],
        loading: false,
        showPost: false
    }
    static contextType = AuthContext;

    componentDidMount() {
        const token = localStorage.getItem('token');

        console.log(this.context.authenticated)
        this.getJobs();
    }

    getJobs = () => {
        this.setState({
            loading: true
        })
   
            const config = {
                
            }
         axios.get('/api/jobs/', {
            headers: {
                'Content-Type': 'application/json'
            }
         }).then((res) => {
            console.log('res', res.data[0]);
            let data = res.data
            let jobs = [];
            data.forEach(job => jobs.push(job));
            console.log(jobs)
            this.setState({
                loading: false,
                jobs: jobs
            })
         })
         .catch(error => {
             console.error(error)
             this.setState({
                loading: false,
            })
         })
    }

    toggleClose = () => {
        this.setState({
            showPost: !this.state.showPost
        })
    }
    render() {
        let posts;
        let jobs = this.state.jobs;
        console.log('JOBS', jobs)
        

        if (this.state.loading) {
            posts = (
            <div className={classes.Spinner}>
                <Loader />
            </div>
            )
        }

        if (jobs.length > 0) {
            posts = (
                <div className={classes.JobpostContainer}>
                    
                    { jobs.map((job, i) => {
                        let title = job.title;
                        let requirements = job.requirements;
                        let responsibilities = job.responsibilities
                        console.log(title)
                        return (
                            <div key={i}>
                                <JobPost
                                    title={title}
                                    requirements={requirements}
                                    responsibilities={responsibilities} />
                            </div>
                        )
                    })

                    }
                </div>
            )
        } else {
            posts = (
                <div className={classes.JobpostContainer}>
                    No current openeings
                </div>
            )
        }
        return (
            <Fragment>
                <ResponsiveDialog
                    isOpen={this.state.showPost === true}
                    onClose={this.toggleClose}>
                        <NewJobPost />
                </ResponsiveDialog>

                <div className={classes.CareersContainer}>
                    <div className={classes.CareersHero}>
                            <div className={classes.CareersTitle}>Available Positions</div>
                    </div>
                    {posts}
                    <div className={classes.AddPostBtn} >
                        {this.context.authenticated ? <Button onClick={this.toggleClose}variant="contained" color="primary" >
                        Add Job Post
                    </Button> : ''}
                    </div>
    
                </div>
            </Fragment>

        )
      
    }
}

export default Careers;