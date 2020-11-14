import NavLinks from '../NavLinks/NavLinks';
import Logo from '../../../common/Logo/Logo';
import Backdrop from '../../../common/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.clicked} />
			<div onClick={props.clicked} className={attachedClasses.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavLinks />
				</nav>
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;
