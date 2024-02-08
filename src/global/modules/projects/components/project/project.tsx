import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { clsx } from "clsx";
import dayjs from "dayjs";
import Image from "next/image";

import { ProjectItemEntry } from "@/data/schema";

import s from "./project.module.css";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-xl">{children}</p>,
  },
};

const formatToolsString = (tools: string[]) => tools.join(" | ");

const Year = ({ date }: { date: string }) => <div>©{dayjs(date).format("YYYY")}</div>;

export function Project(props: ProjectItemEntry & { index?: number }) {
  const { description, completionYear, title, tools, image, index = 0 } = props;

  const containerStyles = clsx(s.root, {
    [s.reverse]: index % 2 !== 0,
  });
  const titleStyles = clsx(s.title, {
    [s["title-left"]]: index % 2 !== 0,
    [s["title-right"]]: index % 2 === 0,
  });
  const tContainerStyles = clsx("w-full flex justify-between items-center px-4", {
    "flex-row-reverse": index % 2 !== 0,
  });

  return (
    <div className={containerStyles}>
      <div className={clsx(s["project-image"])}>
        <Image src={image.url} alt={image.description || ""} objectFit="cover" layout="fill" />
      </div>
      <div className={clsx(s["project-details"])}>
        <div className="p-4 text-3xl w-full flex justify-between">
          <Year date={completionYear} />
          <div>{formatToolsString(tools)}</div>
        </div>
        <div className={tContainerStyles}>
          <div className={titleStyles}>{title}</div>
          <div className="text-7xl">.</div>
        </div>
      </div>
    </div>
  );
}
