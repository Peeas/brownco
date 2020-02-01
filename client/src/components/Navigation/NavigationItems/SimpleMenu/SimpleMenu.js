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
        <MenuItem onClick={() => handleClose('/structural-steel')}><span>Structural Steel</span></MenuItem>
        <MenuItem onClick={() => handleClose('/concrete-construction')}><span>Concrete Construction</span></MenuItem>
        <MenuItem onClick={() => handleClose('/demolition-excavation')}><span>Demolition Excavation</span></MenuItem>
        <MenuItem onClick={() => handleClose('/renewable-resources')}><span>Renewable Resources</span></MenuItem>
        <MenuItem onClick={() => handleClose('/tenant-improvement')}><span>Tenant Improvement</span></MenuItem>

      </Menu>
    </div>
  );
}

export default withRouter(SimpleMenu)