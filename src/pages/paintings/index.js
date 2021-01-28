import Layout from '../../components/Layout';
import fetchAll from '../../utils/promiseAll';

// Components
import Description from '../../components/Description/Description';
import Gallery from '../../components/Gallery/Gallery';

const Paintings = ({ textContent, paintings }) => {
	return (
		<Layout>
			{textContent && <Description textContent={textContent} />}
			<Gallery articles={paintings} />
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?category.name=Paintings&_sort=generalDisplayOrder:ASC`, '/paintings'];
	let [paintings, textContent] = await fetchAll(urls);
	return {
		props: {
			paintings: paintings.data,
			textContent: textContent.data,
		},
		revalidate: 5,
	};
}

export default Paintings;
