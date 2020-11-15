import Layout from '../../components/Layout';
import Main from '../../components/Main/Main';
import Images from '../../components/Images/Images';
import Description from '../../components/Description/Description';
import fetchAll from '../../utils/promiseAll';

const Paintings = ({ posts, paintings }) => {
	return (
		<Layout>
			<Main>
				<Description page={paintings} />
				<Images posts={posts} />
			</Main>
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?category.name=Paintings`, '/paintings'];
	let [posts, paintings] = await fetchAll(urls);
	console.log(paintings.data);

	return {
		props: {
			posts: posts.data,
			paintings: paintings.data,
		},
		revalidate: 5,
	};
}

export default Paintings;
