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
            <section className={classes.Top}>
                <Parallax strength={600}>
                    <Background className={classes.heroImageContainer}>
                        <img style={imgStyle} src={this.props.paraIimg} alt="hero" />
                    </Background>
                    <div className={classes.HomepageHero}>
                        <div className={classes.HeroContentTitle}>
                            About Us
                        </div>
                    </div>
                </Parallax>
            </section>
        )
    }
}

export default ParallaxHero;