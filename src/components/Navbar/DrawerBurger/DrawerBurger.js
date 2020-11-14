import React from 'react';
import classes from './DrawerBurger.module.css';

function DrawerBurger(props) {
	return (
		<div onClick={props.clicked} className={classes.DrawerBurger}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default DrawerBurger;
