import Layout from '../components/Layout';

import fetchOne from '../utils/fetchOne';

const Bio = ({ bio }) => {
	return (
		<Layout>
			<p>BIO</p>
		</Layout>
	);
};

export async function getStaticProps() {
	const url = `/bio`;
	let bio = await fetchOne(url);

	return {
		props: {
			bio: bio.data,
		},
	};
}

export default Bio;
