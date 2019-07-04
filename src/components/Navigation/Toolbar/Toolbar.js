import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import logo from '../../../assets/images/Primary@1.5x.svg'
const toolbar = (props) => (
    <header className={classes.Toolbar} id="navbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />

        <div className={classes.Logo}>
            <img src={logo} alt=""/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;