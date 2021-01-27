import React from 'react';

// Utils
import { baseUrl } from '../../../config/server';

// Styles
import classes from './Gallery.module.scss';

const Gallery = ({ articles }) => {
	console.log(articles);
	return (
		<section className={classes.columns}>
			{articles.map((article) => (
				<article key={article._id} className={classes.article}>
					<img className={classes.image} src={baseUrl + article.picture.url} alt={article.title} />
				</article>
			))}
		</section>
	);
};

export default Gallery;
