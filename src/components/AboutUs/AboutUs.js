import React, {Fragment} from 'react';
import classes from './AboutUs.module.css';
import { Parallax, Background } from 'react-parallax';
import AboutUsImage from '../../assets/images/Hero@2x.png';
import useWindowDimensions from '../../utils/useWindowDimensions';
import ContactUs from '../ContactUs/ContactUs';
import AboutUsFootImg from '../../assets/images/img-about-us.jpg';

const imgStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    marginTop: '260px'
}
const AboutUs = () => {
    const { width, height } = useWindowDimensions();
    console.log('width', width);
    console.log('height', height)
    return (
        <Fragment>
                <section className={classes.Top}>
                    <Parallax strength={600}>
                        <Background className={classes.heroImageContainer}>
                            <img style={imgStyle} src={AboutUsImage} alt="hero" />
                        </Background>
                        <div className={classes.HomepageHero}>
                            <div className={classes.HeroContentTitle}>
                                About Us
                            </div>
                        </div>
                    </Parallax>
                </section>
                <section className={classes.ContextContainer}>
                    <div className={classes.Context}>
                        "Building with Purpose" is Brownco Construction Company Inc's pledge. A family owned and operated business since 1953, Brownco performs new, specialized and maintenance construction for commercial and industrial facilities. As a self-performing contractor Brownco offers competitive pricing and greater project control. Brownco's team is licensed, insured and certified to assist you in your project - no matter how small or large, we can build or modify your project in a safe and efficient way.
                    </div>
                    <div className={classes.SecondContextContainer}>
                        <h3>What sets Brownco Apart</h3>
                            <div className={classes.SecondSub1}>
                                Our People <br/>
                                Performance Based Processes <br/>
                                Integrated Solutions <br/>
                                Client Relationship Management <br/>
                                Strategic Mix of Technology and Business
                            </div>
                            <div className={classes.NumericVals}>
                                Number: 2171804 <br/>
                                Entity Identification Number: 33-0865392
                            </div>
                    </div>

                    <div className={classes.ThirdContextContainer}>
                        <h3>Licenses</h3>
                        <div className={classes.ThirdSub1}>
                            California Contractors State License Number: 769921 <br/>
                            Classifications: A, B, C8, C16, C21, C36, C51, C61, D42 <br/>
                            Certifications: HAZ <br/>
                        </div>

                    <div className={classes.ThirdSub2}>
                        <p>Arizona Registrar of Contractors Number: 165171 B-01</p>

                        <p>Colorado Division of Professions and Occupations Number: 20021003711</p>

                        <p>Washington Department of Labor Number: 602078929</p>

                        <p>Certified Wind Turbine Installere</p>

                    </div>
                    <div className={classes.FootImgContainer}>
                        <img src={AboutUsFootImg} alt="about-us"/>
                    </div>

                    <div className={classes.SafetyPolicy}>
                        
                        <h3>Brownco Construction Company Safety Policy</h3>

                        <div className={classes.SafetyColumns}>

                            <div>
                                The Right People, with the Right Attitude! <br/>
                                Clean Trucks. Inside and Out. <br/>
                                100% PPE.  All the time.<br/>
                                Following All Safety Protocol.<br/> 
                                Taking Responsibility for your own Safety.<br/> 
                                Never being in too big of a hurry.<br/>
                                Staying focused on the Task at Hand.<br/>
                                Always lookout for Potential Hazards.<br/>
                                Being Proactive, not Reactive.<br/>
                                Showing up to the Jobsite Early. 
                            </div>

                            <div>
                                Having a Positive (Safety) Attitude. <br/>
                                Paying Attention to Detail. <br/>
                                Being Accountable. <br/>
                                Respect for People and Equipment. <br/>
                                Being a Team Player. <br/>
                                Good Communication Skills. <br/>
                                Always Extending a Helping Hand. <br/>
                                Owning up to Ones Mistakes. <br/>
                                Attending Safety Meetings. <br/>
                            </div>

                        </div>
                        
                    </div>
                    
                    </div>
                </section>
                    <div>
                        <ContactUs></ContactUs>
                    </div>
        </Fragment>
    )
}

export default AboutUs;