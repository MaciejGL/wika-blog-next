// Components
import Description from '../../components/modules/Description/Description';

// Utils
import Layout from '../../components/layouts/Layout';
import fetchOne from '../../utils/fetchOne';
import { baseUrl } from '../../../config/server';

const Bio = ({ bio }) => {
	console.log(bio);
	return (
		<Layout>
			<img src={baseUrl + bio.profilepicture.url} alt={bio.profilepicture.name} />
			<Description textContent={bio} />
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
