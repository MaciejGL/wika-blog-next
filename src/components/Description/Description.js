import Image from '../Image/Image';
import classes from './Description.module.scss';
import { baseUrl } from '../../../config/server';

const Description = ({ page, image }) => {
	return (
		<section className={classes.description}>
			<div className={classes.leftContainer}>
				{image && <Image src={baseUrl + image.formats.small.url} alt={image.name} />}
				<div className={classes.headings}>
					<h1>{page.heading}</h1>
					<h2>{page.subheading}</h2>
				</div>
			</div>
			<div className={classes.rightContainer}>
				<p>{page.description1}</p>
				<p>{page.description2}</p>
				<p>{page.description3}</p>
			</div>
		</section>
	);
};

export default Description;
