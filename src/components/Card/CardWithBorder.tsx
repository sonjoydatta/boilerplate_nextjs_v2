import styled from 'styled-components';

const CardWithBorder = ({ children, ...rest }: propsType): JSX.Element => <Card {...rest}>{children}</Card>;
export default CardWithBorder;

interface propsType {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

const Card = styled.div`
	padding: 11.25px;
	background-color: var(--white);
	border-radius: 10px;
	border: 1px solid #ececec;
`;
