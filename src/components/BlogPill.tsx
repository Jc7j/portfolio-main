import { FunctionComponent } from "preact";

import styles from "../styles/blog-pill.module.css";

interface BlogPillProps {
	title: string;
	date: string;
}

export const BlogPill: FunctionComponent<BlogPillProps> = ({ title, date }) => {
	return (
		<div className={styles.blogPill}>
			<time className={styles.time} dateTime={new Date(date).toISOString()}>
				{date}
			</time>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};
