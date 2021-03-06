import React, { Fragment } from 'react';
import classes from './TenantImprovement.module.css';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import tenantImprovementImage from '../../assets/images/hero-tenant-imrpovement.jpg';
import Hero from '../UI/Hero/Hero';
import Meta from '../Meta/Meta';
const TenantImprovement = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className={classes.WhatWeDoContainer}>
        <Meta
            title={'Tenant Improvement | Brownco Construction Co., Inc.'}
            description={
              "New offices, bathrooms, conference room - Call Brownco Construction Co Inc. for all your tenant improvements. Let's talk project!"
            }
          />
        <Hero
          bgImageAlt={'Brownco Tenant Improvement'}
          heroImage={tenantImprovementImage}
          heroText={'Tenant Improvement'}
        />
        <div className={classes.titleContainer}>
          <div>
          <p>
            Need to remodel a commercial office space? Brownco Construction
            Company Inc can add a bathroom and office space. Need to reconfigure
            a machinery line or area? Brownco can configure and install
            equipment foundations and assembly lines to exacting standards. No
            matter the project size, Brownco has the depth and experience to
            develop cost effective plans and provide the leadership and
            direction to manage your projects from conception to completion.
            </p>
          </div>
        </div>
        <div className={classes.SolutionsContainer}>
          <div>
            <div className={classes.StructuralSub}>
            <h2>Complete Solution</h2>
            </div>
            <div className={classes.SolutionsColumns}>
              <div>
                Remodel
                <br />
                Reconfigure
                <br />
                Reconstruction
                <br />
                Office Space
                <br />
                Bathroom Addition
                <br />
                Handicap Upgrade
                <br />
                Pre-Construction Planning
                <br />
                Feasibility Studies
                <br />
                Design and Engineering
                <br />
                Schedule and Budgeting
                <br />
                Permitting including Environmental
                <br />
                Construction Management
                <br />
              </div>
            </div>
          </div>
        </div>
        <MoreThanDesign />
        <div>
          <ContactUs />
        </div>
      </div>
    </Fragment>
  );
};
export default TenantImprovement;
