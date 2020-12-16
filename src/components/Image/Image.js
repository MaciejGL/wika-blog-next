import { useRouter } from 'next/router';

import { ChevronRight } from '@material-ui/icons';

import classes from './Image.module.css';

const Image = ({ src, alt, post, path }) => {
	const router = useRouter();

	let route = post && `${router.pathname}/${post._id}`;
	if (path === '/') {
		route = `/${post.category.name.toLowerCase() === 'drawings' ? 'drawings' : 'paintings'}/${post._id}`;
	}

	const handleClickAction = () => {
		if (router.pathname !== '/bio') {
			router.push(route);
		}
	};

	let image = router.pathname !== '/bio' && (
		<div onClick={handleClickAction} className={classes.imageContainer}>
			<img className={classes.img} src={src} alt={alt} />
			{
				<div className={classes.imageDescriptionContainer}>
					<h1>{post.title}</h1>
					<footer className={classes.imageDetailsFooter}>
						<p>{post.available ? 'Dostepny' : 'Niedostepny'}</p>
						<ChevronRight />
					</footer>
				</div>
			}
		</div>
	);

	switch (router.pathname) {
		case '/drawings/[drawing]':
			image = <img className={classes.detailsPageImage} src={src} alt={alt} />;
			break;
		case '/paintings/[painting]':
			image = <img className={classes.detailsPageImage} src={src} alt={alt} />;
			break;
		case '/bio':
			image = <img onClick={handleClickAction} className={classes.bioImg} src={src} alt={alt} />;
		default:
			break;
	}

	return image;
};

export default Image;
