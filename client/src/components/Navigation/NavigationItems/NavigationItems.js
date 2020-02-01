import React, { useContext } from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import SimpleMenu from './SimpleMenu/SimpleMenu';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import NestedList from './NestedList/NestedList';
import AuthContext from '../../../context/auth-context';
import ProjectMenu from './ProjectMenu/ProjectMenu';

const NavigationItems = (props) => {
    const { width } = useWindowDimensions();
    const authContext = useContext(AuthContext);
    return (
        <div> 
            { width > 949 ?
            <ul className={classes.NavigationItems}>
                <SimpleMenu /> 
                { authContext.pages.length > 0 ? <ProjectMenu pages={authContext.pages} /> : '' }
                <NavigationItem link="/aboutus"><span className={classes.LinkName}>about us</span></NavigationItem>
                <NavigationItem link="/careers"><span className={classes.LinkName}>careers</span></NavigationItem>
                <NavigationItem link="/contactus"><span className={classes.LinkName}>contact</span></NavigationItem>
                {authContext.authenticated ? <NavigationItem isLogout={true}><span className={classes.LinkName}>LOGOUT</span></NavigationItem> : ''}
            </ul>
            : <NestedList />}
        </div>
    )
}


export default NavigationItems;