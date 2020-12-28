import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import Description from '../components/Description/Description';

import fetchOne from '../utils/fetchOne';

const Bio = ({ bio }) => {
	// console.log(bio);
	return (
		<Layout>
			<Main>
				<Description page={bio} image={bio.profilepicture} />
			</Main>
		</Layout>
	);
};

export async function getStaticProps() {
	const url = `/bio`;
	let bio = await fetchOne(url);

	return {
		props: {
			bio: bio.data,
		},
	};
}

export default Bio;
