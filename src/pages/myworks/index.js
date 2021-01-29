import { useState } from 'react';
import fetchAll from '../../utils/promiseAll';

// Components
import Layout from '../../components/layouts/Layout';
// import Description from '../../components/modules/Description/Description';
import Gallery from '../../components/modules/Gallery/Gallery';
import Filter from '../../components/modules/Filter/Filter';

const MyWorks = ({ works }) => {
	const [filter, setFilter] = useState('all');
	const filterHandler = (e, filter) => {
		console.log(e.target.innerText, filter);
		setFilter(filter);
	};
	return (
		<Layout>
			<Filter filter={filter} filterHandler={filterHandler} />
			<Gallery articles={works} />
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
