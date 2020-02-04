import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import logo from '../../../assets/images/brownco_logo.svg';
import { withRouter } from 'react-router-dom';

const toolbar = (props) => {
    const onLogoClick = () => {
        if (props.location.pathname !== "/") {
            props.history.push('/');
        }
    }
    return (
        <header className={classes.Toolbar} id="navbar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo} onClick={onLogoClick}>
                <img src={logo} alt="Brownco logo"/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}


export default withRouter(toolbar);