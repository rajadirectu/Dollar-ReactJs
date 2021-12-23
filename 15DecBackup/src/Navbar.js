import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import TypoGraphy from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavBar(props) {
    return (
    <div>
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                       <NavLink  className ="navStyle" to="/" >Home</NavLink>
                </ListItemText>
                <ListItemText inset>
                        <NavLink  className ="navStyle" to='/store'>Store</NavLink>
                </ListItemText>
                <ListItemText inset>
                        <NavLink  className ="navStyle" to='/businessLicense/businessLicense'>BusinessLicense</NavLink>
                </ListItemText>
                <ListItemText inset>
                        <NavLink  className ="navStyle" to='/jurisdiction'>Jurisdiction</NavLink>
                </ListItemText>
                 <ListItemText inset>
                        <NavLink  className ="navStyle" to='/Login/Login'>Login</NavLink>
                </ListItemText>
            </ListItem >
        </List>
       
    </div>
    )
}
export default NavBar;