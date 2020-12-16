import fetch from '../../utils/fetchOne';

import classes from './drawing.module.scss';

import Layout from '../../components/Layout';
import DetailedArtPage from '../../components/DetailedArtPage/DetailedArtPage';

const Drawing = ({ item }) => {
	if (!item) {
		return <p>No picture</p>;
	}
	return (
		<Layout>
			<div className={classes.wrapper}>
				<DetailedArtPage item={item} />
			</div>
		</Layout>
	);
};

export async function getStaticPaths() {
	let posts = await fetch(`/posts?category.name=Drawings`);
	const paths = posts.data.map((post) => ({
		params: { drawing: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	// console.log(params);
	let drawing = await fetch(`/posts?_id=${params.drawing}`);

	return {
		props: {
			item: drawing.data[0],
		},
		revalidate: 5,
	};
}

export default Drawing;
