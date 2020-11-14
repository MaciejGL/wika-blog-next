import React from 'react';

import NavLink from '../NavLink/NavLink';
import Logo from '../../../common/Logo/Logo';
import classes from './NavLinks.module.css';

const NavLinks = () => {
	return (
		<div className={classes.NavbarContainer}>
			<ul className={classes.NavLinks}>
				<NavLink link="/">Home</NavLink>
				<NavLink link="/bio">Bio</NavLink>
				<NavLink link="/paintings">Obrazy</NavLink>
			</ul>
			<div className={classes.LogoDesktop}>
				<Logo />
			</div>
			<ul className={classes.NavLinks}>
				<NavLink link="/drawings">Rysunki</NavLink>
				<NavLink link="/services">Usługi</NavLink>
				<NavLink link="/contact">Kontakt</NavLink>
			</ul>
		</div>
	);
};

export default NavLinks;
