import React from 'react';

import classes from './Footer.module.scss';
import Contact from '../Contact/Contact';
import Social from '../Social/Social';

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<div className={classes.wrapper}>
				<Contact />
				{/* <Social /> */}
			</div>
		</footer>
	);
};

export default Footer;
