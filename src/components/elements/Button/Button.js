import classes from './Button.module.scss';

const Button = ({ children, active, filterHandler, filter }) => {
	return (
		<button onClick={(e) => filterHandler(e, filter)} className={[classes.button, active && classes.active].join(' ')}>
			{children}
		</button>
	);
};

export default Button;
