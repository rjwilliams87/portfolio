import { clsx } from "clsx";
import Image from "next/image";
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { HeaderEntry } from "@/data/schema";
import { SocialLinksBox } from "@/global/components";

import s from "./page-header.module.css";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="text-lg sm:text-xl sm:w-3/4">{children}</p>,
    [BLOCKS.HEADING_1]: (_, children) => (
      <p className="text-4xl sm:text-5xl lg:text-7xl pb-6 lg:pb-8 font-medium">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => <p className="text-3xl lg:text-5xl">{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="underline text-brand-green hover:text-brand-green-dark">
        {children}
      </a>
    ),
  },
};

export function PageHeader(props: HeaderEntry) {
  const { image, layout, size, text } = props;

  const containerStyles = clsx(s["container-base"], "text-floral-white", {
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
    <div className={containerStyles}>
      <div className={textStyles}>
        {documentToReactComponents(text.json, OPTIONS)}
        <div className="pt-10">
          <SocialLinksBox />
        </div>
      </div>
      {image && (
        <div className={imageStyles}>
          <Image src={image.url} alt={image.description || ""} objectFit="cover" layout="fill" />
        </div>
      )}
    </div>
  );
}
