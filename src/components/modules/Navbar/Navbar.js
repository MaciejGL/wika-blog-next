import React from 'react';

import Link from './NavLink';

import { LINKS } from '../../CONSTANTS';

import classes from './Navbar.module.scss';

const Navbar = () => {
	const linksList = LINKS.map((link) => (
		<Link key={link.name} link={link.path}>
			{link.name}
		</Link>
	));
	return (
		<nav className={classes.Navbar}>
			<ul>{linksList}</ul>
		</nav>
	);
};

export default Navbar;
