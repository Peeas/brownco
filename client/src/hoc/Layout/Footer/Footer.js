import React, { useState, Fragment }  from 'react';
import classes from './Footer.module.css';
import { withRouter, NavLink } from 'react-router-dom';
import ResponsiveDialog from '../../../components/UI/ResponsiveDialog/ResponsiveDialog';
import Auth from '../../../components/Auth/Auth';

const Footer = (props) => {
  const [showLogin, toggleShowLogin] = useState(false);

  const handleAdmin = () => {
    console.log('i am here')
    toggleShowLogin(true)

  }

  const toggleClose = () => {
    toggleShowLogin(false);
  }
  return (
    <Fragment>
      <ResponsiveDialog
          isOpen={showLogin === true}
          isNotification={false}
          isAuth={true}
          onClose={toggleClose}>
            <Auth closeDialog={toggleClose}/>
      </ResponsiveDialog>

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
                <NavLink className={classes.SubLink} to={'/careers'}>Careers</NavLink>
                <NavLink className={classes.SubLink} to={'/contactus'}>Contact</NavLink>
                <div className={classes.SubLink} onClick={handleAdmin}>Admin</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.FooterCopy}>
            &copy;{new Date().getFullYear()} BROWNCO ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
    </Fragment>
  )
}

export default withRouter(Footer);