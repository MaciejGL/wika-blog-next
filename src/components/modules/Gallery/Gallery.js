import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Components
import Image from '../../elements/Image/Image';

// Styles
import classes from './Gallery.module.scss';

const Gallery = ({ articles, filter }) => {
	const [filteredArts, setFilteredArts] = useState(articles);

	useEffect(() => {
		const newArt = articles.filter((art) => art.category.name.toLowerCase() === filter || filter === 'all');
		setFilteredArts([]);
		setFilteredArts(newArt);
	}, [filter]);

	const images = filteredArts.map((article) => (
		<Link key={article._id} href={`/myworks/${article.slug}`}>
			<a aria-label={article.title}>
				<motion.article
					layout
					layoutId={article._id}
					initial={{ y: 100, opacity: 0, visibility: 'hidden' }}
					animate={{ y: 0, opacity: 1, visibility: 'visible' }}
					transition={{ duration: 0.5, delay: 0, type: 'tween', ease: 'easeOut' }}
					exit={{ opacity: 0, transition: { duration: 0 } }}
					key={article._id}
					className={classes.article}
				>
					<Image src={article.picture.url} alt={article.title} />
					<div className={classes.imageOverlay}>
						<div className={classes.innerText}>
							<h1>{article.title}</h1>
							<h2>{article.category.name}</h2>
						</div>
					</div>
				</motion.article>
			</a>
		</Link>
	));

	return <section className={classes.columns}>{images}</section>;
};

Gallery.propTypes = {
	articles: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			category: PropTypes.shape({ name: PropTypes.string.isRequired }),
			picture: PropTypes.shape({ url: PropTypes.string.isRequired }),
		})
	),
};

export default Gallery;
