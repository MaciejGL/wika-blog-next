import React from 'react';
import Link from 'next/link';

// Components
import Image from '../../elements/Image/Image';

// Styles
import classes from './Gallery.module.scss';

const Gallery = ({ articles }) => {
	const images = articles.map((article) => (
		<Link key={article._id} href={`/myworks/${article.slug}`}>
			<a>
				<article className={classes.article}>
					<Image src={article.picture.url} alt={article.title} />
					<div className={classes.imageOverlay}>
						<div className={classes.innerText}>
							<h1>{article.title}</h1>
							<h2>{article.category.name}</h2>
						</div>
					</div>
				</article>
			</a>
		</Link>
	));

	return <section className={classes.columns}>{images}</section>;
};

export default Gallery;
