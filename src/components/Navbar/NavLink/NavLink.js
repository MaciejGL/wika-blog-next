import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './NavLink.module.css';

const NavItem = ({ link, children }) => {
	const router = useRouter();
	let attachedClasses = classes.NavLink;
	if (router.pathname === link) {
		attachedClasses = [classes.NavLink, classes.selected].join(' ');
	}
	return (
		<li className={attachedClasses}>
			<Link href={link}>
				<a>{children}</a>
			</Link>
		</li>
	);
};

export default NavItem;
