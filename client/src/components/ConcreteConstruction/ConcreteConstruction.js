import React , { Fragment } from 'react'
import classes from './ConcreteConstruction.module.css';
import ContactUs from '../ContactUs/ContactUs';
import { Parallax, Background } from 'react-parallax';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';

const ConcreteConstruction = () => {
    return (
        <Fragment>
            <div className={classes.WhatWeDoContainer}>

                    <div className={classes.Top}>
                        <Parallax strength={800}>
                            <Background className={classes.Background}>
                            </Background>
                            <div className={classes.HomepageHero}>
                                <div className={classes.HeroContentTitle}>
                                    Concrete Construction
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div className={classes.titleContainer}>
                        <div>
                        Brownco Construction Company Inc. performs new concrete projects as well
as concrete repairs, refurbishment and facility concrete maintence. Brownco's priority is eliminating the loss of production time and providing the best product available for the project.
                        </div>
                    </div>
                    <div className={classes.SolutionsContainer}>
                        <div>
                            <div className={classes.StructuralSub}>Concrete Cast In Place Solutions</div>
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
    )
}
export default ConcreteConstruction 