import React, {Fragment} from 'react';
import classes from './DemolitionExcavation.module.css'
import ContactUs from '../ContactUs/ContactUs';
import { Parallax, Background } from 'react-parallax';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';
import demoHero from '../../assets/images/img-demolition.jpg';
const imgStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    // marginTop: '260px'
}

const DemolitionExcavation = () => {
    window.scrollTo(0, 0);
    return (
        <Fragment>
        <div className={classes.WhatWeDoContainer}>

                <div className={classes.Top}>
                    <Parallax strength={800}>
                        <Background className={classes.heroImageContainer}>
                            <img style={imgStyle} src={demoHero} alt="hero" />
                        </Background>
                        <div className={classes.HomepageHero}>
                            <div className={classes.HeroContentTitle}>
                            Demolition + Excavation
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className={classes.titleContainer}>
                    <div>
                    From concrete slabs, steel structures to buildings Brownco Construction Company Inc. has the experience, knowledge and equipment including excavators with sheer attachments and hydraulic hammers to deconstruct any form. Brownco will manage all aspects of your demolition which may include removing hazardous or regulated materials, obtaining permits, submitting notices, disconnecting utilities and develop site specific safety and work plans.
                    </div>
                </div>
                <div className={classes.SolutionsContainer}>
                    <div>
                        <div className={classes.StructuralSub}>Complete Solution</div>
                        <div className={classes.SolutionsColumns}>
                            <div>
                            Hard and Soft Demolition<br />
                            Saw Cutting<br />
                            Core Drilling<br />
                            Foundation Excavation<br />
                            Caisson Drilling<br />
                            Utility Trenching<br />
    
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
export default DemolitionExcavation