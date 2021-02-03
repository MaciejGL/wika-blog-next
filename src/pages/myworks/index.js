import { useState } from 'react';
import fetchAll from '../../utils/promiseAll';

// Components
import Layout from '../../components/layouts/Layout';
import Gallery from '../../components/modules/Gallery/Gallery';
import Filter from '../../components/modules/Filter/Filter';

const MyWorks = ({ works }) => {
	const [filter, setFilter] = useState('all');
	const switchFilterTo = (filter) => {
		setFilter(filter);
	};
	// console.log(logo);
	return (
		<Layout>
			<Filter filter={filter} switchFilterTo={switchFilterTo} />
			<Gallery articles={works} filter={filter} />
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?_sort=generalDisplayOrder:ASC`];
	let [works, logo] = await fetchAll(urls);
	return {
		props: {
			works: works.data,
			// logo: logo.data,
		},
		revalidate: 5,
	};
}

export default MyWorks;
