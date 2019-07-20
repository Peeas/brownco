import React from 'react';
import classes from './Footer.module.css';
const footer = () => {
  return (
    <div className={classes.Footer}>
      <footer>
        <div className={classes.FooterLinkContainer}>
          <div>
            <p className={classes.CoTitle}>Brownco Construction Company, Inc.</p>
            <p className={classes.CoAddy}>1000 E. Katella Ave.
            Anaheim, CA 902436
            (714) 935-9600</p>
          </div>
          <div  className={classes.ServiceResourceContainer}>
            <div className={classes.ServiceContainer}>
              <h5>SERVICES</h5>
              <p>Concrete
                Structural Steel
                Demolition + Excavation
                Tenant Improvement
                Renewable Resources</p>
            </div>
            <div className={classes.ResourceContainer}>
            <h5>RESOURCES</h5>
              <p>
              About Us
              Careers
              Contact
              Terms
              Privacy
              </p>
            </div>
          </div>
        </div>
        <div className={classes.FooterCopy}>
            &copy;{new Date().getFullYear()} BROWNCO ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  )
}

export default footer;