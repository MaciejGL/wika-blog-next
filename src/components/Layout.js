import { useState } from 'react';
import Head from 'next/head';

import classes from './Layout.module.css';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer/SideDrawer';

const Layout = (props) => {
	const [showDrawer, setShowDrawer] = useState(false);

	const showDrawerHandler = () => {
		setShowDrawer((prevState) => !prevState);
	};
	return (
		<div>
			<Head>
				<title>Witkoria Portfolio</title>
			</Head>
			<SideDrawer open={showDrawer} clicked={showDrawerHandler} />
			<div className={classes.Layout}>
				<Navbar toggleDrawer={showDrawerHandler} />
				{props.children}
			</div>
			<footer>Footer</footer>
		</div>
	);
};

export default Layout;
