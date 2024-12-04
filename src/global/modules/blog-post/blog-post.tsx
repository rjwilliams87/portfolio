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
      [BLOCKS.HEADING_1]: (_, children) => <h1 className="text-3xl font-bold mt-12">{children}</h1>,
      [BLOCKS.HEADING_2]: (_, children) => <h2 className="text-2xl font-bold mt-12">{children}</h2>,
      [BLOCKS.HEADING_3]: (_, children) => <h3 className="text-xl font-bold mt-4">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="text-lg md:leading-[1.8] my-4">{children}</p>
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
            className="text-brand-blue-light hover:underline"
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
    <div className="h-full pb-24">
      <h1 className="text-4xl font-medium mt-4 pb-8">{props.title}</h1>
      <div className="flex gap-12 pb-6">
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Published</span>
          <span className="text-[#999]">{dayjs(props.publishedDate).format("MMMM DD, YYYY")}</span>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <span className="font-semibold">Read Time</span>
          <span className="text-[#999]">{props.readTime}</span>
        </div>
      </div>
      <div className="relative h-[400px] md:h-[800px] w-full overflow-hidden rounded-md">
        <Image
          src={props.headerImage.url}
          alt={props.headerImage.description || ""}
          objectFit="cover"
          layout="fill"
          className="pb-8 rounded-md"
        />
      </div>
      <div className="md:w-2/3">
        {documentToReactComponents(props.body.json, { ...renderOptions(props.body) })}
      </div>
    </div>
  );
}
