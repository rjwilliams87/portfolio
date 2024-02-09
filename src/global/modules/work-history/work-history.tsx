"use client";
import { useState } from "react";

import { WorkHistoryEntry } from "@/data/schema";

import { WorkAccordionList, WorkItem, WorkListItem } from "./components";

export function WorkHistory(props: WorkHistoryEntry) {
  const [selected, setSelected] = useState(0);
  const { componentsCollection = { items: [] } } = props;

  return (
    <div className="page-section bg-brand-blue-green min-h-svh" id="work">
      <div className="site-content-container">
        <h2 className="page-header">WORK</h2>
        <div className="lg:hidden">
          <WorkAccordionList items={componentsCollection.items} />
        </div>
        <div className="hidden lg:block">
          <div>
            {componentsCollection.items.map((props, i) => (
              <WorkItem key={`work-item-desc-${i}`} selected={selected === i} {...props} />
            ))}
          </div>
          <ul>
            {componentsCollection.items.map((props, i) => (
              <WorkListItem
                key={`work-history-btn-${i}`}
                selected={selected === i}
                select={() => setSelected(i)}
                {...props}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
