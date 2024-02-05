"use-client"; // TO DO: remove

import { ProjectsEntry } from "@/data/schema";

import { Project } from "./components";

export function Projects(props: ProjectsEntry) {
  const { componentsCollection = { items: [] } } = props;

  return (
    <div className="page-section">
      <div className="site-content-container">
        <h2 className="page-header">PROJECTS</h2>
        {componentsCollection.items.map((props, index) => (
          <Project {...props} index={index} />
        ))}
      </div>
    </div>
  );
}
