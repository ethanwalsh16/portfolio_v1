import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero"
import About from "./components/AboutHolder"
import Footer from "./components/Footer"
import ExperienceHolder from "./components/ExperienceHolder"
import ProjectsHolder from "./components/ProjectsHolder"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import { experiences, projects, about, navlinks } from './data/content.json'

function App() {

	return (
		<>
			<Header links={navlinks} />
			<Hero />
			<About aboutText={about} />
			<div id="experience" className="experience"><ExperienceHolder experiences={experiences}/></div>
			<div id="projects" className="projects"><ProjectsHolder projects={projects} /></div>
			<div className="flex justify-center space-x-4 pt-8">
				<div id="resume" className="resume"><Resume /></div>
				<div id="contact" className="contact"><Contact /></div>
			</div>
			<Footer />
		</>
  )
}

export default App;
