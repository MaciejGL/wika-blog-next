import React from 'react';

import classes from './Navbar.module.css';
import NavLinks from './NavLinks/NavLinks';
import DrawerBurger from './DrawerBurger/DrawerBurger';

const Navbar = (props) => {
	return (
		<header className={classes.Toolbar}>
			<DrawerBurger clicked={props.toggleDrawer} />
			<nav className={classes.DesktopOnly}>
				<NavLinks />
			</nav>
		</header>
	);
};

export default Navbar;
