import { Link } from "preact-router/match";
import { FunctionComponent } from "preact";

import styles from "../styles/blog-pill.module.css";

interface BlogPillProps {
	title: string;
	date: string;
	id: string;
}

export const BlogPill: FunctionComponent<BlogPillProps> = ({
	id,
	title,
	date,
}) => {
	return (
		<Link href={`/blog/${id}`} className={styles.blogPill}>
			<time className={styles.time} dateTime={new Date(date).toISOString()}>
				{date}
			</time>
			<h2 className={styles.title}>{title}</h2>
		</Link>
	);
};
