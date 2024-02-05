import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { clsx } from "clsx";
import Image from "next/image";

import { ProjectItemEntry } from "@/data/schema";

import s from "./project.module.css";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-xl">{children}</p>,
  },
};

export function Project(props: ProjectItemEntry & { index?: number }) {
  const { description, title, image, index = 0 } = props;

  const containerStyles = clsx(s.root, {
    [s.reverse]: index % 2 !== 0,
  });
  const titleStyles = clsx(s.title, {
    [s["title-left"]]: index % 2 === 0,
    [s["title-right"]]: index % 2 !== 0,
  });

  return (
    <div className={containerStyles}>
      <div className={clsx(s["project-image"])}>
        <Image src={image.url} alt={image.description || ""} objectFit="cover" layout="fill" />
      </div>
      <div className={clsx(s["project-details"])}>
        <div className={titleStyles}>{title}</div>
        <div className="py-2">{documentToReactComponents(description.json, OPTIONS)}</div>
      </div>
    </div>
  );
}
