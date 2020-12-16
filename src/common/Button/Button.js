import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => {
	const { children, onClickHandler, style } = props;
	const customStyles = [classes.basic];
	switch (style) {
		case 'goBack':
			customStyles.push(classes.goBack);
			break;
		case 'order':
			customStyles.push(classes.order);
			break;

		default:
			break;
	}
	return (
		<div onClick={onClickHandler} className={customStyles.join(' ')}>
			{children}
		</div>
	);
};

export default Button;
