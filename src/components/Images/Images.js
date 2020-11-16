import React from 'react';

import Image from '../Image/Image';
import classes from './Images.module.scss';

import { baseUrl } from '../../../config/server';

const Images = ({ posts, path }) => {
	return (
		<div className={classes.imgContainer}>
			{posts && posts.map((post) => <Image key={post._id} post={post} src={baseUrl + post.picture.url} alt={post.title} path={path} />)}
		</div>
	);
};

export default Images;
