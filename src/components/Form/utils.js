import validator from 'validator';

const handleChange = (e, cb) => {
	e.persist();
	cb((prevState) => {
		return {
			...prevState,
			[e.target.id]: { ...prevState[e.target.id], error: false, errorMessage: '', value: e.target.value },
		};
	});
};

const transformFormStateIntoArray = (formState) => {
	const formElementsArray = [];

	for (let key in formState) {
		formElementsArray.push(formState[key]);
	}
	return formElementsArray;
};

const setErrors = (errors, cb) => {
	for (let key in errors) {
		cb((prevState) => {
			return {
				...prevState,
				[key]: { ...prevState[key], error: true, errorMessage: errors[key] },
			};
		});
	}
};

const validate = (formElements) => {
	let errors = {};
	if (!validator.isEmail(formElements.email.value)) {
		errors.email = 'wymagane';
	}
	if (!validator.isLength(formElements.name.value, { min: 2 })) {
		errors.name = 'wymagane';
	}
	if (!validator.isLength(formElements.title.value, { min: 2 })) {
		errors.title = 'wymagane';
	}
	if (!validator.isLength(formElements.description.value, { min: 5 })) {
		errors.description = 'wymagana';
	}

	return Object.keys(errors).length > 0 ? errors : null;
};

export { handleChange, transformFormStateIntoArray, setErrors, validate };
