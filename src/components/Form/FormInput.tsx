import { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';

const FormInput = ({ id, className, label, errorMessage, ...rest }: propsType): JSX.Element => (
	<Form.Group controlId={id} className={className}>
		<Form.Label srOnly={label ? false : true}>{label}</Form.Label>
		<Form.Control isInvalid={!!errorMessage} {...rest} />
		<Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
	</Form.Group>
);

export default FormInput;

type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type InputType = 'text' | 'textarea' | 'password';
interface propsType {
	label?: string;
	name?: string;
	placeholder?: string;
	plaintext?: boolean;
	maxLength?: number;
	readOnly?: boolean;
	disabled?: boolean;
	value?: string | string[] | number;
	onChange?: ChangeEventHandler<InputElement>;
	custom?: boolean;
	type?: InputType;
	id?: string;
	errorMessage?: string;
	className?: string;
	required?: boolean;
}
