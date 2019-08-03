import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>What we do</NavigationItem>
        <NavigationItem link="/">industries</NavigationItem>
        <NavigationItem link="/aboutus">about us</NavigationItem>
        <NavigationItem link="/">careers</NavigationItem>
        <NavigationItem link="/">contact</NavigationItem>
    </ul>
)

export default navigationItems;