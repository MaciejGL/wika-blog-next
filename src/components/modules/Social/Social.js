import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import classes from './Social.module.scss';

const Social = ({ socials }) => (
	<section className={classes.socialsContainer}>
		{socials.map((social) => (
			<a key={social.socialLink} href={social.socialLink} target="_blank" className={classes.link}>
				<Image className={classes.image} src={social.icon.url} alt={social.icon.name} width={40} height={40} />
			</a>
		))}
	</section>
);

Social.propTypes = {
	socials: PropTypes.arrayOf(
		PropTypes.shape({
			socialLink: PropTypes.string.isRequired,
			icon: PropTypes.shape({
				url: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
			}),
		})
	),
};

export default Social;
