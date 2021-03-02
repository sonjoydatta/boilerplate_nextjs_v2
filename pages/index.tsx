import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import MainLayout from '@components/layouts/MainLayout';

const Homepage = (): JSX.Element => {
	return (
		<MainLayout>
			<Head>
				<title>Next.js Boilerplate V2</title>
			</Head>

			<Container>
				<Row>
					<Col>
						<h2 className="text-dark mt-3">Next.js Boilerplate</h2>
						<p className="text-black-50">
							by Sonjoy Datta - <a href={process.env.website}>website</a>
						</p>

						<div className="w-100 d-block">
							<h5 className="text-dark text-uppercase mb-0">Technology</h5>
							<p>Next.js, TypeScript, Bootstrap, ESlint, SCSS and more.</p>
						</div>
					</Col>
				</Row>
			</Container>
		</MainLayout>
	);
};

export default Homepage;
