import { useState } from 'react';

import Header from '../modules/Header/Header';
import Toolbar from '../elements/Toolbar/Toolbar';
import Seo from '../seo/seo';

import Footer from '../modules/Footer/Footer';

import classes from './Layout.module.scss';

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHeader = () => setIsOpen(!isOpen);
	return (
		<div className={classes.wrapper}>
			<Seo />
			<Toolbar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Header isOpen={isOpen} toggleHeader={toggleHeader} />

			<div className={classes.Layout}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
