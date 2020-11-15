import { useRouter } from 'next/router';

import classes from './Image.module.css';

const Image = ({ src, alt, post }) => {
	const router = useRouter();

	return <img onClick={() => router.push(`${router.pathname}/${post._id}`)} className={classes.img} src={src} alt={alt} />;
};

export default Image;
