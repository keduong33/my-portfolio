import { GaEventAction, GaEventCategory } from "../googleAnalytics";
import { projects } from "./utils/projects";
const placeholder = "/thinking-face.svg";

function Projects() {
  return (
    <div id="projects">
      <div className="pb-2 prose">
        <h2>Projects</h2>
      </div>
      <div className="flex flex-col items-center w-full gap-5 lg:flex-row">
        {projects.map((project, index) => (
          <div
            className="card card-compact w-[300px] h-[360px] bg-neutral shadow-xl"
            key={`Project #${index + 1}`}
          >
            <figure className="px-4 mb-0">
              <img
                src={project.imageLink ?? placeholder}
                alt={project.title}
                className="max-w-[150px] max-h-[150px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="justify-center w-full mt-0 card-title">
                {project.title}
              </h2>
              <p className="text-justify">{project.description}</p>

              <div className="card-actions">
                {project.demoLink && (
                  <a
                    className="link link-primary"
                    href={project.demoLink}
                    target="_blank"
                    onClick={() =>
                      gtag("event", GaEventAction.InterestClick, {
                        event_category: GaEventCategory.ProjectInterest,
                        event_label: `${project.title}-Demo`,
                        project: project.id,
                      })
                    }
                  >
                    Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    className="link link-secondary"
                    href={project.githubLink}
                    target="_blank"
                    onClick={() =>
                      gtag("event", GaEventAction.InterestClick, {
                        event_category: GaEventCategory.ProjectInterest,
                        event_label: `${project.title}-Github`,
                        project: project.id,
                      })
                    }
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
