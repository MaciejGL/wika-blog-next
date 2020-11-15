import React from 'react';

import Image from '../Image/Image';
import classes from './Images.module.scss';

import { baseUrl } from '../../../config/server';

const Images = ({ posts }) => {
	return (
		<div className={classes.imgContainer}>
			{posts && posts.map((post) => <Image key={post._id} post={post} src={baseUrl + post.picture.url} alt={post.title} />)}
		</div>
	);
};

export default Images;
