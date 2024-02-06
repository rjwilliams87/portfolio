"use-client"; // TO DO: remove

import { clsx } from "clsx";
import Image from "next/image";
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { HeaderEntry } from "@/data/schema";
import { RotatingCTA } from "@/global/components";

import s from "./page-header.module.css";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-2xl font-semibold">{children}</p>,
    [BLOCKS.HEADING_1]: (_, children) => (
      <p style={{ lineHeight: "95%" }} className="text-9xl font-bold">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => <p className="text-6xl font-bold">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="underline text-brand-green hover:text-brand-green-dark">
        {children}
      </a>
    ),
  },
};

export function PageHeader(props: HeaderEntry) {
  const { image, layout, size, text } = props;

  const containerStyles = clsx(s["container-base"], {
    [s["container-large"]]: size === "large",
    [s["container-flex-row"]]: layout === "image-left" || layout === "image-right",
    [s["container-flex-col"]]: layout === "image-top" || layout === "image-bottom",
  });

  const textStyles = clsx(s["text-base"], {
    [s["text-flex-row"]]: layout === "image-left" || layout === "image-right",
    [s["text-flex-col"]]: layout === "image-top" || layout === "image-bottom",
    [s["text-first"]]: layout === "image-right" || layout === "image-bottom",
    [s["text-last"]]: layout === "image-left" || layout === "image-top",
  });

  const imageStyles = clsx(s["image-base"], {
    [s["image-flex-row"]]: layout === "image-left" || layout === "image-right",
    [s["image-flex-col"]]: layout === "image-top" || layout === "image-bottom",
    [s["image-first"]]: layout === "image-left" || layout === "image-top",
    [s["image-last"]]: layout === "image-right" || layout === "image-bottom",
    [s["image-small"]]: size !== "large",
  });

  return (
    <>
      <div className={containerStyles}>
        <div className={textStyles}>{documentToReactComponents(text.json, OPTIONS)}</div>
        {image && (
          <div className={imageStyles}>
            <Image src={image.url} alt={image.description || ""} objectFit="cover" layout="fill" />
          </div>
        )}
      </div>
      <RotatingCTA text="CLICK HERE • LET'S WORK TOGETHER • " />
    </>
  );
}
