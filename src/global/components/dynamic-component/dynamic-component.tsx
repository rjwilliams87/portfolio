import React from "react";

import {
  PageEntry,
  AboutMeEntry,
  BlogEntry,
  ContactMeEntry,
  HeaderEntry,
  ProjectsEntry,
  ServicesModuleEntry,
  WorkHistoryEntry,
  ABOUT_ME_TYPENAME,
  BLOG_TYPENAME,
  CONTACT_ME_TYPENAME,
  HEADER_TYPENAME,
  PROJECTS_TYPENAME,
  SERVICES_MODULE_TYPENAME,
  WORK_HISTORY_TYPENAME,
} from "@/data/schema";
import {
  AboutMe,
  BlogPost,
  ContactMe,
  PageHeader,
  Projects,
  Services,
  WorkHistory,
} from "@/global/modules";

type PageModules =
  | AboutMeEntry
  | BlogEntry
  | ContactMeEntry
  | HeaderEntry
  | ProjectsEntry
  | ServicesModuleEntry
  | WorkHistoryEntry;

type DynamicComponentProps = {
  page: PageEntry;
};

const ComponentMap = {
  [ABOUT_ME_TYPENAME]: AboutMe,
  [BLOG_TYPENAME]: BlogPost,
  [CONTACT_ME_TYPENAME]: ContactMe,
  [HEADER_TYPENAME]: PageHeader,
  [PROJECTS_TYPENAME]: Projects,
  [SERVICES_MODULE_TYPENAME]: Services,
  [WORK_HISTORY_TYPENAME]: WorkHistory,
};

export function renderComponent(data: PageModules, index: number) {
  console.log(data.__typename);
  const Component = ComponentMap[data.__typename] as React.FC<PageModules> | undefined;
  console.log(Component?.name);
  console.log(ComponentMap[ABOUT_ME_TYPENAME].name);
  // console.log(ComponentMap[CONTACT_ME_TYPENAME].name);
  // if (data.__typename === CONTACT_ME_TYPENAME) return <ContactMe {...data} key={`dc-${index}`} />;
  if (!Component || !data) return null;
  return <Component {...data} key={`dc-${index}`} />;
}

export default function DynamicComponent({ page }: DynamicComponentProps) {
  const { modulesCollection } = page;

  return (
    <>
      {/* <SEO /> */}
      {modulesCollection.items.map(renderComponent)}
    </>
  );
}
