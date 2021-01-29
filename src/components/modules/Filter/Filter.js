import React from 'react';

// Components
import Button from '../../elements/Button/Button';

// Styles
import classes from './Filter.module.scss';

const Filter = ({ filter, switchFilterTo }) => {
	const isActive = (value) => filter === value && true;
	const createButton = (filterType, text) => (
		<Button switchFilterTo={switchFilterTo} filter={filterType} active={isActive(filterType)}>
			{text}
		</Button>
	);
	return (
		<div className={classes.filterContainer}>
			{createButton('all', 'Wszystkie')}
			{createButton('paintings', 'Obrazy')}
			{createButton('drawings', 'Rysunki')}
		</div>
	);
};

export default Filter;
