import { Fragment } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const MainLayout = ({ children }: propsType): JSX.Element => (
	<Fragment>
		<Header />
		<main>{children}</main>
		<Footer />
	</Fragment>
);

export default MainLayout;

interface propsType {
	children: JSX.Element | JSX.Element[];
}
