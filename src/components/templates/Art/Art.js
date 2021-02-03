import Image from 'next/image';
import PropTypes from 'prop-types';

// Components
import Layout from '../../layouts/Layout';
import Seo from '../../seo/seo';

// Styles
import classes from './Art.module.scss';

const Art = ({ art }) => {
	if (!art) return null;
	const { title, description, category, picture } = art;
	return (
		<Layout>
			<Seo pageTitle={title} desc={description} />
			<section className={classes.artDetails}>
				<div>
					<h2>{category.name}</h2>
					<h1>{title}</h1>
				</div>
				<div>
					<p>{description}</p>
				</div>
			</section>
			<div className={classes.pictureWrapper}>
				<Image src={picture.url} layout="intrinsic" height={picture.height} width={picture.width} />
			</div>
		</Layout>
	);
};

Art.propTypes = {
	art: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		category: PropTypes.shape({
			name: PropTypes.string.isRequired,
		}),
		picture: PropTypes.shape({
			url: PropTypes.string.isRequired,
			width: PropTypes.number.isRequired,
			height: PropTypes.number.isRequired,
		}),
	}),
};
export default Art;
