import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { clsx } from "clsx";
import Image from "next/image";

import { ServiceItemEntry } from "@/data/schema";

import s from "./project.module.css";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-xl">{children}</p>,
  },
};

export function Service(props: ServiceItemEntry & { index?: number }) {
  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
