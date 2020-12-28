import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = ({ size }) => {
	const dimensions = {
		height: 100,
		width: 100,
	};

	switch (size) {
		case 'small':
			dimensions.height = 30;
			dimensions.width = 30;
			break;
		default:
			break;
	}

	return (
		<div style={{ padding: '3px' }}>
			<Loader type="Oval" color="#00BFFF" height={dimensions.height} width={dimensions.width} />
		</div>
	);
};

export default Spinner;
