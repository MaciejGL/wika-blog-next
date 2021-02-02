import React from 'react';

// styles
import classes from './Contact.module.scss';

const Contact = () => {
	const currentYear = new Date().getFullYear();

	return (
		<article className={classes.Footer}>
			<p>
				Email: <span>contact@gmail.com</span>
			</p>
			<p>
				© {currentYear} <span>Wiktoria Art</span>. All rights reserved.
			</p>
		</article>
	);
};

export default Contact;
