import React from 'react';

import Link from './NavLink';

import classes from './Navbar.module.scss';

const Navbar = () => {
	const links = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Bio',
			path: '/bio',
		},
		{
			name: 'Obrazy',
			path: '/paintings',
		},
		{
			name: 'Rysunki',
			path: '/drawings',
		},
		{
			name: 'Kontakt',
			path: '/contact',
		},
	];

	const linksList = links.map((link) => (
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
