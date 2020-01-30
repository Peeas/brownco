import React from 'react';
import classes from './Hero.module.css'
import { Parallax } from 'react-parallax';
import defaultImg from '../../../assets/images/grey-default.png'
const Hero = props => {
    const heroImage = props.heroImage ? props.heroImage : defaultImg;
    return (
        <div className={classes.Top}>
            <Parallax
                bgImage={heroImage}
                strength={600}>
                    <div className={classes.ParallaxDiv}>
                        <div className={classes.HeroContentTitle}>
                            {props.heroText}
                        </div>
                    </div>
            </Parallax>
        </div>
    );
}

export default Hero;
