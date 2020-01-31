import React from 'react';
import classes from './Hero.module.css'
import { Parallax } from 'react-parallax';
import defaultImg from '../../../assets/images/grey-default.png'
const style =  {
    backgroundSize: "cover",
    height: '800px',
    marginTop: '150px'
}
const Hero = props => {
    const heroImage = props.heroImage ? props.heroImage : defaultImg;
    return (
        <div className={classes.Top}>
            <Parallax
                bgImageStyle={props.aboutUs ? style : {display: 'flex'}}
                bgImage={heroImage}
                bgImageAlt={props.bgImageAlt}
                strength={600}>
                    <div className={classes.ParallaxDiv}>
                        { props.isLanding ? <div className={classes.HeroContentText}>{props.subText}</div> : '' }
                        <div className={classes.HeroContentTitle}>
                            {props.heroText}
                        </div>
                    </div>
            </Parallax>
        </div>
    );
}

export default Hero;
