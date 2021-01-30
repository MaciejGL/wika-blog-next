import { useState } from 'react';
import fetchAll from '../../utils/promiseAll';

// Components
import Layout from '../../components/layouts/Layout';
// import Description from '../../components/modules/Description/Description';
import Gallery from '../../components/modules/Gallery/Gallery';
import Filter from '../../components/modules/Filter/Filter';

const MyWorks = ({ works }) => {
	const [filter, setFilter] = useState('all');
	const switchFilterTo = (filter) => {
		setFilter(filter);
	};
	let filteredWorks = works;

	const filterByCategory = (category) => works.filter((work) => work.category.name.toLowerCase() === category);
	switch (filter) {
		case 'paintings':
			filteredWorks = filterByCategory('paintings');
			break;
		case 'drawings':
			filteredWorks = filterByCategory('drawings');
			break;
		default:
			filteredWorks;
			break;
	}
	return (
		<Layout>
			<Filter filter={filter} switchFilterTo={switchFilterTo} />
			<Gallery articles={works} filter={filter} />
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?_sort=generalDisplayOrder:ASC`];
	let [works] = await fetchAll(urls);
	return {
		props: {
			works: works.data,
		},
		revalidate: 5,
	};
}

export default MyWorks;
