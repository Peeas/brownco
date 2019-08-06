import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './SimpleMenu.module.css';
import { withRouter } from 'react-router';

const SimpleMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    props.history.push(e)
  }

  return (
    <div>
        <div className={classes.Whatwedo} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            WHAT WE DO
        </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose('/structural-steel')}>Structural Steel</MenuItem>
        <MenuItem onClick={() => handleClose('/concrete-construction')}>Concrete Construction</MenuItem>
        <MenuItem onClick={() => handleClose('/demolition-excavation')}>Demolition Excavation</MenuItem>
        <MenuItem onClick={() => handleClose('/renewable-resources')}>Renewable Resources</MenuItem>
        <MenuItem onClick={() => handleClose('/tenant-improvement')}>Tenant Improvement</MenuItem>

      </Menu>
    </div>
  );
}

export default withRouter(SimpleMenu)