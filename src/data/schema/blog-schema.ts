import { z } from "zod";

import {
  generateRichTextSchema,
  embeddedAssetSchema,
  BASIC_NODE_SCHEMAS,
} from "./rich-text-schema";

export const BLOG_TYPENAME = "ModuleBlogPost";

export const blogSchema = z.object({
  __typename: z.literal(BLOG_TYPENAME),
  body: generateRichTextSchema(BASIC_NODE_SCHEMAS, embeddedAssetSchema()),
  title: z.string(),
  readTime: z.string(),
  publishedDate: z.string(),
});

export type BlogEntry = z.infer<typeof blogSchema>;
