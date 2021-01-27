import Layout from '../../components/Layout';
import fetchAll from '../../utils/promiseAll';

// Components
import Description from '../../components/Description/Description';
import Gallery from '../../components/Gallery/Gallery';

const Drawings = ({ textContent, drawings }) => {
	return (
		<Layout>
			{textContent && <Description textContent={textContent} />}
			<Gallery articles={drawings} />
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/posts?category.name=Drawings`, '/drawings'];
	let [drawings, textContent] = await fetchAll(urls);
	return {
		props: {
			drawings: drawings.data,
			textContent: textContent.data,
		},
		revalidate: 5,
	};
}

export default Drawings;
