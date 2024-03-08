import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";
// import expImgWhite from "../../assets/svg/experience/expImgWhite.svg"

const Experiences = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div className={styles.experiences}>
			<h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
				Experience
			</h1>
			<div className={styles.borderBottom} />
			<div style={{width: '40%', margin:'auto'}}>
				<img
					src={
						"https://www.vyrazu.com/wp-content/uploads/2022/05/banner-for-portfolio-01.svg"
					}
					// src= {expImgWhite}
					alt=""
					style={{width: '95%'}}
				/>
			</div>
			<div className={styles.container}>
				<div className={styles.position}>
					IA --> IA LEAD -->{" "}
					<span style={{ color: "white", fontWeight: "bold" }}>SDE-1</span>{" "}
					<a href="http://www.slic.org.in/">
						Nolan Edtech Pvt Ltd(Masai School)
					</a>
				</div>
				<div className={styles.date}>April 2022 - Present</div>
				<fieldset className={styles.responsibilites}>
					<legend>
						<h3> Roles & responsibilites </h3>
					</legend>
					<ul>
						<span style={{ color: "white", fontWeight: "bold" }}>
							SDE-1 (Mar 2023 - Present)
						</span>
						<li>
							Worked collaboratively with Tech and Product teams to
							contribute to key company projects, including the in-house 'Resume
							Builder' project by developing versatile UI templates.
						</li>
						<li>
							Automated the 'Construct Week' process through the creation of a
							'Git Contribution Tool' utilizing GitHub APIs, enhancing project
							efficiency and collaboration.
						</li>
						<li>
							Implemented front-end features such as 'Instructor Cards' for the
							Masai official website and contributed to the development of the
							Learning Management System (LMS) by adding functionalities like
							sorting, filtering, and bulk creation of lectures.
						</li>
						<span style={{ color: "white", fontWeight: "bold" }}>
							IA LEAD (Sept 2022 - Mar 2023)
						</span>
						<li>
							Led and taught Data Structures and Algorithms (DSA) live classes,
							enhancing students' technical skills and understanding.
						</li>
						<li>
							Collaborated closely with Operations, Placement, Outcome, and
							Business Development teams to align educational strategies with
							business objectives.
						</li>
						<li>
							Conducted over 1000 mock interviews to prepare students for the
							job market and contributed significantly to the development and
							enhancement of the question bank.
						</li>
						<span style={{ color: "white", fontWeight: "bold" }}>
							IA (Apr 2022 - Sept 2022)
						</span>
						<li>
							Facilitated standup sessions for doubt clearance and engaged in
							one-on-one pair programming sessions to assist students with their
							learning journey.
						</li>
						<li>
							Supported the lead instructor during live classes, and
							collaborated with the curriculum team to ensure course content is
							up-to-date and effective.
						</li>
						<li>
							Managed and oversaw students' projects, acting as a project
							manager to ensure timely completion and adherence to learning
							objectives.
						</li>
					</ul>
				</fieldset>
			</div>

			<br />
		</div>
	);
};

export default Experiences;
