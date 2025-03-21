import { projects } from "../../data"
import ProjectCard from "../../ui/ProjectCard/ProjectCard"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <div className="section__wrapper"></div>
      <div className="section__header">
        <h2 className="shine">Projects</h2>
      </div>
      <div className="projects__container">
        {projects.map((project, index) => (
            <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
