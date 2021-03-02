import { Fragment } from 'react';
import styled from 'styled-components';

const Footer = (): JSX.Element => (
	<Fragment>
		<SiteFooter>Footer</SiteFooter>
	</Fragment>
);

export default Footer;

const SiteFooter = styled.footer`
	background-color: var(--white);
	border-top: 1px solid #ececec;
`;
