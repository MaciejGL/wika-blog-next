import React from 'react';
import Layout from '../components/Layout';
import fetchAll from '../utils/promiseAll';

const Home = ({ posts, homepage }) => (
	<Layout>
		<p>Home</p>
	</Layout>
);

export async function getStaticProps() {
	const urls = [`/posts?_sort=createdAt:DESC&_limit=3`, `/home-page`];
	let [posts, homepage] = await fetchAll(urls);
	return {
		props: {
			posts: posts.data,
			homepage: homepage.data,
		},
		revalidate: 5,
	};
}

export default Home;
