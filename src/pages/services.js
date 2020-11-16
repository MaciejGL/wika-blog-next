import React from 'react';

import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Description from '../components/Description/Description';
import Actions from '../components/Actions/Actions';

import fetchOne from '../utils/fetchOne';

const Services = ({ services }) => {
	return (
		<Layout>
			<Main>
				<Description page={services} />
			</Main>
		</Layout>
	);
};

export async function getStaticProps() {
	const url = `/services`;
	let services = await fetchOne(url);

	return {
		props: {
			services: services.data,
		},
	};
}

export default Services;
