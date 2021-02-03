import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import classes from './Image.module.scss';

const ImageComponent = ({ src, alt }) => (
	<div className={classes.imagePlaceholder}>
		<Image className={classes.image} layout="fill" quality="100" src={src} alt={alt} />
	</div>
);

ImageComponent.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default ImageComponent;
