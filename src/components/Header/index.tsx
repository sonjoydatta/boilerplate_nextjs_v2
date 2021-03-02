import styled from 'styled-components';

const Header = (): JSX.Element => {
	return <SiteHeader>Header</SiteHeader>;
};

export default Header;

const SiteHeader = styled.header`
	position: sticky;
	top: 0;
	left: 50%;
	border-bottom: 1px solid #ececec;
	background-color: var(--white);
	z-index: 999;
`;
