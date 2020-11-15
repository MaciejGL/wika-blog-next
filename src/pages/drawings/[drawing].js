import { useEffect } from 'react';

// import { useRouter } from 'next/router';
import fetch from '../../utils/fetchOne';

const Drawing = ({ drawing }) => {
	return <div>{drawing.title}</div>;
};

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	let posts = await fetch(`/posts?category.name=Drawings`);
	// Get the paths we want to pre-render based on posts
	const paths = posts.data.map((post) => ({
		params: { drawing: post._id },
	}));
	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	console.log(params);
	let drawing = await fetch(`/posts?_id=${params.drawing}`);
	console.log(drawing.data[0]);

	return {
		props: {
			drawing: drawing.data[0],
		},
		revalidate: 5,
	};
}

export default Drawing;
