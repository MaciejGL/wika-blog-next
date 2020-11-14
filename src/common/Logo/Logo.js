import classes from './Logo.module.scss';

const Logo = ({ size }) => {
	console.log(size);
	let attachedClasses = classes.Logo;
	if (size) {
		attachedClasses = [classes.Logo, classes[size]].join(' ');
	}

	return <img className={attachedClasses} src="/logo.png" alt="Wiktoria T Art" />;
};

export default Logo;
