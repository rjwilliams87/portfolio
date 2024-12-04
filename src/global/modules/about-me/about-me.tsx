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
        <p className="text-3xl md:text-4xl md:leading-[1.4] my-4">{children}</p>
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
    <div className="page-section" id="about">
      <div className="site-content-container flex justify-end">
        <div className="w-full lg:w-3/5">
          {documentToReactComponents(description.json, { ...renderOptions(description) })}
          <div className="flex flex-row gap-12 py-8">
            {/* hacky need to change field names */}
            {roles.map((role, index) => (
              <div key={index} className="text-xl">
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
