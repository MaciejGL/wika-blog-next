import React from 'react';
import Hamburger from 'hamburger-react';

import classes from './Toolbar.module.scss';

const Toolbar = ({ isOpen, setIsOpen }) => {
	return (
		<div className={[classes.Toolbar, isOpen && classes.switchColor].join(' ')}>
			<Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
		</div>
	);
};

export default Toolbar;
