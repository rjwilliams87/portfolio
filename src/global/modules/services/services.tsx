import { ServicesModuleEntry } from "@/data/schema";

import { Service } from "./components";

export function Services(props: ServicesModuleEntry) {
  const { componentsCollection } = props;
  return (
    <div className="page-section">
      <div className="site-content-container">
        <h2 className="page-header" id="services">
          SERVICES
        </h2>
        {componentsCollection.items.map((props, index) => (
          <Service {...props} index={index} />
        ))}
      </div>
    </div>
  );
}
