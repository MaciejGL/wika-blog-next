import React from 'react';
import PropTypes from 'prop-types';

// Styles
import classes from './Description.module.scss';

const Description = ({ textContent }) => {
	const { title, subtitle, description } = textContent;
	return (
		<section className={classes.section}>
			<h1>{title}</h1>
			<h2 className={classes.subtitle}>{subtitle}</h2>
			{description && description.map((paragraph) => <p key={paragraph.id}>{paragraph.text}</p>)}
		</section>
	);
};

Description.propTypes = {
	textContent: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		description: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
			})
		),
	}),
};

export default Description;
