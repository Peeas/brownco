import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withRouter } from 'react-router-dom';
import AuthContext from '../../../../context/auth-context';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const NestedList = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const authContext = useContext(AuthContext);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleNav = path => {
    props.history.push(path);
  };
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader
          className={classes.Brand}
          onClick={() => handleNav('/')}
          component='div'
          id='nested-list-subheader'>
          Brownco
        </ListSubheader>
      }
      className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemText primary='What We Do' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem
            onClick={() => handleNav('/structural-steel')}
            button
            className={classes.nested}>
            <ListItemText primary='Structural Steel' />
          </ListItem>

          <ListItem
            onClick={() => handleNav('/concrete-construction')}
            button
            className={classes.nested}>
            <ListItemText primary='Concrete Construction' />
          </ListItem>

          <ListItem
            onClick={() => handleNav('/demolition-excavation')}
            button
            className={classes.nested}>
            <ListItemText primary='Demolition Excavation' />
          </ListItem>

          <ListItem
            onClick={() => handleNav('/renewable-resources')}
            button
            className={classes.nested}>
            <ListItemText primary='Renewable Resource' />
          </ListItem>

          <ListItem
            onClick={() => handleNav('/tenant-improvement')}
            button
            className={classes.nested}>
            <ListItemText primary='Tenant Improvement' />
          </ListItem>
        </List>
      </Collapse>
      <ListItem onClick={() => handleNav('/projects')} button>
        <ListItemText primary='Projects' />
      </ListItem>

      <ListItem onClick={() => handleNav('/aboutus')} button>
        <ListItemText primary='About Us' />
      </ListItem>

      <ListItem button>
        <ListItemText onClick={() => handleNav('/careers')} primary='Careers' />
      </ListItem>

      <ListItem onClick={() => handleNav('/contactus')} button>
        <ListItemText primary='Contact' />
      </ListItem>
      {authContext.authenticated ? (
        <ListItem onClick={() => authContext.logout()} button>
          <ListItemText primary='Logout' />
        </ListItem>
      ) : (
        ''
      )}
    </List>
  );
};
export default withRouter(NestedList);
