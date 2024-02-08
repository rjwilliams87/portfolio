"use client";
import { useState } from "react";
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { WorkHistoryEntry } from "@/data/schema";
import { cn } from "@/lib/utils";

import { WorkItem } from "./components";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-3xl">{children}</p>,
  },
};

export function WorkHistory(props: WorkHistoryEntry) {
  const [selected, setSelected] = useState(0);
  const { componentsCollection = { items: [] } } = props;

  return (
    <div className="page-section bg-brand-blue-green min-h-svh">
      <div className="site-content-container">
        <h2 className="page-header" id="work">
          WORK
        </h2>
        <div>
          <div>
            {componentsCollection.items.map((props, i) => (
              <div
                className={cn("py-2 absolute w-2/5", {
                  hidden: selected !== i,
                })}
              >
                {documentToReactComponents(props.description.json, OPTIONS)}
              </div>
            ))}
          </div>
          <div>
            {componentsCollection.items.map(({ companyName }, i) => (
              <div className={cn("lg:py-6 flex w-full justify-end")}>
                <button
                  className={cn(
                    "text-brand-background text-8xl hover:text-brand-background-dark uppercase",
                    {
                      "text-brand-background-dark": selected === i,
                    },
                  )}
                  onClick={() => setSelected(i)}
                >
                  {companyName}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
