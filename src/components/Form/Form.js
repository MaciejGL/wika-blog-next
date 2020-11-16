import React, { useState } from 'react';
import validator from 'validator';
import { Input, InputLabel, FormControl, Button, OutlinedInput } from '@material-ui/core';

import classes from './Form.module.scss';

const CustomForm = () => {
	const [nameVal, setNameVal] = useState('');
	const [emailVal, setEmailVal] = useState('');
	const [messageVal, setMessageVal] = useState('');
	const [error, setError] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let errors = [];
		if (!validator.isEmail(emailVal)) {
			errors.push('Invalid email address.');
		}
		if (!validator.isLength(nameVal, { min: 3 })) {
			errors.push('Name has to be minimum 3 characters long.');
		}
		if (!validator.isLength(messageVal, { min: 5 })) {
			errors.push('Message has to be minimum 5 characters long.');
		}

		if (errors.lenght > 0) {
			setError(errors);
		}

		console.log({
			name: nameVal,
			email: emailVal,
			message: messageVal,
		});
	};

	const handleChange = (e) => {};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="component-simple">Imię</InputLabel>
				<Input id="component-simple" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="component-simple">Email</InputLabel>
				<Input id="component-simple" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="text">Wiadomość</InputLabel>
				<OutlinedInput id="text" multiline rows={4} rowsMax={6} />
			</FormControl>

			<Button variant="contained">Wyślij Wiadomość</Button>
		</form>
	);
};

export default CustomForm;
