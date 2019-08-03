import React, { Component } from 'react'
import classes from './ContactUs.module.css';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <section className={classes.LandingFooterPanel}>
                    <div className={classes.LandingFooterPanelCopy}>
                        <h1>Contact Us</h1>
                        <p>We invite you to contact us with any requests or questions you may have. </p>
                        <button>Contact</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContactUs