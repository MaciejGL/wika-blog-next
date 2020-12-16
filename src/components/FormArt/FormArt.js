import React from 'react';

import classes from './FormArt.module.scss';

const FormArt = ({ art }) => (
	<div className={classes.artContainer}>
		<img className={classes.art} src={art.image} alt={art.title} />
	</div>
);

export default FormArt;
