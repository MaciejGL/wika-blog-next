import React from 'react';

import Layout from '../components/Layout';

import fetchOne from '../utils/fetchOne';

const Contact = ({ contact }) => (
	<Layout>
		<p>Contact</p>
	</Layout>
);

export async function getStaticProps() {
	const url = `/contact`;
	let contact = await fetchOne(url);

	return {
		props: {
			contact: contact.data,
		},
	};
}

export default Contact;
