import fetchAll from '../../utils/promiseAll';

// Components
import Layout from '../../components/layouts/Layout';
// import Description from '../../components/modules/Description/Description';
import Gallery from '../../components/modules/Gallery/Gallery';

const MyWorks = ({ works }) => {
	return (
		<Layout>
			{textContent && <Description textContent={textContent} />}
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
