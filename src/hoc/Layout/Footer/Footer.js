import React from 'react';
import classes from './Footer.module.css';
const footer = () => {
  return (
    <div className={classes.Footer}>
      <footer>
        {/* <img src={BlueLogo} alt="sure_logo"/> */}
        <div>
            &copy; 2017 - {new Date().getFullYear()} Inc.
        </div>
      </footer>
    </div>
  )
}

export default footer;