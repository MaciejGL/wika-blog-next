import Layout from '../../components/Layout';
import Main from '../../components/Main/Main';
import Images from '../../components/Images/Images';
import Description from '../../components/Description/Description';
import fetchAll from '../../utils/promiseAll';

const Drawings = ({ posts, drawings }) => {
	return (
		<Layout>
			<Main>
				<Description page={drawings} />
				<Images posts={posts} />
			</Main>
		</Layout>
	);
};

// export async function getStaticPaths() {
// 	// Call an external API endpoint to get posts
// 	const urls = [`/posts?category.name=Drawings`];
// 	let [posts] = await fetchAll(urls);
// 	// Get the paths we want to pre-render based on posts
// 	const paths = posts.data.map((post) => ({
// 		params: { drawing: post._id },
// 	}));
// 	return { paths, fallback: false };
// }

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
