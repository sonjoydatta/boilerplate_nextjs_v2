import { BaseSyntheticEvent, ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export const useForm = (callback: () => void, validator: (name: string, value: string) => void): returnType => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		if (Object.values(errors).every((o) => o === null)) {
			callback();
		}
	};

	const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		const { name, value, required } = event.target;
		if (required) {
			const error = validator(name, value);
			setValues((prevState) => ({ ...prevState, [name]: value }));
			setErrors((prevState) => ({ ...prevState, [name]: error }));
		} else {
			setValues((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const submitHandler = (event: BaseSyntheticEvent): void => {
		event.preventDefault();

		const elements = event.target;
		for (let i = 0; i < elements.length; i++) {
			if (elements[i].tagName === 'INPUT') {
				const { name, value, required } = elements[i];
				if (required) {
					const error = validator(name, value);
					setValues((prevState) => ({ ...prevState, [name]: value }));
					setErrors((prevState) => ({ ...prevState, [name]: error }));
				} else {
					setValues((prevState) => ({ ...prevState, [name]: value }));
				}
			}
		}

		validateForm();
	};

	return {
		values,
		errors,
		setErrors,
		changeHandler,
		submitHandler,
	};
};

interface returnType {
	values: Record<string, string>;
	errors: Record<string, string>;
	setErrors: Dispatch<SetStateAction<Record<string, string>>>;
	changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	submitHandler: (event: BaseSyntheticEvent) => void;
}
