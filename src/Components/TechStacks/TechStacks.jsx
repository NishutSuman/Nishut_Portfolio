import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';

const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Proficiencies
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#d00' }}
						className='devicon-angularjs-plain'
					/>
					<span>Angular</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7B6' }}
						className='devicon-typescript-plain colored'
					/>
					<span>TypeScript</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i
						style={{ color: '#7B6' }}
						className='devicon-rxjs-plain colored'
					/> */}
					<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg' style={{width:"40px"}}></img>
					<span>RxJS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>



				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-heroku-plain colored' />
					<span>Heroku</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i style={{ color: '#ed2' }}className='devicon-github-plain colored' />
					<span>Github</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-git-plain colored' />
					<span>Git</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-cypressio-original' /> */}
					<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg' style={{width:"40px"}}></img>
					<span>Jest</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-cypressio-original' /> */}
					<img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg' style={{width:"40px"}}></img>
					<span>Cypress</span>
				</div>

				

			</div>
		</div>
	);
};

export default TechStacks;
