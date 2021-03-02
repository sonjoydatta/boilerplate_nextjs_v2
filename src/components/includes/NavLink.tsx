import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ link, title, classes, ...rest }: propsType): JSX.Element => {
	const router = useRouter();

	return (
		<Link href={link}>
			<a className={`${classes}${router.asPath === link ? ' active' : ''}`} {...rest}>
				{title}
			</a>
		</Link>
	);
};

export default NavLink;

interface propsType {
	link: string;
	title: string;
	classes?: string;
}
