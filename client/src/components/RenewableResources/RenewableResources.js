import React, { Fragment } from 'react';
import classes from './RenewableResources.module.css';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import windEnergy from '../../assets/images/WindEnergy.jpg';
import hydroImg from '../../assets/images/hydrogen_natural_gas.jpg';
import bioImg from '../../assets/images/biomas_pyrolytic_conversion.jpg';
import wasteWaterImg from '../../assets/images/wastewater_treatment_facilities.jpg';
import solarImg from '../../assets/images/photovoltaic_solar_power.jpg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Hero from '../UI/Hero/Hero';
import renewableResourcesHeroImage from '../../assets/images/Background-renew.png';
import Meta from '../Meta/Meta';

const RenewableResources = () => {
  window.scrollTo(0, 0);
  const { width } = useWindowDimensions();
  return (
    <Fragment>
      <div className={classes.WhatWeDoContainer}>
        <Meta
          title={'Renewable Energy | Brownco'}
          description={
            "For over 20 years Brownco has been providing renewable energy solutions for clients. Wanna talk about it, we are green to consult with you today!"
          }
        />
        <Hero
          bgImageAlt={'renewable-resources-bg-image-brownco'}
          heroImage={renewableResourcesHeroImage}
          heroText={'Renewable Energy Resources'}
        />
        <div className={classes.titleContainer}>
          <div>
            Renewable energy use is on the rise around the globe. Since the
            early 2000's Brownco Construction Company Inc. has been building
            these systems for clients taking advantage of the technology. From
            feasibility and performance analysis, pulling permits, constructing
            foundations and installation to start up, Brownco can provide you a
            turn-key renewable energy system.
          </div>
        </div>
        <section className={classes.Concrete}>
          <div
            style={{ order: width > 700 ? '2' : '1' }}
            className={classes.SectionImgContainer}>
            <img src={windEnergy} alt='Wind Energy' />
          </div>
          <div
            style={{ order: width > 700 ? '1' : '2' }}
            className={classes.ConcreteCopyContainer}>
            <div>
              <div className={classes.Orangebar}></div>
              <div className={classes.SectionHeader}><h2>Wind Energy</h2></div>
              <ul className={classes.ConcreteCopy}>
                <li>1 Unit to 100+ Units</li>
                <li>Design and equipment based on the location</li>
                <li>Wind generated to size turbines to the site</li>
                <li>
                  Selection and installation of turbines, electrical and control
                  mechanisms
                </li>
                <li>Certified Installer of wind turbines</li>
                <li>
                  Won the most aggressive Renewable Energy Project - One
                  MegaWatt Wind Turbine
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={classes.Concrete}>
          <div style={{ order: '1' }} className={classes.SectionImgContainer}>
            <img src={hydroImg} alt='hydrogen and natural gas power facilities' />
          </div>
          <div style={{ order: '2' }} className={classes.ConcreteCopyContainer}>
            <div>
              <div className={classes.Orangebar}></div>
              <div className={classes.SectionHeader}>
                <h2>Hydrogen + Natural Gas</h2>
              </div>
              <ul className={classes.ConcreteCopy}>
                <li>
                  Experience constructing some of the first hydrogen power
                  facilities in the Western US
                </li>
                <li>Hydrogen Facility Design and Construction</li>
                <li>Fuel Cells</li>
                <li>Electrolyzers</li>
                <li>Reformers</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={classes.Concrete}>
          <div
            style={{ order: width > 700 ? '2' : '1' }}
            className={classes.SectionImgContainer}>
            <img src={bioImg} alt='biomass and pyrolytic conversion' />
          </div>

          <div
            style={{ order: width > 700 ? '1' : '2' }}
            className={classes.ConcreteCopyContainer}>
            <div>
              <div className={classes.Orangebar}></div>
              <div className={classes.SectionHeader}>
                <h2>Biomass + Pyrolytic Conversion</h2>
              </div>
              <ul className={classes.ConcreteCopy}>
                <li>
                  100 tons of trash can be reduced to 9-14 tons of ash depending
                  on the waste stream
                </li>
                <li>
                  The reduction of tonnage means that less material needs to be
                  shipped
                </li>
                <li> Shipping costs are reduced</li>
                <li>
                  Road and other infrastructure requirements are reduced,
                  lightening the load to governing bodies.
                </li>
                <li>Land-fill deposits are reduced</li>
                <li>
                  The ash deposited in the land fill is inert, reducing hazards
                  to future generations
                </li>
                <li>Conversion takes place in an oxygen-free environment</li>
                <li>Virtually no toxins are created or released</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={classes.Concrete}>
          <div style={{ order: '1' }} className={classes.SectionImgContainer}>
            <img src={wasteWaterImg} alt='wastewater' />
          </div>

          <div style={{ order: '2' }} className={classes.ConcreteCopyContainer}>
            <div>
              <div className={classes.Orangebar}></div>
              <div className={classes.SectionHeader}><h2>Waste Water</h2></div>
              <ul className={classes.ConcreteCopy}>
                <li>Interceptors</li>
                <li>Clarifiers</li>
                <li>pH Monitors</li>
                <li>Complete Wastewater Treatment facilities</li>
                <li>
                  Technology exist to purify effuent from manufacturing, storm
                  drains, and residential sewage.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={classes.Concrete}>
          <div
            style={{ order: width > 700 ? '2' : '1' }}
            className={classes.SectionImgContainer}>
            <img src={solarImg} alt='photovoltaic solar thermoelectric power' />
          </div>

          <div
            style={{ order: width > 700 ? '1' : '2' }}
            className={classes.ConcreteCopyContainer}>
            <div>
              <div className={classes.Orangebar}></div>
              <div className={classes.SectionHeader}><h2>Photovoltaic / Solar</h2></div>
              <ul className={classes.ConcreteCopy}>
                <li>Flat Plate Collectors</li>
                <li>Thin Film solar cells</li>
                <li>Building Integrated photovoltaics</li>
                <li>Solar thermoelectric power generators</li>
                <li>Commercial off-grid solar</li>
                <li>Micro-grids</li>
                <li>Telecom Towers</li>
              </ul>
            </div>
          </div>
        </section>

        <MoreThanDesign />

        <div>
          <ContactUs />
        </div>
      </div>
    </Fragment>
  );
};

export default RenewableResources;
