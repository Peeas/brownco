import React from 'react';
import classes from './Hero.module.css'
import { Parallax } from 'react-parallax';
import defaultImg from '../../../assets/images/grey-default.png';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
const style =  {
    backgroundSize: "cover",
    height: '800px',
    marginTop: '300px'
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
                            {props.heroText} <span>
                                {props.projectPage && props.authenticated ? (
                                    <Fab color="primary" onClick={props.onEditPage} aria-label="edit">
                                        <EditIcon  />
                                    </Fab>
                                ) : '' }
                            </span>
                        </div>
                    </div>
            </Parallax>
        </div>
    );
}

export default Hero;
