import { z } from "zod";

import { imageSchema } from "./image-schema";
import { generateRichTextSchema } from "./rich-text-schema";

export const HEADER_TYPENAME = "ModulePageHeader";

export const headerSchema = z.object({
  __typename: z.literal(HEADER_TYPENAME),
  image: imageSchema.optional(),
  layout: z.enum(["image-left", "image-right", "image-top", "image-bottom"]),
  size: z.enum(["default", "large"]),
  text: generateRichTextSchema(),
});

export type HeaderEntry = z.infer<typeof headerSchema>;
