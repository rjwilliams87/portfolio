import { z } from "zod";

import {
  generateRichTextSchema,
  embeddedAssetSchema,
  BASIC_NODE_SCHEMAS,
} from "./rich-text-schema";

export const ABOUT_ME_TYPENAME = "ModuleAboutMe";

export const aboutMeSchema = z.object({
  __typename: z.literal(ABOUT_ME_TYPENAME),
  description: generateRichTextSchema(BASIC_NODE_SCHEMAS, embeddedAssetSchema()),
  email: z.string(),
  phone: z.string(),
  roles: z.array(z.string()),
});

export type AboutMeEntry = z.infer<typeof aboutMeSchema>;
