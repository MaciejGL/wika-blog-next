import classes from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children, active, switchFilterTo, filter }) => (
	<button onClick={() => switchFilterTo(filter)} className={[classes.button, active && classes.active].join(' ')}>
		{children}
	</button>
);

Button.propTypes = {
	active: PropTypes.bool,
	switchFilterTo: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
};

export default Button;
