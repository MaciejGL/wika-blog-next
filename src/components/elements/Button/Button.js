import classes from './Button.module.scss';

const Button = ({ children, active, switchFilterTo, filter }) => {
	return (
		<button onClick={(e) => switchFilterTo(filter)} className={[classes.button, active && classes.active].join(' ')}>
			{children}
		</button>
	);
};

export default Button;
