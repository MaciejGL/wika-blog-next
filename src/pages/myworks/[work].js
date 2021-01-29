import fetch from '../../utils/fetchOne';

import Art from '../../components/templates/Art/Art';

const Work = ({ art }) => <Art art={art} />;

export async function getStaticPaths() {
	let posts = await fetch(`/posts?category.name=Drawings`);
	const paths = posts.data.map((post) => ({
		params: { drawing: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	let drawing = await fetch(`/posts?_id=${params.drawing}`);

	return {
		props: {
			art: drawing.data[0],
		},
		revalidate: 5,
	};
}

export default Work;