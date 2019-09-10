import React, { useContext } from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import NestedList from './NestedList/NestedList';
import AuthContext from '../../../context/auth-context';

const NavigationItems = (props) => {
    const { width } = useWindowDimensions();
    const authContext = useContext(AuthContext);
    // <button className={classes.Logout} onClick={() => authContext.logout()}>logout</button>
    return (
        <div> 
            { width > 949 ?
            <ul className={classes.NavigationItems}>
                <SimpleMenu /> 
                <NavigationItem link="/aboutus">about us</NavigationItem>
                <NavigationItem link="/careers">careers</NavigationItem>
                <NavigationItem link="/contactus">contact</NavigationItem>
                {authContext.authenticated ? <NavigationItem isLogout={true}>LOGOUT</NavigationItem> : ''}
            </ul>
            : <NestedList />}
        </div>
    )
}


export default NavigationItems;