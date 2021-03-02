import { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { wrapper } from '@store/index';
import { updateUserIsMobile } from '@store/actions/app';
import 'nprogress/nprogress.css';
import '../public/scss/app.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	if (typeof window !== 'undefined') {
		NProgress.configure({ showSpinner: true });

		Router.events.on('routeChangeStart', () => {
			NProgress.start();
		});

		Router.events.on('routeChangeComplete', () => {
			NProgress.done();
		});

		Router.events.on('routeChangeError', () => {
			NProgress.done();
		});
	}

	return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
	updateUserIsMobile(ctx);
	const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
	return { pageProps: pageProps };
};

export default wrapper.withRedux(MyApp);
