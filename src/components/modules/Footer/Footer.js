import React from 'react';

import classes from './Footer.module.scss';
import Contact from '../Contact/Contact';

const Footer = () => (
	<footer className={classes.Footer}>
		<div className={classes.wrapper}>
			<Contact />
		</div>
	</footer>
);

export default Footer;
