import React, { Fragment } from 'react';
import classes from './DemolitionExcavation.module.css';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import demoHero from '../../assets/images/img-demolition.jpg';
import Hero from '../UI/Hero/Hero';
import Meta from '../Meta/Meta';

const DemolitionExcavation = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className={classes.WhatWeDoContainer}>
        <Meta
          title={'Demolition and Excavation | Brownco'}
          description={
            "Brownco loves to tear buildings up, call today for your demolition and excavation proposal."
          }
        />
        <Hero
          bgImageAlt={'demolition-excavation-bg-image-brownco'}
          heroImage={demoHero}
          heroText={'Demolition + Excavation'}
        />
        <div className={classes.titleContainer}>
          <div>
          <p>
            From concrete slabs, steel structures to buildings Brownco
            Construction Company Inc. has the experience, knowledge and
            equipment including excavators with sheer attachments and hydraulic
            hammers to deconstruct any form. Brownco will manage all aspects of
            your demolition which may include removing hazardous or regulated
            materials, obtaining permits, submitting notices, disconnecting
            utilities and develop site specific safety and work plans.
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
                Hard and Soft Demolition
                <br />
                Saw Cutting
                <br />
                Core Drilling
                <br />
                Foundation Excavation
                <br />
                Caisson Drilling
                <br />
                Utility Trenching
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
export default DemolitionExcavation;
