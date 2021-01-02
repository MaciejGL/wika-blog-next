import React from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { ArrowBack, Send } from '@material-ui/icons';

import { baseUrl } from '../../../config/server';

import Image from '../Image/Image';
import Button from '../../common/Button/Button';

import classes from './DetailedArtPage.module.scss';

const DetailedArtPage = ({ item }) => {
	const router = useRouter();
	// console.log(item.picture);
	console.log(item);
	let image = null;
	if (item && item.picture.formats.medium) {
		image = item.picture.formats.medium.url;
	} else if (item) {
		image = item.picture.url;
	}
	return (
		<div className={classes.detailsWrapper}>
			<div className={classes.imageWrapper}>
				<Image src={baseUrl + image} alt={item.title} path="drawings/id" post={item} />
			</div>
			<div className={classes.artDescriptionContainer}>
				<h3 className={classes.artTitle}>{item.title}</h3>
				<div className={classes.artDescription}>
					<Markdown>{item.description}</Markdown>
				</div>
				<footer className={classes.artFooter}>
					<Button onClickHandler={() => router.back()} style="goBack">
						<ArrowBack fontSize="small" /> Wróć
					</Button>
					{item.available ? (
						<Button onClickHandler={() => router.push(`/contact?id=${item.id}&title=${item.title}&image=${item.picture.formats.small.name}`)} style="order">
							Zamów
						</Button>
					) : (
						<p className={classes.unavailable}>Niedostepny</p>
					)}
				</footer>
			</div>
		</div>
	);
};

export default DetailedArtPage;
