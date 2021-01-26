import Layout from '../../components/Layout';
import fetchAll from '../../utils/promiseAll';

const Drawings = ({ posts, drawings }) => {
	return (
		<Layout>
			<p>Drawings</p>
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?category.name=Drawings`, '/drawings'];
	let [posts, drawings] = await fetchAll(urls);

	return {
		props: {
			posts: posts.data,
			drawings: drawings.data,
		},
		revalidate: 5,
	};
}

export default Drawings;
