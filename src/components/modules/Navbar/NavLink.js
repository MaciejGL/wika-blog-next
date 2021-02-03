import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

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

NavLink.propTypes = {
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default NavLink;
