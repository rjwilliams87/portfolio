import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import dayjs from "dayjs";

import { WorkHistoryItemEntry } from "@/data/schema";
import { cn } from "@/lib/utils";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-lg lg:text-xl text-brand-background-dark">{children}</p>
    ),
  },
};

type Props = WorkHistoryItemEntry & { selected: boolean };

export function WorkItem(props: Props) {
  const { description, selected, startDate, title } = props;

  return (
    <div
      className={cn("py-2 absolute w-2/5", {
        hidden: !selected,
      })}
    >
      <div className="text-5xl lg:text-8xl xl:text-9xl uppercase font-semibold text-brand-background-dark pb-4 px-6 border-l-8 border-brand-background-dark">
        {dayjs(startDate).format("YYYY")}
      </div>
      <div className="px-6 border-l-8 border-brand-background-dark">
        {documentToReactComponents(description.json, OPTIONS)}
      </div>
    </div>
  );
}
