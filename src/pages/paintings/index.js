import Layout from '../../components/Layout';
import fetchAll from '../../utils/promiseAll';

const Paintings = ({ posts, paintings }) => {
	return (
		<Layout>
			<p>Paintings</p>
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?category.name=Paintings`, '/paintings'];
	let [posts, paintings] = await fetchAll(urls);

	return {
		props: {
			posts: posts.data,
			paintings: paintings.data,
		},
		revalidate: 5,
	};
}

export default Paintings;
