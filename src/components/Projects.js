import { projects } from '../logic/constents';
import Project from './Project';

const Projects = () => (
  <section className="projects">
    {
                projects.map((project) => {
                  <Project project={project} id={projects.indexOf(project)} />;
                })
            }
  </section>
);

export default Projects;
