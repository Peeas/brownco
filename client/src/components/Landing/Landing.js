import React from 'react';
import classes from './Landing.module.css'
import concreteImg from '../../assets/images/RectangleCopy7@2x.jpg';
import DemoImg from '../../assets/images/Demolition@2x.jpg';
import WindEnergy from '../../assets/images/WindEnergy.jpg';
import TenantImprovement from '../../assets/images/BackgroundImage.png';
import StructuralSteel from '../../assets/images/Rectangl6.png';
import BackgroundImage from '../../assets/images/Index@3x.jpg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import smallBackground from '../../assets/images/Index.jpg';
import ContactUs from '../ContactUs/ContactUs';
import { withRouter } from 'react-router-dom';
import Hero from '../UI/Hero/Hero';
const Landing = props => {
    const { width } = useWindowDimensions();
    let heroBuilding = width > 500 ? BackgroundImage : smallBackground;
    window.scrollTo(0, 0);
    const onLearnMore = (path) => {
        props.history.push(path)
    }
    return (
        <div className={classes.LandingContainer}>
            <section>
                <div className={classes.Top}>
                    <Hero
                        bgImageAlt={'landing-bg-image-brownco'}
                        heroImage={heroBuilding}
                        isLanding={true}
                        subText={'Brownco Construction Company Inc.'}
                        heroText={'Building With Purpose'}/>
                </div>

            </section>
            <section className={classes.LandingHeroPanel}>
                <div className={classes.LandingHeroPanelCopy}>
                    <h1>Uncompromising</h1>
                    <p>As a self-performing contractor, our trades are in-house, so we offer competitive rates, greater control and an uncompromising commitment to quality and service. </p>
                </div>
            </section>
            
            <section className={classes.Concrete}>

                <div className={classes.ConcreteCopyContainer}>
                    <div>
                        <div className={classes.Orangebar}></div>
                        <div className={classes.SectionHeader}>Concrete Construction</div>
                        <div className={classes.ConcreteCopy}>Brownco Construction Company, Inc performs new concrete projects as well as concrete repairs, refurbishment and facility concrete maintenance. From site preparation, formwork, prefabrication, placement to finish, Brownco will complete your concrete projects in a timely, efficient and safe manner.</div>
                        <div className={classes.LearnMore} onClick={() => onLearnMore('/concrete-construction')}>Learn More</div>
                    </div>
                </div>

                <div className={classes.SectionImgContainer}>
                    <img src={concreteImg} alt="concrete"/>
                </div>

            </section>

            <section className={classes.Concrete}>

                <div className={classes.Section2ImgContainer}>
                    <img src={DemoImg} alt=""/>
                </div>
                <div className={classes.Section2CopyContainer}>
                    <div>
                        <div className={classes.Orangebar}></div>
                        <div className={classes.SectionHeader}>Demolition + Excavation</div>
                        <div className={classes.ConcreteCopy}>From concrete slabs, steel structures to buildings Brownco has the experience, knowledge and equipment including excavators with sheer attachments and hydraulic hammers to deconstruct any form.</div>
                        <div className={classes.LearnMore} onClick={() => onLearnMore('/demolition-excavation')}>Learn More</div>
                        <div className={classes.MobilePadding}></div>
                    </div>
                </div>

            </section>

            <section className={classes.Concrete}>

                <div className={classes.ConcreteCopyContainer}>
                    <div>
                        <div className={classes.Orangebar}></div>
                        <div className={classes.SectionHeader}>Structural Steel</div>
                        <div className={classes.ConcreteCopy}>Our structural steel team leaders have been serving clients since 1953 and are ready to fabricate and erect steel platforms, towers, mezzanines, stairways and structures not yet conceptualized.</div>
                        <div className={classes.LearnMore} onClick={() => onLearnMore('/structural-steel')}>Learn More</div>
                    </div>
                </div>

                <div className={classes.SectionImgContainer}>
                    <img src={StructuralSteel} alt=""/>
                </div>

            </section>
            <section className={classes.Concrete}>

                <div className={classes.Section2ImgContainer}>
                    <img src={TenantImprovement} alt=""/>
                </div>
                <div className={classes.Section2CopyContainer}>
                    <div>
                        <div className={classes.Orangebar}></div>
                        <div className={classes.SectionHeader}>Tenant Improvement</div>
                        <div className={classes.ConcreteCopy}>We can reconfigure or install assembly lines or machinery foundations to exacting standards or even add office space to an existing building. We are also ready to add walls, floors, ceilings, bathrooms or office space to a commercial property</div>
                        <div className={classes.LearnMore} onClick={() => onLearnMore('/tenant-improvement')}>Learn More</div>
                        <div className={classes.MobilePadding}></div>

                    </div>
                </div>

            </section>


            <section className={classes.Concrete}>

                <div className={classes.ConcreteCopyContainer}>
                    <div>
                        <div className={classes.Orangebar}></div>
                        <div className={classes.SectionHeader}>RENEWABLE RESOURCES</div>
                        <div className={classes.ConcreteCopy}>In a world challenged by population, strained
                            ecosystems and global warming, renewable resources are a high priority. We are uniquely qualified to work
                            on such projects.</div>
                        <div className={classes.LearnMore} onClick={() => onLearnMore('/renewable-resources')}>Learn More</div>
                    </div>
                </div>

                <div className={classes.SectionImgContainer}>
                    <img src={WindEnergy} alt=""/>
                </div>

            </section>

            <ContactUs></ContactUs>
            
        </div>
    )
}
export default withRouter(Landing);