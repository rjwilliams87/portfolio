import React from "react";

import {
  PageEntry,
  AboutMeEntry,
  HeaderEntry,
  ProjectsEntry,
  WorkHistoryEntry,
  ABOUT_ME_TYPENAME,
  HEADER_TYPENAME,
  PROJECTS_TYPENAME,
  WORK_HISTORY_TYPENAME,
} from "@/data/schema";
import { AboutMe, PageHeader, Projects, WorkHistory } from "@/global/modules";

type PageModules = AboutMeEntry | HeaderEntry | ProjectsEntry | WorkHistoryEntry;

type DynamicComponentProps = {
  page: PageEntry;
};

const ComponentMap = {
  [ABOUT_ME_TYPENAME]: AboutMe,
  [HEADER_TYPENAME]: PageHeader,
  [PROJECTS_TYPENAME]: Projects,
  [WORK_HISTORY_TYPENAME]: WorkHistory,
};

export function renderComponent(data: PageModules, index: number) {
  // const { __typename, ...props } = data;
  // const Component = require(`./${__typename}`).default;
  // return <Component key={index} {...props} />;
  const Component = ComponentMap[data.__typename];
  if (!Component || !data) return null;
  return <Component key={index} {...data} />;
}

export default function DynamicComponent({ page }: DynamicComponentProps) {
  const { modulesCollection } = page;

  return (
    <div>
      {/* <SEO /> */}
      <main>{modulesCollection.items.map(renderComponent)}</main>
    </div>
  );
}
