import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { clsx } from "clsx";
import dayjs from "dayjs";

import { WorkHistoryItemEntry } from "@/data/schema";
import { Pill } from "@/global/components";

import s from "./work-item.module.css";

const MAX_SM_SCREEN_SKILLS = 3;

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-xl">{children}</p>,
  },
};

function WorkDetails(props: { date: string; title: string }) {
  return (
    <div className="text-lg">
      <span className="hidden xl:inline-block">{props.title}</span>
      <span className={clsx(s.bullet, "hidden xl:inline-block")}></span>
      <span>{dayjs(props.date).format("MMMM")}</span>
      <span className={s.bullet}></span>
      <span>{dayjs(props.date).year()}</span>
    </div>
  );
}

export function WorkItem(props: WorkHistoryItemEntry) {
  const { companyName, description, skills, startDate, title } = props;

  const minimalSkills = skills.slice(0, MAX_SM_SCREEN_SKILLS).filter(Boolean);

  return (
    <div
      key={companyName}
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 md:gap-4 lg:gap-20 xl:gap-40 py-8"
    >
      <div>
        <div className="text-4xl py-2">{companyName}</div>
        <WorkDetails date={startDate} title={title} />
      </div>
      <div>
        <div className="py-2">{documentToReactComponents(description.json, OPTIONS)}</div>
        <div className="sm:hidden flex flex-wrap gap-4 py-4">
          {minimalSkills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
        <div className="hidden sm:flex flex-wrap gap-4 py-4 lg:py-0">
          {skills.map((skill, index) => (
            <Pill key={`${skill}-${index}`}>{skill}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
}
