import React  from 'react';
import classes from './ContactUs.module.css';
import { withRouter } from 'react-router-dom';

const ContactUs = (props) => {

    const onHandleContactClick = () => {
        props.history.push('/contactus')
    }
    return (
        <div>
            <section className={classes.LandingFooterPanel}>
                <div className={classes.LandingFooterPanelCopy}>
                    <h1>Contact Us</h1>
                    <p>We invite you to contact us with any requests or questions you may have. </p>
                    <button onClick={onHandleContactClick}>
                        Contact
                    </button>
                </div>
            </section>
        </div>
    )
}

export default withRouter(ContactUs)