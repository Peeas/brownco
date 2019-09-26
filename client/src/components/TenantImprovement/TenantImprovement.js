import React, {Fragment} from 'react';
import classes from './TenantImprovement.module.css'
import ContactUs from '../ContactUs/ContactUs';
import { Parallax, Background } from 'react-parallax';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';

const TenantImprovement = () => {
    return (
        <Fragment>
        <div className={classes.WhatWeDoContainer}>

                <div className={classes.Top}>
                    <Parallax strength={800}>
                        <Background className={classes.Background}>
                        </Background>
                        <div className={classes.HomepageHero}>
                            <div className={classes.HeroContentTitle}>
                            Tenant Improvement
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className={classes.titleContainer}>

                    <div>
                    Need to remodel a commercial office space? Brownco Construction Company Inc can add a bathroom and office space. Need to reconfigure a machinery line or area? Brownco can configure and install equipment foundations and assembly lines to exacting standards. No matter the project size, Brownco has the depth and experience to develop cost effective plans and provide the leadership and
direction to manage your projects from conception to completion. 
                    </div>
                </div>
                <div className={classes.SolutionsContainer}>
                    <div>
                        <div className={classes.StructuralSub}>Complete Solution</div>
                        <div className={classes.SolutionsColumns}>
                            <div>
                            Remodel<br />
                            Reconfigure<br />
                            Reconstruction<br />
                            Office Space<br />
                            Bathroom Addition<br />
                            Handicap Upgrade<br />
                            Pre-Construction Planning<br />
                            Feasibility Studies<br />
                            Design and Engineering<br />
                            Schedule and Budgeting<br />
                            Permitting including Environmental<br />
                            Construction Management<br />    
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
export default TenantImprovement;