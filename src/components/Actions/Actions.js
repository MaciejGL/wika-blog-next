import React from 'react';
import { useRouter } from 'next/router';

import classes from './Actions.module.scss';

const Actions = ({ page }) => {
	const router = useRouter();
	let actions;

	switch (page) {
		case 'services':
			actions = (
				<div className={classes.serviceActions}>
					<div onClick={() => router.push('/paintings')}>Obrazy</div>
					<div onClick={() => router.push('/drawings')}>Rysunki</div>
				</div>
			);
			break;
		default:
			break;
	}

	return actions;
};

export default Actions;
