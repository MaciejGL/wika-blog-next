// Utils
import fetch from '../../../utils/fetchOne';

// Components
import Layout from '../../layouts/Layout';

// Styles
import classes from './Art.module.scss';

const Art = ({ item }) => {
	if (!item) {
		return <p>No picture</p>;
	}
	return (
		<Layout>
			<p>Art Single</p>
		</Layout>
	);
};

export default Art;
