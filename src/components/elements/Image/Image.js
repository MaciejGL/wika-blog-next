import React from 'react';
import Image from 'next/image';

import classes from './Image.module.scss';

const ImageComponent = ({ src, alt }) => (
	<div className={classes.imagePlaceholder}>
		<Image className={classes.image} layout="fill" src={src} alt={alt} />
	</div>
);

export default ImageComponent;
