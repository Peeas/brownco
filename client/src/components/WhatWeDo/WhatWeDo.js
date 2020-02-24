import React, { Fragment } from 'react';
import classes from './WhatWeDo.module.css';
import BackgroundImage from '../../assets/images/hero-structural-steel.jpg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import smallBackground from '../../assets/images/hero-structural-steel.jpg';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import Hero from '../UI/Hero/Hero';
import Meta from '../Meta/Meta';

const WhatWeDo = () => {
  const { width } = useWindowDimensions();
  let heroBuilding = width > 500 ? BackgroundImage : smallBackground;
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className={classes.WhatWeDoContainer}>
        <Meta
          title={'Structural Steel | Brownco Construction Co., Inc.'}
          description={
            'Brownco Construction Company, Inc. fabricated and installed employee protection guardrail. Need guardrails, safety bollards, ADA compliance?'
          }
          keywords={'Concrete, Construction, Demolition, Excavation, Construction, Structural Steel, Tenant Improvement, Renewable Energy, Renewable Resources, Anaheim'}
        />
        <Hero
          bgImageAlt={'Structural Steel'}
          heroImage={heroBuilding}
          heroText={'Structural Steel'}
        />
        <div className={classes.titleContainer}>
          <div>
          <p>
            Brownco Construction Company Inc.'s Structural Steel Team is ready
            to modify, fabricate and erect steel structures. Brownco's crew of
            LA certified welders combine ability, experience and equipment to
            provide you with the most value to complete your projects on time
            and within budget.
            </p>
          </div>
        </div>
        <div className={classes.SolutionsContainer}>
          <div>
            <div className={classes.StructuralSub}>
              <h2>Structural Steel + Erection Solutions</h2>
            </div>
            <div className={classes.SolutionsColumns}>
              <div>
                Stairways <br />
                Catwalks <br />
                Steel Structures <br />
                Steel Fabrication
              </div>
              <div>
                Steel Erection <br />
                Steel Unit Positioning and Alignment <br />
                Mezzanines <br />
                Seismic Retrofit
              </div>
              <div>
                Mechanical Equipment Platforms <br />
                Hand Rails <br />
                HVAC Rooftop Platforms <br />
                Billboard Signs and ID Signs
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

export default WhatWeDo;
