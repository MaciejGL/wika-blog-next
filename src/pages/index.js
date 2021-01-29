import React from 'react';

// Components
import Layout from '../components/layouts/Layout';
import Description from '../components/modules/Description/Description';
import Gallery from '../components/modules/Gallery/Gallery';

// Utils
import fetchAll from '../utils/promiseAll';

// Styles
// import classes from '../styles/pages.module.scss'

const Home = ({ articles, textContent }) => {
	return (
		<Layout>
			<Description textContent={textContent} />
			<Gallery articles={articles} />
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?showOnHomepage=true&_sort=orderToDisplayOnHomepage:ASC&_limit=6`, `/index-page`];
	// const urls = [`/posts?_sort=createdAt:DESC`, `/homepage`];
	let [articles, homepage] = await fetchAll(urls);
	return {
		props: {
			articles: articles.data,
			textContent: homepage.data,
		},
		revalidate: 5,
	};
}

export default Home;
