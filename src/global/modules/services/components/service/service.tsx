import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { ServiceItemEntry } from "@/data/schema";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/global/components";
import { cn } from "@/lib/utils";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-2xl">{children}</p>,
  },
};

const formatNumber = (num: number) => {
  return num.toString().padStart(2, "0") + ". ";
};

export function Service(props: ServiceItemEntry & { index: number }) {
  const { title, description } = props;
  const num = props.index + 1;

  const style = cn({
    "hover:text-brand-red": props.index % 5 === 0,
    "hover:text-brand-pink": props.index % 5 === 1,
    "hover:text-brand-green": props.index % 5 === 2,
    "hover:text-brand-blue": props.index % 5 === 3,
    "hover:text-brand-orange": props.index % 5 === 4,
  });

  return (
    <div>
      <AccordionItem value={title} className={style}>
        <AccordionTrigger>
          <h3 className="text-3xl lg:text-7xl py-4">
            {formatNumber(num)}
            {title}
          </h3>
        </AccordionTrigger>
        <AccordionContent>
          <div>{documentToReactComponents(description.json, OPTIONS)}</div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
