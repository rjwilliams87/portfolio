import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { FaCode } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { IoCloud } from "react-icons/io5";
import { GoSync } from "react-icons/go";

import { ServiceItemEntry } from "@/data/schema";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/global/components";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-xl">{children}</p>,
  },
};

export function Service(props: ServiceItemEntry & { index: number }) {
  const { title, description, index } = props;

  return (
    <div className="w-full">
      <AccordionItem value={title} className="border-b-[#ffffff34] hover:border-b-floral-white">
        <AccordionTrigger>
          <div className="h-full flex flex-row gap-6 items-center">
            {/* TO DO: need to add to confing in contentful */}
            {index === 0 && <FaCode className="h-12 w-12" />}
            {index === 1 && <FaMobile className="h-12 w-12" />}
            {index === 2 && <IoCloud className="h-12 w-12" />}
            {index === 3 && <GoSync className="h-12 w-12" />}
            <h3 className="text-2xl py-6">{title}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div>{documentToReactComponents(description.json, OPTIONS)}</div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
