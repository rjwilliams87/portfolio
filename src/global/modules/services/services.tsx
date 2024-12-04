import { ServicesModuleEntry } from "@/data/schema";

import { Accordion } from "@/global/components";

import { Service } from "./components";

export function Services(props: ServicesModuleEntry) {
  const { componentsCollection } = props;
  return (
    <div className="page-section" id="services">
      <div className="site-content-container w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-4 lg:gap-0 justify-between pb-16 lg:pb-0">
          <h2 className="text-3xl md:text-5xl">What I Do</h2>
          <p className="text-lg w-3/4 md:w-1/2 lg:relative lg:bottom-16">
            I specialize in crafting custom solutions that seamlessly blend innovation with
            functionality.
          </p>
        </div>
        <Accordion
          type="single"
          className="w-full min-w-auto md:min-w-[490px] lg:w-5/6 relative bottom-12"
          collapsible
        >
          {componentsCollection.items.map((props, index) => (
            <Service key={`accordion-${index}`} {...props} index={index} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
