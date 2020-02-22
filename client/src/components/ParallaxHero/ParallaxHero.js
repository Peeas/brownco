import React, { Component } from 'react'
import classes from './ParallaxHero.module.css';
import { Parallax, Background } from 'react-parallax';

const imgStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    marginTop: '260px'
}

class ParallaxHero extends Component {
    render() {
        return (
                <Parallax strength={600}>
                    <Background className={classes.heroImageContainer}>
                        <img style={imgStyle} src={this.props.paraIimg} alt="Hero" />
                    </Background>
                    <div className={classes.HomepageHero}>
                        <div className={classes.HeroContentTitle}>
                            <h1>{this.props.heroText}</h1>
                        </div>
                    </div>
                </Parallax>
        )
    }
}

export default ParallaxHero;