import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

import { BlogEntry } from "@/data/schema";

const renderOptions = (richText: any): Options => {
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of richText.links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (_, children) => <h1 className="text-4xl font-bold my-8">{children}</h1>,
      [BLOCKS.HEADING_2]: (_, children) => <h2 className="text-3xl font-bold my-6">{children}</h2>,
      [BLOCKS.HEADING_3]: (_, children) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="text-base md:leading-[1.2] my-4">{children}</p>
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
    },
  };
};
export function BlogPost(props: BlogEntry) {
  return (
    <div className="h-full">
      <h1>{props.title}</h1>
      <div>{documentToReactComponents(props.body.json, { ...renderOptions(props.body) })}</div>
    </div>
  );
}
