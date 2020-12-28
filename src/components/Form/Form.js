import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Input, InputLabel, FormControl, Button, OutlinedInput } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import axios from 'axios';

import { baseUrl } from '../../../config/server';

import classes from './Form.module.scss';
import { useStyles } from './formStyles';
import { handleChange, transformFormStateIntoArray, setErrors, validate } from './utils';

import FormArt from '../FormArt/FormArt';
import Spinner from '../../common/Spinner/Spinner';

const CustomForm = () => {
	const materialClasses = useStyles();
	const router = useRouter();
	const [formElements, setFormElements] = useState({
		name: {
			id: 'name',
			label: 'Imię',
			value: '',
			error: false,
			errorMessage: '',
		},
		email: {
			id: 'email',
			label: 'Email',
			value: '',
			error: false,
			errorMessage: '',
		},
		title: {
			id: 'title',
			label: 'Tytuł',
			value: '',
			error: false,
			errorMessage: '',
		},
		description: {
			id: 'description',
			label: 'Wiadomość',
			value: '',
			error: false,
			errorMessage: '',
			multiline: true,
		},
	});
	const [artRequest, setArtRequest] = useState(null);
	const [response, setResponse] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		if (Object.keys(router.query).length === 3)
			setArtRequest({
				...router.query,
				image: `${baseUrl}/files/${router.query.image}`,
			});
	}, [router.query]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		const errors = validate(formElements);
		if (errors && Object.keys(errors).length > 0) {
			setLoading(false);

			return setErrors(errors, setFormElements);
		}

		const emailBody = {
			email: formElements.email.value,
			replyTo: formElements.email.value,
			subject: formElements.title.value,
			text: formElements.description.value,
		};

		if (artRequest) {
			emailBody.art = { title: artRequest.title, id: artRequest.id };
		}

		const response = await axios.post(`${baseUrl}/emails`, emailBody);
		if (response.data.error) {
			setLoading(false);
			return setResponse('failed');
		}

		setResponse('succeed');
		const newForm = { ...formElements };
		for (let key in newForm) {
			newForm[key].value = '';
		}

		setFormElements(newForm);

		setLoading(false);
	};
	const formElementsArray = transformFormStateIntoArray(formElements);

	const flashMessage = response && (
		<div className={classes.flashMessage}>
			<p className={response === 'failed' ? classes.failure : classes.success}>
				{response === 'failed' ? 'Email nie został wysłany, sprobój ponownie później.' : 'Email został wysłany, wkrótcę odpowiem na Twoją wiadomość.'}
			</p>
			<Close
				onClick={() => {
					setResponse('');
					setArtRequest(null);
				}}
			/>
		</div>
	);

	const requestedArt = artRequest && response !== 'succeed' && <FormArt art={artRequest} />;

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			{flashMessage}
			{requestedArt}
			{formElements &&
				formElementsArray.map(({ id, label, value, error, errorMessage, multiline }) => (
					<FormControl key={id} className={(classes.formControl, materialClasses.root)} error={error}>
						<InputLabel className={classes.formControlLabel} htmlFor={id}>
							{label} {error && `- ${errorMessage}`}
						</InputLabel>
						{!multiline ? (
							<Input className={classes.formInput} id={id} value={value} onChange={(e) => handleChange(e, setFormElements)} />
						) : (
							<OutlinedInput id={id} value={value} onChange={(e) => handleChange(e, setFormElements)} multiline rows={4} rowsMax={6} />
						)}
					</FormControl>
				))}
			<div className={classes.actions}>
				<Button variant="contained" onClick={handleSubmit}>
					Wyślij Wiadomość
				</Button>
				{loading && <Spinner size="small" />}
			</div>
		</form>
	);
};

export default CustomForm;
