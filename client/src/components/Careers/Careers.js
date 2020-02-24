import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classes from './Careers.module.css';
import AuthContext from '../../context/auth-context';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import JobPost from './JobPost/JobPost';
import NewJobPost from './NewJobPost/NewJobPost';
import ResponsiveDialog from '../UI/ResponsiveDialog/ResponsiveDialog';
import Hero from '../UI/Hero/Hero';
import Meta from '../Meta/Meta';
import HeroCareers from '../../assets/images/hero-careers.jpg';

class Careers extends Component {
  state = {
    jobs: [],
    loading: false,
    showPost: false
  };
  static contextType = AuthContext;

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getJobs();
  }

  getJobs = async () => {
    this.setState({
      loading: true
    });
    try {
      const res = await axios.get('/api/jobs/', {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      let data = res.data;
      let jobs = [];
      data.forEach(job => jobs.push(job));
      this.setState({
        loading: false,
        jobs: jobs
      });
    } catch (err) {
      console.error(err);
      this.setState({
        loading: false
      });
    }
  };

  toggleClose = () => {
    this.setState({
      showPost: !this.state.showPost
    });
    this.getJobs();
  };
  handleNewJob = job => {
    const oldJobs = this.state.jobs;
    let newJobs = oldJobs.unshift(job);
    this.setState({
      jobs: newJobs
    });
    this.toggleClose();
  };
  handleRemove = () => {
    this.getJobs();
  };
  handleUpdate = job => {
    this.getJobs();
  };
  render() {
    let posts;
    let jobs = this.state.jobs;
    if (jobs.length > 0) {
      posts = (
        <div className={classes.JobpostContainer}>
          {jobs.map((job, i) => {
            let title = job.title;
            let requirements = job.requirements;
            let responsibilities = job.responsibilities;
            let id = job._id;
            return (
              <div className={classes.PostContainer} key={id}>
                <JobPost
                  job={job}
                  id={id}
                  title={title}
                  requirements={requirements}
                  responsibilities={responsibilities}
                  jobKey={id}
                  onRemove={() => this.handleRemove()}
                  updateJob={job => this.handleUpdate(job)}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      posts = (
        <div className={classes.JobpostContainer}>
          <div className={classes.Title}>No current openeings</div>
        </div>
      );
    }
    return (
      <div className={classes.CarrersContainerpage}>
        <Meta title={'Careers | Brownco Construction Co., Inc.'} description={"It's not easy work but it is rewarding. We are growing and looking for hardworking team players with grit! Submit a resume at Brownco Construction Co. Inc.’s website."} keywords={'Careers, Jobs, Openings, Work'} />
        <ResponsiveDialog
          isOpen={this.state.showPost === true}
          onClose={this.toggleClose}>
          <NewJobPost
            addJob={this.handleNewJob}
            toggleClose={this.toggleClose}
          />
        </ResponsiveDialog>

        <div className={classes.CareersContainer}>
          <Hero
            bgImageAlt={'Careers at Brownco'}
            heroText={'Available Positions'}
            heroImage={HeroCareers}
             />

          {this.state.loading ? (
            <div className={classes.Spinner}>
              <Loader />
            </div>
          ) : (
            <div>{posts}</div>
          )}
          <div className={classes.AddPostBtn}>
            {this.context.authenticated ? (
              <Button onClick={this.toggleClose} color='primary'>
                + Add Job Post
              </Button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;
