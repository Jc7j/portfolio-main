import { FunctionComponent } from "preact";

import Container from "../components/Container";
import Pill from "../components/Pill";
import SkillContact from "../components/SkillContactPill";
import { BlogPill } from "../components/BlogPill";
import blogsMetadata from "../blogsMetadata.json";

import styles from "../styles/home-page.module.css";

const HomePage: FunctionComponent = () => {
	return (
		<div className={styles.homepageContainer}>
			<h1 className={styles.myName}>Jason Chiang</h1>
			<div className={styles.container}>
				<Container
					icon="static/currentlyon-icon.png"
					iconAlt="Working Icon"
					title="Currently on"
				>
					<div className={styles.currentlyOn}>
						<p>
							Actively engaging in challenging projects that enhance my
							full-stack and frontend development expertise, while continuously
							expanding my technical knowledge and engineering skill set.
						</p>
					</div>
					<h2 className={styles.pastSectionTitle}>Past</h2>
					<Pill
						logo="static/rent_logo.jpeg"
						logoAlt="Rent Solutions logo"
						title="Rent."
						description="Software Engineer II"
						dates="2021-2023"
						url="https://www.linkedin.com/company/rentsolutions/"
					/>
					<Pill
						logo="static/station_casinos_logo.jpeg"
						logoAlt="Station Casinos logo"
						title="Station Casinos"
						description="Software Engineer I"
						dates="2019-2021"
						url="https://www.linkedin.com/company/station-casinos/"
					/>
					<Pill
						logo="static/army_national_guard_logo.jpeg"
						logoAlt="United States Army logo"
						title="US Army"
						description="Combat Medic"
						dates="2015-2021"
						url="https://www.linkedin.com/company/army-national-guard/"
					/>
				</Container>
				<div className={styles.secondRowSection}>
					<Container
						title="Blog"
						icon="static/blog-icon.png"
						iconAlt="writing icon"
					>
						{blogsMetadata.map((blog) => (
							<BlogPill
								id={blog.slug}
								key={blog.slug}
								title={blog.title}
								date={blog.date}
							/>
						))}
					</Container>
					<div className={styles.skillAndContactSection}>
						<Container
							title="Skills"
							containerWidthSmall
							icon="static/running-icon.png"
							iconAlt="running icon"
						>
							<SkillContact
								skillOrContact="skill"
								icon="static/react-logo.png"
								iconAlt="React logo"
								title="Reactjs/Redux"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/javascript-logo.png"
								iconAlt="Javascript logo"
								title="Javascript"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/typescript-logo.png"
								iconAlt="Typescript logo"
								title="Typescript"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/nextjs-logo.png"
								iconAlt="Nextjs logo"
								title="Nextjs"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/nodejs-logo.png"
								iconAlt="Nodejs logo"
								title="Nodejs"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/tailwind-css-logo.png"
								iconAlt="Tailwindcss logo"
								title="Tailwind CSS"
							/>
							<SkillContact
								skillOrContact="skill"
								icon="static/git-logo.png"
								iconAlt="Git logo"
								title="Git"
							/>
						</Container>
						<Container
							title="Contact me"
							icon="static/contact-icon.png"
							iconAlt="contact icon"
						>
							<SkillContact
								skillOrContact="contact"
								title="Gmail"
								icon="static/gmail-icon.png"
								iconAlt="gmail icon"
								url="mailto:chiangjason19@gmail.com"
							/>
							<SkillContact
								skillOrContact="contact"
								title="LinkedIn"
								icon="static/linkedin-icon.png"
								iconAlt="linkedin icon"
								url="https://www.linkedin.com/in/jasonchiangjc7j/"
							/>
							<SkillContact
								skillOrContact="contact"
								title="GitHub"
								icon="static/github-icon.png"
								iconAlt="Github icon"
								url="https://github.com/Jc7j"
							/>
						</Container>
					</div>
				</div>
				<Container
					title="Projects"
					icon="static/project-icon.png"
					iconAlt="project icon"
				>
					<p className={styles.projectCurrentlyCreatingText}>
						currently creating...
					</p>
					<Pill
						logo="static/lovesick-icon.png"
						logoAlt="Lovesick Party Icon"
						title="LOVESICK K-Pop Party"
						description="Worked with Lovesick Party partners on creating a new website"
						url="https://lovesick-party.vercel.app/"
					/>
					<Pill
						logo="static/toughtalks-icon.png"
						logoAlt="Tough Talks Icon"
						title="Tough Talks"
						description="Currently building an app designed focused on mental well-being, enabling users to share and
							 automatically delete posts about stress & stress "
					/>
					<Pill
						logo="static/lvtownfridge.png"
						logoAlt="las vegas town fridge logo"
						title="Las Vegas Town Fridge"
						description="Co-founded a small organization to combat food insecurity & waste"
						url="https://www.instagram.com/lvtownfridge/"
					/>
				</Container>
			</div>
		</div>
	);
};

export default HomePage;
