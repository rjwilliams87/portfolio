import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

import { AboutMeEntry } from "@/data/schema";

const renderOptions = (richText: any): Options => {
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of richText.links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => (
        <p className="text-3xl md:text-6xl md:leading-[1.2] my-4">{children}</p>
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

export function AboutMe(props: AboutMeEntry) {
  const { description, email, phone, roles } = props;

  return (
    <div className="page-section">
      <div className="site-content-container">
        <h2 className="font-bold md:float-start text-2xl md:pr-[30%]" id="about">
          ABOUT
        </h2>
        <div>{documentToReactComponents(description.json, { ...renderOptions(description) })}</div>
      </div>
    </div>
  );
}
