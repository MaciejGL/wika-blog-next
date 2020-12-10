import { useRouter } from 'next/router';

import { ChevronRight } from '@material-ui/icons';

import classes from './Image.module.css';

const Image = ({ src, alt, post, path }) => {
	const router = useRouter();

	let customStyles = classes.img;

	console.log(post);
	let route = post && `${router.pathname}/${post._id}`;
	if (path === '/') {
		route = `/${post.category.name.toLowerCase() === 'drawings' ? 'drawings' : 'paintings'}/${post._id}`;
	}

	const handleClickAction = () => {
		if (router.pathname !== '/bio') {
			router.push(route);
		}
	};

	let image;

	if (router.pathname !== '/bio') {
		image = (
			<div onClick={handleClickAction} className={classes.imageContainer}>
				<img className={customStyles} src={src} alt={alt} />
				<div className={classes.imageDescriptionContainer}>
					<h1>{post.title}</h1>
					<footer className={classes.imageDetailsFooter}>
						<p>{post.available ? 'Dostepny' : 'Niedostepny'}</p>
						<ChevronRight />
					</footer>
				</div>
			</div>
		);
	}

	if (router.pathname === '/bio') {
		customStyles = classes.bioImg;
		image = <img onClick={handleClickAction} className={customStyles} src={src} alt={alt} />;
	}

	return image;
};

export default Image;
