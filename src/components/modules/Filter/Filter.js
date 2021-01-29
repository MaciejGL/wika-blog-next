import React from 'react';

// Components
import Button from '../../elements/Button/Button';

// Styles
import classes from './Filter.module.scss';

const Filter = ({ filter, filterHandler }) => {
	const isActive = (value) => filter === value && true;

	return (
		<div className={classes.filterContainer}>
			<Button filterHandler={filterHandler} filter="all" active={isActive('all')}>
				All
			</Button>
			<Button filterHandler={filterHandler} filter="paintings" active={isActive('paintings')}>
				Obrazy
			</Button>
			<Button filterHandler={filterHandler} filter="drawings" active={isActive('drawings')}>
				Rysunki
			</Button>
		</div>
	);
};

export default Filter;
