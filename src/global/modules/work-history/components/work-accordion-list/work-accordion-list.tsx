import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { WorkHistoryItemEntry } from "@/data/schema";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/global/components";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-2xl">{children}</p>,
  },
};
export function WorkAccordionList(props: { items: WorkHistoryItemEntry[] }) {
  const { items } = props;
  return (
    <Accordion type="single" collapsible>
      {items.map(({ companyName, description }) => {
        return (
          <AccordionItem key={`work-acc-item-${companyName}`} value={companyName}>
            <AccordionTrigger>
              <h3 className="text-6xl py-4">{companyName}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <div>{documentToReactComponents(description.json, OPTIONS)}</div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
