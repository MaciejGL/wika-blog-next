import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layouts/Layout';
import Form from '../../components/modules/Form/Form';
import Social from '../../components/modules/Social/Social';
import fetchOne from '../../utils/fetchOne';

import classes from '../../styles/pages.module.scss';

const Contact = ({ contact }) => {
	const { heading, subheading, socials } = contact;
	return (
		<Layout>
			<section className={classes.contact}>
				<div className={classes.contactText}>
					<h1>{heading}</h1>
					<p>{subheading}</p>
					<Social socials={socials} />
				</div>
				<Form />
			</section>
		</Layout>
	);
};

export async function getStaticProps() {
	const url = `/contact`;
	let contact = await fetchOne(url);

	return {
		props: {
			contact: contact.data,
		},
	};
}

Contact.propTypes = {
	contact: PropTypes.shape({
		heading: PropTypes.string.isRequired,
		subheading: PropTypes.string.isRequired,
		socials: PropTypes.arrayOf(PropTypes.object.isRequired),
	}),
};

export default Contact;
