import Layout from '../components/Layout';
import Main from '../components/Main/Main';
import classes from '../styles/Content.module.scss';
import homeClasses from '../styles/homepage.module.scss';

export default function Home() {
	return (
		<Layout>
			<Main>
				<div className={classes.leftContainer}>
					<h1>Home</h1>
					<h4>This is Homepage</h4>
				</div>
				<div className={classes.rightContainer}>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, animi facilis autem tempore doloribus veritatis ea beatae nostrum pariatur quod
						asperiores illo laudantium id, consequuntur incidunt amet, ipsa odio quidem.
					</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. quod asperiores illo laudantium id, consequuntur incidunt amet, ipsa odio quidem.</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt</p>
				</div>
				<div className={homeClasses.imgContainer}>
					<img className={homeClasses.img} src="/profilepicture.jpg" alt="" />
					<img className={homeClasses.img} src="/sample.jpg" alt="" />
					<img className={homeClasses.img} src="/samplePainting300.jpg" alt="" />
				</div>
			</Main>
		</Layout>
	);
}
