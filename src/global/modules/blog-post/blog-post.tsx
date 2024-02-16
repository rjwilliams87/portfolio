import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

import { BlogEntry } from "@/data/schema";
import dayjs from "dayjs";

const renderOptions = (richText: any): Options => {
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of richText.links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => <h1 className="text-3xl font-bold my-8">{children}</h1>,
      [BLOCKS.HEADING_2]: (_, children) => <h2 className="text-2xl font-bold my-6">{children}</h2>,
      [BLOCKS.HEADING_3]: (_, children) => <h3 className="text-xl font-bold my-4">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="text-xl md:leading-[1.2] my-4">{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetBlockMap.get(node.data.target.sys.id);
        return (
          <Image
            src={asset.url}
            alt=""
            className="w-full max-h-96 py-12"
            width={asset.width}
            height={asset.height}
          />
        );
      },
      [BLOCKS.UL_LIST]: (_, children) => <ul className="list-disc list-inside my-4">{children}</ul>,
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="list-decimal list-inside my-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li className="text-base md:leading-[1.2] my-2">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            className="text-brand-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
    },
  };
};
export function BlogPost(props: BlogEntry) {
  return (
    <div className="h-full px-16">
      <h1 className="text-3xl font-bold mt-8 pb-2">{props.title}</h1>
      <div>Written: {dayjs(props.publishedDate).format("MMMM DD, YYYY")}</div>
      <div className="pb-2">Read time: {props.readTime}</div>
      <div className="relative h-[400px] w-full">
        <Image
          src={props.headerImage.url}
          alt={props.headerImage.description || ""}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>{documentToReactComponents(props.body.json, { ...renderOptions(props.body) })}</div>
    </div>
  );
}
