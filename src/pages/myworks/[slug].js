import fetch from '../../utils/fetchOne';

import Art from '../../components/templates/Art/Art';

const Work = ({ art }) => <Art art={art} />;

export async function getStaticPaths() {
	let posts = await fetch(`/posts`);
	const paths = posts.data.map((post) => {
		return { params: { slug: post.slug } };
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	let { data } = await fetch(`/posts?slug=${params.slug}`);

	return {
		props: {
			art: data[0],
		},
		revalidate: 5,
	};
}

export default Work;
