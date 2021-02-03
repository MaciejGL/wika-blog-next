import PropTypes from 'prop-types';

// Components
import Description from '../../components/modules/Description/Description';
import Image from '../../components/elements/Image/Image';

// Styles
import classes from '../../styles/pages.module.scss';

// Utils
import Layout from '../../components/layouts/Layout';
import fetchOne from '../../utils/fetchOne';

const Bio = ({ bio }) => (
	<Layout>
		<Description textContent={bio}>
			<div className={classes.bioImageWrapper}>
				<Image src={bio.profilepicture.url} alt={bio.profilepicture.name} />
			</div>
		</Description>
	</Layout>
);

export async function getStaticProps() {
	const url = `/bio`;
	let bio = await fetchOne(url);

	return {
		props: {
			bio: bio.data,
		},
	};
}

Bio.propTypes = {
	bio: PropTypes.object.isRequired,
};

export default Bio;
