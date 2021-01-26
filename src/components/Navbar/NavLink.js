import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './Navbar.module.scss';

const NavLink = ({ link, children }) => {
	const router = useRouter();
	let attachedClasses = classes.NavLink;
	if (router.pathname === link) {
		attachedClasses = [classes.NavLink, classes.selected].join(' ');
	}
	return (
		<li>
			<Link href={link}>
				<a className={attachedClasses}>{children}</a>
			</Link>
		</li>
	);
};

export default NavLink;
