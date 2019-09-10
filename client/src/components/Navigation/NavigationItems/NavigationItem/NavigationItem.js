import React, { useContext } from 'react'
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../../../context/auth-context';

const NavigationItem = ( props ) => {
    const authContext = useContext(AuthContext);

    return (
        <li className={classes.NavigationItem}>
        {!props.isLogout ?
        <NavLink
        to={props.link}
        exact
        className={props.active ? classes.active : null}>{props.children}</NavLink> :
        <div onClick={() => authContext.logout()}> {props.children} </div>
        }
        
    </li>
    )
}



export default NavigationItem;