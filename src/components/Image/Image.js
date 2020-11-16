import { useRouter } from 'next/router';

import classes from './Image.module.css';

const Image = ({ src, alt, post, path }) => {
	const router = useRouter();

	let customStyles = classes.img;
	if (router.pathname === '/bio') {
		customStyles = classes.bioImg;
	}

	let route = post && `${router.pathname}/${post._id}`;
	if (path === '/') {
		route = `/${post.category.name.toLowerCase() === 'drawings' ? 'drawings' : 'paintings'}/${post._id}`;
	}

	const handleClickAction = () => {
		if (router.pathname !== '/bio') {
			router.push(route);
		}
	};

	return <img onClick={handleClickAction} className={customStyles} src={src} alt={alt} />;
};

export default Image;
