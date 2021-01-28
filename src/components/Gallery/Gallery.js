import React from 'react';
// Components
import Image from 'next/image';

// Styles
import classes from './Gallery.module.scss';

const Gallery = ({ articles }) => {
	const images = articles.map((article) => (
		<article key={article._id} className={classes.article}>
			<Image layout="fill" className={classes.image} src={article.picture.url} alt={article.title} />
		</article>
	));
	return <section className={classes.columns}>{images}</section>;
};

export default Gallery;

// $medium-view: 650px;
// $large-view: 960px;
// $desktop-view: 1024px;
