import Image from '../Image/Image';
import Markdown from 'markdown-to-jsx';

import classes from './Description.module.scss';
import { baseUrl } from '../../../config/server';

const Description = ({ page, image }) => (
	<section className={classes.description}>
		<div className={classes.leftContainer}>
			{image && <Image src={baseUrl + image.formats.small.url} alt={image.name} />}
			<div className={classes.headings}>
				<h1>{page.heading}</h1>
				<h2>{page.subheading}</h2>
			</div>
		</div>
		<div className={classes.rightContainer}>
			<Markdown>{page.description}</Markdown>
		</div>
	</section>
);

export default Description;
