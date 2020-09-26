import React from "react";
import classes from "./toolbar.module.css";
//import Logo from '../../Logo/Logo';
import NavigationItems from "../navigationItems/navigationitems";
import DrawerToggle from "../sideDrawer/drawerToggle/drawerToggle";
//import Header from '../../Header/Header'   <div>
const toolbar = (props) => (
  // <header
  //   className={props.isTop !== true ? classes.toolbarTop : classes.toolbar}
  // >
  <header className={classes.toolbarTop}>

    <DrawerToggle clicked={props.drawerToggleClicked} /> 
    <nav className={classes.desktop__only}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
