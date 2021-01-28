import React from 'react';
import { useRouter } from 'next/router';

// Components
import Image from 'next/image';

// Styles
import classes from './Gallery.module.scss';

const Gallery = ({ articles }) => {
	const router = useRouter();

	const homePageClass = (customClass) => router.pathname === '/' && customClass;

	const images = articles.map((article) => (
		<article key={article._id} className={[classes.article, homePageClass(classes.homepageImage)].join(' ')}>
			<Image layout="fill" className={classes.image} src={article.picture.url} alt={article.title} />
		</article>
	));

	return <section className={classes.columns}>{images}</section>;
};

export default Gallery;
