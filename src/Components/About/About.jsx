import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from '../../Utils/WindowSize';
import styles from "./About.module.css";

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	// const [width] = WindowSize();
	// const img =
	// 	width < 650
	// 		? 'https://avatars.githubusercontent.com/u/86410121?v=4' // my Picture
	// 		: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img
					src={
						"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"
					}
					alt=""
				/>
			</div>
			<div className={styles.second}>
				<h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
					Hi Everyone! 👋 A passionate MERN (MongoDB, Express.js, React.js,
					Node.js) developer on a mission to craft powerful and user-friendly
					web applications. My GitHub is a collection of projects and code
					snippets that showcase my expertise in building full-stack solutions
					using the MERN stack. In addition to my MERN proficiency, I bring
					valuable experience in software testing with Jest, Cypress and
					CypressSatteful. I honed my skills in developing robust and scalable
					MERN applications while ensuring top-notch quality through efficient
					testing.
					<br />
					<span style={{ color: `#00a0a0` }}>
						{" "}
						I believe in staying up-to-date with the latest trends and continuously honing my skills. Currently, I'm diving deeper into Flutter, Angular and exploring ways to optimize application performance. Also I am eagerly learning Product Management and applying it's basic in my day to day coding life.
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
