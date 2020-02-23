import React, { Fragment } from 'react';
import classes from './ConcreteConstruction.module.css';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import Hero from '../UI/Hero/Hero';
import concreteImage from '../../assets/images/hero-concrete-construction.jpg';
import Meta from '../Meta/Meta';

const ConcreteConstruction = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className={classes.WhatWeDoContainer}>
        <Meta
            title={'Concrete Construction | Brownco'}
            description={'Brownco has the skill and the ability to “think outside the pit” when it comes to concrete machine foundations and press pits.'} />
        <Hero
          bgImageAlt={'concrete-construction-bg-image-brownco'}
          heroText={'Concrete Construction'}
          heroImage={concreteImage}
        />
        <div className={classes.titleContainer}>
          <div>
            Brownco Construction Company Inc. performs new concrete projects as
            well as concrete repairs, refurbishment and facility concrete
            maintence. Brownco's priority is eliminating the loss of production
            time and providing the best product available for the project.
          </div>
        </div>
        <div className={classes.SolutionsContainer}>
          <div>
            <div className={classes.StructuralSub}>
              <h2>Concrete Cast In Place Solutions</h2>
            </div>
            <div className={classes.SolutionsColumns}>
              <div>
                Pits <br />
                Decks <br />
                Curbs <br />
                Slabs <br />
                Footings <br />
                Foundations <br />
                Bollards <br />
                Ramps <br />
                Handicap Retrofits
              </div>
              <div>
                Truck Dock <br />
                Levelers <br />
                Equipment and Tank Pads <br />
                Containment Dikes <br />
                Storm Water Pollution Prevention <br />
                Concrete Sumps <br />
                Retaining Walls <br />
                Trenches <br />
                Clarifier Floors <br />
                Seismic Retrofit
              </div>
              <div>
                Concrete Caissons <br />
                Epoxy Injection <br />
                Floor Coatings and Sealants <br />
                Structural Upgrades <br />
                Grout <br />
                Flatwork <br />
                Commercial Concrete Flooring <br />
                Crane Foundations <br />
                Facility Maintenance
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
export default ConcreteConstruction;
