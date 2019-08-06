import React from 'react';
import classes from './Footer.module.css';
import { withRouter, NavLink } from 'react-router-dom';
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
              <div>
                <NavLink className={classes.SubLink} to={'/concrete-construction'}>Concrete</NavLink> <br/>
                <NavLink className={classes.SubLink} to={'/structural-steel'}>Structural Steel</NavLink><br/>
                <NavLink className={classes.SubLink} to={'/demolition-excavation'}>Demolition + Excavation</NavLink><br/>
                <NavLink className={classes.SubLink} to={'/tenant-improvement'}>Tenant Improvement</NavLink><br/>
                <NavLink className={classes.SubLink} to={'/renewable-resources'}>Renewable Resources</NavLink>

              </div>
          
            </div>
            <div className={classes.ResourceContainer}>
            <h5>RESOURCES</h5>
              <div>
                <NavLink className={classes.SubLink} to={'/aboutus'}>About Us</NavLink>
                <NavLink className={classes.SubLink} to={'/'}>Careers</NavLink>
                <NavLink className={classes.SubLink} to={'/contactus'}>Contact</NavLink>
              </div>
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

export default withRouter(footer);