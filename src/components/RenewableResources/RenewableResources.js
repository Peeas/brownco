import React, {Fragment}  from 'react'
import classes from './RenewableResources.module.css';
import { Parallax, Background } from 'react-parallax';
import renewHero from '../../assets/images/Background-renew.png';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import windEnergy from '../../assets/images/WindEnergy.jpg';
import hydroImg from '../../assets/images/Hydrogen.jpg';
import bioImg from '../../assets/images/Biomass.png';
import wasteWaterImg from '../../assets/images/WasteWater.png';
import solarImg from '../../assets/images/Solar.jpg';
import hydroelectricImg from '../../assets/images/HydroelectricPower.jpg';

const imgStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    marginTop: '325px'
}
const RenewableResources = () => {
    return (
    <Fragment>
        <div className={classes.WhatWeDoContainer}>

                <div className={classes.Top}>
                    <Parallax strength={800}>
                        <Background className={classes.heroImageContainer}>
                        <img style={imgStyle} src={renewHero} alt="hero" />
                        </Background>
                        <div className={classes.HomepageHero}>
                            <div className={classes.HeroContentTitle}>
                                Renewable Energy Resources
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className={classes.titleContainer}>

                    <div>
                    Renewable energy use is on the rise around the globe. Since the early 2000's Brownco Construction Company Inc. has been building these systems for clients taking advantage of the technology. From feasibility and performance analysis, pulling permits, constructing foundations and installation to start up, Brownco can provide you a turn-key renewable energy system.
                    </div>
                </div>
                <section className={classes.Concrete}>
                    <div className={classes.SectionImgContainer}>
                        <img src={windEnergy} alt="concrete"/>
                    </div>
                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>WIND ENERGY</div>
                            <ul className={classes.ConcreteCopy}>
                                <li>1 Unit to 100+ Units</li>
                                <li>Design and equipment based on the location</li>
                                <li>Wind generated to size turbines to the site</li>
                                <li>Selection and installation of turbines, electrical
   and control mechanisms</li>
                                <li>Certified Installer of wind turbines</li>
                                <li></li>
                                <li>Won the most aggressive Renewable Energy
   Project - One Mega Watt Wind Turbine
</li>
                            </ul>
                           
                        </div>
                    </div>

                </section>
                <section className={classes.Concrete}>
                    <div className={classes.SectionImgContainer}>
                        <img src={hydroImg} alt="hydrogen"/>
                    </div>
                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>HYDROGEN + NATURAL GAS</div>
                            <ul className={classes.ConcreteCopy}>
                                <li>Experience constructing some of the first hydrogen   
   power facilities in the Western US</li>
                                <li>Hydrogen Facility Design and Construction</li>
                                <li>Fuel Cells</li>
                                <li>Electrolyzers</li>
                                <li>Reformers</li>
                            </ul>
                           
                        </div>
                    </div>

                </section>

                <section className={classes.Concrete}>

                    <div className={classes.SectionImgContainer}>
                        <img src={bioImg} alt="biomass"/>
                    </div>

                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>Biomass + Pyrolytic Conversion</div>
                            <ul className={classes.ConcreteCopy}>
                                <li>100 tons of trash can be reduced to 9-14 tons of ash depending on the waste stream</li>
                                <li>The reduction of tonnage means that less material needs to be shipped</li>
                                <li>  Shipping costs are reduced</li>
                                <li>Road and other infrastructure requirements are reduced,
   lightening the load to governing bodies.</li>
                                <li>Land-fill deposits are reduced</li>
                                <li>The ash deposited in the land fill is inert, reducing hazards
   to future generations</li>
                                <li>Conversion takes place in an oxygen-free environment</li>
                                <li>Virtually no toxins are created or released</li>
                            </ul>
                           
                        </div>
                    </div>

                </section>

                <section className={classes.Concrete}>
                    <div className={classes.SectionImgContainer}>
                        <img src={wasteWaterImg} alt="wastewater"/>
                    </div>
                    
                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>Waste Water</div>
                            <ul className={classes.ConcreteCopy}>
                                <li>Interceptors</li>
                                <li>Clarifiers</li>
                                <li>pH Monitors</li>
                                <li>Complete Wastewater Treatment facilities</li>
                                <li>Technology exist to purify effuent from manufacturing, storm drains, and residential sewage.</li>
                            </ul>
                           
                        </div>
                    </div>

                </section>

                <section className={classes.Concrete}>
                    <div className={classes.SectionImgContainer}>
                        <img src={solarImg} alt="solar"/>
                    </div>
                    
                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>Photovoltaic / Solar</div>
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

                <section className={classes.Concrete}>
                    <div className={classes.SectionImgContainer}>
                        <img src={hydroelectricImg} alt="hydroelectricpower"/>
                    </div>
                    
                    <div className={classes.ConcreteCopyContainer}>
                        <div>
                            <div className={classes.Orangebar}></div>
                            <div className={classes.SectionHeader}>Hydroelectric Power</div>
                            <ul className={classes.ConcreteCopy}>
                                <li>Turbines</li>
                                <li>Generators</li>
                                <li>Transformers</li>
                                <li>Powerhouse</li>
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
    )
}

export default RenewableResources;