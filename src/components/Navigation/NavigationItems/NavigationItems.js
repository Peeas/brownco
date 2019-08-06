import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import NestedList from './NestedList/NestedList';

const NavigationItems = () => {
    const { width } = useWindowDimensions();

    return (
        <div> 
            { width > 949 ?
            <ul className={classes.NavigationItems}>
                <SimpleMenu /> 
                <NavigationItem link="/aboutus">about us</NavigationItem>
                <NavigationItem link="/">careers</NavigationItem>
                <NavigationItem link="/contactus">contact</NavigationItem>
               
            </ul>
            : <NestedList />}
        </div>
    )
}


export default NavigationItems;