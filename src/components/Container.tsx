import { FunctionComponent } from "preact";

import styles from "../styles/container.module.css";

interface ContainerProps {
	title: string;
	containerWidthSmall?: boolean;
	containerWidthLarge?: boolean;
	icon?: string;
	iconAlt?: string;
	width?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
	children,
	icon,
	iconAlt,
	title,
}) => {
	return (
		<div className={styles.container}>
			{icon && (
				<img className={styles.containerIcon} src={icon} alt={iconAlt} />
			)}
			<h2 className={styles.containerTitle}>{title}</h2>
			{children}
		</div>
	);
};

export default Container;
