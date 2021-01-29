import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';

import classes from './Header.module.scss';

const Header = ({ isOpen, toggleHeader }) => {
	return (
		<header onClick={toggleHeader} className={[classes.Header, isOpen && classes.show].join(' ')}>
			<h1 className={classes.pageTitle}>Wiktoria Art</h1>
			<Navbar />
		</header>
	);
};

export default Header;
