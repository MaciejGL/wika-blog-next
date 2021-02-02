import axios from 'axios';
import * as yup from 'yup';

export const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	message: yup.string('Enter your Message').min(8, 'Message should be of minimum 8 characters length').required('Message is required'),
});

const formatEmail = (values) => ({
	from: values.email,
	to: process.env.EMAIL,
	replyTo: values.email,
	subject: 'Message from Portfolio Page',
	details: { message: values.message, name: values.name },
});

export const submitFormHandler = async (values, resetForm, setIsLoading, setEmailResponse) => {
	setIsLoading(true);
	const emailData = formatEmail(values);
	try {
		const { status } = await axios.post(`https://wika-cms.herokuapp.com/emails`, emailData);
		status === 200 && setEmailResponse({ success: true, text: 'Wiadomość została wysłana.' });

		setIsLoading(false);
		resetForm({});
	} catch (error) {
		setEmailResponse({ success: false, text: 'Coś poszło nie tak z wysyłaniem wiadomości. Proszę spróbuj ponownie.' });
		setIsLoading(false);
	}
};
