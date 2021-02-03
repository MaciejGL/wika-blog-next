import React from 'react';
import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';

import classes from './Toolbar.module.scss';

const Toolbar = ({ isOpen, setIsOpen }) => (
	<div className={[classes.Toolbar, isOpen && classes.switchColor].join(' ')}>
		<Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
	</div>
);

Toolbar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

export default Toolbar;
