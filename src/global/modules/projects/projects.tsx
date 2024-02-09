import { ProjectsEntry } from "@/data/schema";

import { Project } from "./components";

export function Projects(props: ProjectsEntry) {
  const { componentsCollection = { items: [] } } = props;

  return (
    <div className="page-section" id="projects">
      <div className="site-content-container">
        <h2 className="page-header">PROJECTS</h2>
        {componentsCollection.items.map((props, index) => (
          <Project key={`projects-${index}`} {...props} index={index} />
        ))}
      </div>
    </div>
  );
}
