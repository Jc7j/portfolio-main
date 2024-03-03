import { Link } from "preact-router/match";
import { FunctionComponent } from "preact";

import styles from "../styles/sidebar.module.css";

const Sidebar: FunctionComponent = () => {
	return (
		<aside className={styles.sidebar}>
			<nav>
				<ul>
					<Link class={styles.link} href="/">
						Home
					</Link>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
