import PropTypes from 'prop-types';

import Navbar from '../Navbar/Navbar';

import classes from './Header.module.scss';

const Header = ({ isOpen, toggleHeader }) => (
	<header onClick={toggleHeader} className={[classes.Header, isOpen && classes.show].join(' ')}>
		<h1 className={classes.pageTitle}>Victoria T Art</h1>
		<Navbar />
	</header>
);

Header.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleHeader: PropTypes.func.isRequired,
};

export default Header;
