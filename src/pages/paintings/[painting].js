import fetch from '../../utils/fetchOne';

import Layout from '../../components/Layout';
import classes from './painting.module.scss';

const Painting = ({ item }) => {
	if (!item) {
		return <p>No picture</p>;
	}
	return (
		<Layout>
			<p>Single Painting View</p>
		</Layout>
	);
};

export async function getStaticPaths() {
	let posts = await fetch(`/posts?category.name=Paintings`);
	const paths = posts.data.map((post) => ({
		params: { painting: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	let res = await fetch(`/posts?_id=${params.painting}`);

	return {
		props: {
			item: res.data[0],
		},
		revalidate: 5,
	};
}

export default Painting;
