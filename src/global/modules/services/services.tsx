import { ServicesModuleEntry } from "@/data/schema";

import { Accordion } from "@/global/components";

import { Service } from "./components";

export function Services(props: ServicesModuleEntry) {
  const { componentsCollection } = props;
  return (
    <div className="page-section bg-brand-background-dark text-brand-background">
      <div className="site-content-container">
        <h2 className="page-header" id="services">
          SERVICES
        </h2>
        <Accordion type="single" collapsible>
          {componentsCollection.items.map((props, index) => (
            <Service key={`accordion-${index}`} {...props} index={index} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
