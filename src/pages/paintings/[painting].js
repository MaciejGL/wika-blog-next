import fetch from '../../utils/fetchOne';

import Art from '../../components/templates/Art/Art';

const Painting = ({ art }) => <Art art={art} />;

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
			art: res.data[0],
		},
		revalidate: 5,
	};
}

export default Painting;
