import React from 'react';

import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Description from '../components/Description/Description';
import Form from '../components/Form/Form';

import fetchOne from '../utils/fetchOne';

const Contact = ({ contact }) => (
	<Layout>
		<Main>
			<Description page={contact} />
			<Form />
		</Main>
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
