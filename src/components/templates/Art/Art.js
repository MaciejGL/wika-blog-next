import Image from 'next/image';

// Components
import Layout from '../../layouts/Layout';
import Seo from '../../seo/seo';

// Styles
import classes from './Art.module.scss';

const Art = ({ art }) => {
	if (!art) return null;
	return (
		<Layout>
			<Seo pageTitle={art.title} desc={art.description} />
			<section className={classes.artDetails}>
				<div>
					<h2>{art.category.name}</h2>
					<h1>{art.title}</h1>
				</div>
				<div>
					<p>{art.description}</p>
				</div>
			</section>
			<div className={classes.pictureWrapper}>
				<Image src={art.picture.url} layout="intrinsic" height={art.picture.height} width={art.picture.width} />
			</div>
		</Layout>
	);
};

export default Art;
