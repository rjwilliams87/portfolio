import React from "react";

import {
  PageEntry,
  AboutMeEntry,
  HeaderEntry,
  ProjectsEntry,
  ServicesModuleEntry,
  WorkHistoryEntry,
  ABOUT_ME_TYPENAME,
  HEADER_TYPENAME,
  PROJECTS_TYPENAME,
  SERVICES_MODULE_TYPENAME,
  WORK_HISTORY_TYPENAME,
} from "@/data/schema";
import { AboutMe, PageHeader, Projects, Services, WorkHistory } from "@/global/modules";

type PageModules =
  | AboutMeEntry
  | HeaderEntry
  | ProjectsEntry
  | ServicesModuleEntry
  | WorkHistoryEntry;

type DynamicComponentProps = {
  page: PageEntry;
};

const ComponentMap = {
  [ABOUT_ME_TYPENAME]: AboutMe,
  [HEADER_TYPENAME]: PageHeader,
  [PROJECTS_TYPENAME]: Projects,
  [SERVICES_MODULE_TYPENAME]: Services,
  [WORK_HISTORY_TYPENAME]: WorkHistory,
};

export function renderComponent(data: PageModules, index: number) {
  const Component = ComponentMap[data.__typename] as React.FC<PageModules> | undefined;
  if (!Component || !data) return null;
  return <Component {...data} />;
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
