import Head from 'next/head';
import { useState } from 'react';

import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';

// import Footer from './Footer/Footer';

import classes from './Layout.module.scss';

const Layout = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHeader = () => setIsOpen(!isOpen);
	return (
		<div className={classes.wrapper}>
			<Head>
				<title>Witkoria Portfolio</title>
			</Head>
			<Toolbar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Header isOpen={isOpen} toggleHeader={toggleHeader} />

			<div className={classes.Layout}>{props.children}</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
