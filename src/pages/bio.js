import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Description from '../components/Description/Description';

import fetchAll from '../utils/promiseAll';

const Bio = ({ bio }) => {
	return (
		<Layout>
			<Main>
				<Description page={bio} image={bio.profilepicture} />
			</Main>
		</Layout>
	);
};

export async function getStaticProps() {
	const urls = [`/bio`];
	let [bio] = await fetchAll(urls);
	console.log(bio);

	return {
		props: {
			bio: bio.data,
		},
	};
}

export default Bio;
