import React, { Component } from 'react'
class Experience extends Component {
	render() {
		return (
			<section className="experience">
				<header className="sec-title">Experience</header>
				<div>
					<header>
						<span className="where">Stackend Solutions</span>
						<span className="what">Frontend Developer</span>
						<span className="when">June 2019 - Present</span>
					</header>
					<p>
						A SaaS consulting company for start ups. Building user interfaces
						for various software packages and web apps using React, React
						Native, Redux, and Styled Components.
					</p>
				</div>
				<div>
					<header>
						<span className="where">Seattle JS Hackers</span>
						<span className="what">Organizer / Host / Developer</span>
						<span className="when">Feb 2019 - Present</span>
					</header>
					<p>
						A local meet up group in Seattle, WA. Help organize and lead events
						with developers of all skill levels; including Open Code, Lean
						Coffee, and Code Katas. Building and maintaining groups website
						using Gatsby and SASS
					</p>
				</div>

				<div>
					<header>
						<span className="where">Ricky P's Inc</span>
						<span className="what">Operations Manager</span>
						<span className="when">Jan 2012 - Sep 2017</span>
					</header>
					<p>
						Managed a New Orleans style restaurant and bar located in St
						Petersburg, FL. Tracked cost of goods and labor, menu cost analysis,
						payroll, scheduled staff, hired and coordinated training for front
						of house.
					</p>
				</div>
				<div>
					<header>
						<span className="where">Venture Quest Mgmt</span>
						<span className="what">Manager</span>
						<span className="when">Jul 2005 - Aug 2010</span>
					</header>
					<p>
						Part of a management team at a high-volume nightclub and martini bar
						with a tapas menu in Jacksonville, FL. Scheduled and communicated
						with staff for daily business and special promotional events,
						maintained payroll, inventory management, tracked sales and compiled
						cash deposits along with credit card sales
					</p>
				</div>
			</section>
		)
	}
}

export default Experience
