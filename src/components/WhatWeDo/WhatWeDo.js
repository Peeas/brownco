import React, { Fragment } from 'react';
import classes from './WhatWeDo.module.css'
import BackgroundImage from '../../assets/images/Index@3x.jpg';
import useWindowDimensions from '../../utils/useWindowDimensions';
import smallBackground from '../../assets/images/Index.jpg';
import { Parallax, Background } from 'react-parallax';
import ContactUs from '../ContactUs/ContactUs';
import MoreThanDesign from '../MoreThanDesign/MoreThanDesign';

const imgStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    // marginTop: '260px'
}
const WhatWeDo = () => {
    const { width } = useWindowDimensions();
    let heroBuilding = width > 500 ? BackgroundImage : smallBackground;

    return (
        <Fragment>
            <div className={classes.WhatWeDoContainer}>

                    <div className={classes.Top}>
                        <Parallax strength={800}>
                            <Background className={classes.heroImageContainer}>
                                <img style={imgStyle} src={heroBuilding} alt="hero" />
                            </Background>
                            <div className={classes.HomepageHero}>
                                <div className={classes.HeroContentTitle}>
                                    Structural Steel
                                </div>
                            </div>
                        </Parallax>
                    </div>
                    <div className={classes.titleContainer}>
                        <div>
                        Brownco Construction Company Inc.'s Structural Steel Team is ready to modify, fabricate and erect steel structures. Brownco's crew of LA certified welders combine ability, experience
and equipment to provide you with the most value to complete your projects on time
and within budget. 
                        </div>
                    </div>
                    <div className={classes.SolutionsContainer}>
                        <div>
                            <div className={classes.StructuralSub}>Structural Steel + Erection Solutions</div>
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

export default WhatWeDo;