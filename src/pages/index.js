import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Images from '../components/Images/Images';
import Description from '../components/Description/Description';

// import classes from '../styles/homepage.module.scss';
// import { baseUrl } from '../../config/server';
import fetchAll from '../utils/promiseAll';

const Home = ({ posts, homepage }) => {
	return (
		<Layout>
			<Main>
				<Description page={homepage} />
				<Images posts={posts} />
			</Main>
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?_limit=3`, `/home-page`];
	let [posts, homepage] = await fetchAll(urls);
	console.log(homepage);

	return {
		props: {
			posts: posts.data,
			homepage: homepage.data,
		},
		revalidate: 5,
	};
}

export default Home;
