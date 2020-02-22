import React from 'react';
import classes from './Landing.module.css';
import concreteImg from '../../assets/images/concrete_construction.jpg';
import DemoImg from '../../assets/images/demolition_and_excavation.jpg';
import WindEnergy from '../../assets/images/WindEnergy.jpg';
import TenantImprovement from '../../assets/images/BackgroundImage.png';
import StructuralSteel from '../../assets/images/brownco_team_leaders_structural_steel.png';
import BackgroundImage from '../../assets/images/brownco_large_hero_background.jpg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import smallBackground from '../../assets/images/brownco_small_hero_background.jpg';
import ContactUs from '../ContactUs/ContactUs';
import { withRouter } from 'react-router-dom';
import Hero from '../UI/Hero/Hero';
import Meta from '../Meta/Meta';
const Landing = props => {
  const { width } = useWindowDimensions();
  let heroBuilding = width > 500 ? BackgroundImage : smallBackground;
  window.scrollTo(0, 0);
  const onLearnMore = path => {
    props.history.push(path);
  };
  return (
    <div className={classes.LandingContainer}>
      <Meta
        title={'Home | Brownco Construction'}
        description={
          'Every industrial commercial building needs Brownco Construction Co., Inc. someday they will need refurbishment, repairs, additions and/or modifications.'
        }
      />
      <section>
        <div className={classes.Top}>
          <Hero
            bgImageAlt={'Brownco Construction Company, Inc.'}
            heroImage={heroBuilding}
            isLanding={true}
            subText={'Brownco Construction Company, Inc.'}
            heroText={'Building With Purpose'}
          />
        </div>
      </section>
      <section className={classes.LandingHeroPanel}>
        <div className={classes.LandingHeroPanelCopy}>
          <h2>Uncompromising</h2>
          <p>
            As a self-performing contractor, our trades are in-house, so we
            offer competitive rates, greater control and an uncompromising
            commitment to quality and service.{' '}
          </p>
        </div>
      </section>

      <section className={classes.Concrete}>
        <div className={classes.ConcreteCopyContainer}>
          <div>
            <div className={classes.Orangebar}></div>
            <div className={classes.SectionHeader}><h2>Concrete<br />Construction</h2></div>
            <div className={classes.ConcreteCopy}>
              Brownco Construction Company, Inc performs new concrete projects
              as well as concrete repairs, refurbishment and facility concrete
              maintenance. From site preparation, formwork, prefabrication,
              placement to finish, Brownco will complete your concrete projects
              in a timely, efficient and safe manner.
            </div>
            <div
              className={classes.LearnMore}
              onClick={() => onLearnMore('/concrete-construction')}>
              Learn More
            </div>
          </div>
        </div>

        <div className={classes.SectionImgContainer}>
          <img src={concreteImg} alt='Concrete Construction' />
        </div>
      </section>

      <section className={classes.Concrete}>
        <div className={classes.Section2ImgContainer}>
          <img src={DemoImg} alt='Demolition and Excavation' />
        </div>
        <div className={classes.Section2CopyContainer}>
          <div>
            <div className={classes.Orangebar}></div>
            <div className={classes.SectionHeader}><h2>Demolition<br />and Excavation</h2></div>
            <div className={classes.ConcreteCopy}>
              From concrete slabs, steel structures to buildings Brownco has the
              experience, knowledge and equipment including excavators with
              sheer attachments and hydraulic hammers to deconstruct any form.
            </div>
            <div
              className={classes.LearnMore}
              onClick={() => onLearnMore('/demolition-excavation')}>
              Learn More
            </div>
            <div className={classes.MobilePadding}></div>
          </div>
        </div>
      </section>

      <section className={classes.Concrete}>
        <div className={classes.ConcreteCopyContainer}>
          <div>
            <div className={classes.Orangebar}></div>
            <div className={classes.SectionHeader}><h2>Structural Steel</h2></div>
            <div className={classes.ConcreteCopy}>
              Our structural steel team leaders have been serving clients since
              1953 and are ready to fabricate and erect steel platforms, towers,
              mezzanines, stairways and structures not yet conceptualized.
            </div>
            <div
              className={classes.LearnMore}
              onClick={() => onLearnMore('/structural-steel')}>
              Learn More
            </div>
          </div>
        </div>

        <div className={classes.SectionImgContainer}>
          <img src={StructuralSteel} alt='Structural Steel' />
        </div>
      </section>
      <section className={classes.Concrete}>
        <div className={classes.Section2ImgContainer}>
          <img src={TenantImprovement} alt='Tenant Improvement' />
        </div>
        <div className={classes.Section2CopyContainer}>
          <div>
            <div className={classes.Orangebar}></div>
            <div className={classes.SectionHeader}><h2>Tenant Improvement</h2></div>
            <div className={classes.ConcreteCopy}>
              We can reconfigure or install assembly lines or machinery
              foundations to exacting standards or even add office space to an
              existing building. We are also ready to add walls, floors,
              ceilings, bathrooms or office space to a commercial property
            </div>
            <div
              className={classes.LearnMore}
              onClick={() => onLearnMore('/tenant-improvement')}>
              Learn More
            </div>
            <div className={classes.MobilePadding}></div>
          </div>
        </div>
      </section>

      <section className={classes.Concrete}>
        <div className={classes.ConcreteCopyContainer}>
          <div>
            <div className={classes.Orangebar}></div>
            <div className={classes.SectionHeader}><h2>Renewable Resources</h2></div>
            <div className={classes.ConcreteCopy}>
              In a world challenged by population, strained ecosystems and
              global warming, renewable resources are a high priority. We are
              uniquely qualified to work on such projects.
            </div>
            <div
              className={classes.LearnMore}
              onClick={() => onLearnMore('/renewable-resources')}>
              Learn More
            </div>
          </div>
        </div>

        <div className={classes.SectionImgContainer}>
          <img src={WindEnergy} alt='Wind Energy' />
        </div>
      </section>

      <ContactUs></ContactUs>
    </div>
  );
};
export default withRouter(Landing);
