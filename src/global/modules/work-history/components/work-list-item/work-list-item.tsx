import { WorkHistoryItemEntry } from "@/data/schema";
import { cn } from "@/lib/utils";

type Props = WorkHistoryItemEntry & { selected: boolean; select: () => void };

export function WorkListItem(props: Props) {
  const { companyName, select, selected } = props;
  return (
    <li className={cn("lg:py-6 flex w-full justify-end")}>
      <button
        className={cn("text-brand-background text-8xl hover:text-brand-background-dark uppercase", {
          "text-brand-background-dark": selected,
        })}
        onClick={select}
      >
        {companyName}
      </button>
    </li>
  );
}
