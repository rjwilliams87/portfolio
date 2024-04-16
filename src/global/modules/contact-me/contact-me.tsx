import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { ContactMeEntry } from "@/data/schema";
import { MagneticButton } from "@/global/components";

const OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-xl w-3/5 mx-auto text-center">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_, children) => (
      <p className="text-5xl lg:text-7xl pb-6 lg:pb-8 font-medium text-center">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => <p className="text-3xl lg:text-5xl">{children}</p>,
  },
};

export function ContactMe(props: ContactMeEntry) {
  const { showContactButton, text } = props;
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full py-20 md:py-36 bg-floral-white text-brand-black">
      {text && <div className="pb-10">{documentToReactComponents(text.json, OPTIONS)}</div>}
      {showContactButton && <MagneticButton theme="dark">{"Let's Talk"}</MagneticButton>}
    </div>
  );
}
