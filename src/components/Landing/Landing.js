import React, { Fragment } from 'react'
import classes from './Landing.module.css'
const Landing = () => {
    return (
        <Fragment>
            <section className={classes.Top}>
                <div className={classes.HomepageHero}>
                    <div className={classes.HeroContentTitle}>Building With Purpose </div>
                    <div className={classes.HeroContentText}>
                        complement your core business and increase customer lifetime Value with integrated offers from top-tier insurance carriers.
                    </div>
                    <div className={classes.HeroButton}>

                    </div>
                    <div className={classes.CenterRow}>
                        <div className={classes.HeroContainer}>
                            {/* <img className={classes.BannerImage} src={heroImage}  alt=""/> */}
                        </div>
                    </div>

                </div>
            </section>
            <section className={classes.LandingHeroPanel}>
                <div className={classes.LandingHeroPanelCopy}>
                    <h1>Uncompromising</h1>
                    <p>As a self-performing contractor, our trades are in-house, so we offer competitive rates, greater control and an uncompromising commitment to quality and service. </p>
                </div>
            </section>
            <section className={classes.Concrete}>

            </section>
        </Fragment>
    )
}
export default Landing;