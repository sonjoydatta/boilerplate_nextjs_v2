import { CSSProperties } from 'react';
import styled from 'styled-components';

const CardWithShadow = ({ children, ...rest }: propsType): JSX.Element => <Card {...rest}>{children}</Card>;
export default CardWithShadow;

interface propsType {
	children: JSX.Element | JSX.Element[];
	className?: string;
	style?: CSSProperties;
}

const Card = styled.div`
	padding: 11.25px;
	margin-top: 15px;
	background-color: var(--white);
	border-radius: 10px;
	box-shadow: 0 0 6px rgba(138, 138, 138, 0.1);
`;
