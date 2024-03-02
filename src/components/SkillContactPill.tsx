import { FunctionComponent } from "preact";

import styles from "../styles/skill-contact-pill.module.css";

interface ConditionalWrapperProps {
	skillOrContact: "skill" | "contact";
	url?: string;
}

interface SkillContactProps {
	icon: string;
	iconAlt: string;
	title: string;
	skillOrContact: ConditionalWrapperProps["skillOrContact"];
	url?: string;
}

const ConditionalWrapper: FunctionComponent<ConditionalWrapperProps> = ({
	skillOrContact,
	children,
	url,
}) => {
	return skillOrContact === "contact" ? (
		<a
			className={styles.contactPill}
			href={url}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	) : (
		<div className={styles.contactPill}>{children}</div>
	);
};

const SkillContact: FunctionComponent<SkillContactProps> = ({
	icon,
	iconAlt,
	title,
	skillOrContact,
	url,
}) => {
	return (
		<ConditionalWrapper skillOrContact={skillOrContact} url={url}>
			<img className={styles.icon} src={icon} alt={iconAlt} />
			<span className={styles.title}>{title}</span>
		</ConditionalWrapper>
	);
};

export default SkillContact;
