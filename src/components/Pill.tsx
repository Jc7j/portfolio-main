import clsx from "clsx";
import { FunctionComponent } from "preact";

import styles from "../styles/pill.module.css";

interface PillProps {
	title: string;
	description: string;
	logo?: string;
	logoAlt?: string;
	dates?: string;
	url?: string;
}

const Pill: FunctionComponent<PillProps> = ({
	logo,
	logoAlt,
	description,
	title,
	dates,
	url,
}) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className={clsx(styles.pillLink, url && styles.pillLinkHover)}
		>
			<div className={styles.pillContainer}>
				<img className={styles.logo} src={logo} alt={logoAlt} />
				<div className={styles.details}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.pillDescriptionContainer}>
						<p className={styles.role}>{description}</p>
						<p className={styles.dates}>{dates}</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default Pill;
