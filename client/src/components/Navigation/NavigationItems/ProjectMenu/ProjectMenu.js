import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './ProjectMenu.module.css';
import { withRouter } from 'react-router-dom';

const ProjectMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (event, page) => {
    setAnchorEl(null);
    if (page && page._id && page._id !== undefined) {
      props.history.push(`/projects/${page._id}`)
    }
  }

  return (
    <div>
        <div className={classes.Whatwedo} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Projects
        </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
            {props.pages.map(page => (
                <MenuItem
                    key={page._id}
                    onClick={(event) => handleClose(event, page)}><span>{page.name}</span></MenuItem>
            ))}
      </Menu>
    </div>
  );
}

export default withRouter(ProjectMenu)