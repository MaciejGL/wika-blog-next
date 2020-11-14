import { useState } from 'react';
import Head from 'next/head';

import classes from './Layout.module.scss';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer/SideDrawer';
import Footer from './Footer/Footer';

const Layout = (props) => {
	const [showDrawer, setShowDrawer] = useState(false);

	const showDrawerHandler = () => {
		setShowDrawer((prevState) => !prevState);
	};
	return (
		<div className={classes.wrapper}>
			<Head>
				<title>Witkoria Portfolio</title>
			</Head>
			<SideDrawer open={showDrawer} clicked={showDrawerHandler} />
			<div className={classes.Layout}>
				<Navbar toggleDrawer={showDrawerHandler} />
				{props.children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
