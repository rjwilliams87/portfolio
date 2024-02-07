import { WorkHistoryEntry } from "@/data/schema";

import { WorkItem } from "./components";

export function WorkHistory(props: WorkHistoryEntry) {
  const { componentsCollection = { items: [] } } = props;

  return (
    <div className="page-section bg-brand-green-light">
      <div className="site-content-container">
        <h2 className="page-header" id="work">
          WORK
        </h2>
        {componentsCollection.items.map(WorkItem)}
      </div>
    </div>
  );
}
