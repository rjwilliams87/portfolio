import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import { z } from "zod";

import { imageSchema } from "./image-schema";

const TEXT_NODE_SCHEMA = z
  .object({
    nodeType: z.literal("text"),
  })
  .passthrough();

export const BASIC_NODE_SCHEMAS = [
  BLOCKS.PARAGRAPH,
  BLOCKS.HEADING_1,
  BLOCKS.HEADING_2,
  BLOCKS.HEADING_3,
  BLOCKS.HEADING_4,
  BLOCKS.HEADING_5,
  BLOCKS.HEADING_6,
  BLOCKS.OL_LIST,
  BLOCKS.UL_LIST,
  BLOCKS.LIST_ITEM,
  BLOCKS.HR,
  BLOCKS.QUOTE,
  BLOCKS.TABLE,
  BLOCKS.TABLE_ROW,
  BLOCKS.TABLE_CELL,
  BLOCKS.TABLE_HEADER_CELL,
  INLINES.HYPERLINK,
];

const createNodeTypeSchema = <
  T extends (typeof BASIC_NODE_SCHEMAS)[number],
  K extends z.ZodLazy<z.ZodTypeAny>,
>(
  nodeType: T,
  contentSchema: K,
) =>
  z
    .object({
      nodeType: z.literal(nodeType),
      content: contentSchema,
    })
    .passthrough();

export const embeddedAssetSchema = () =>
  z.object({
    content: z.array(z.never()),
    nodeType: z.literal("embedded-asset-block"),
    data: z.object({
      target: z.object({
        sys: z.object({
          id: z.string(),
          type: z.literal("Link"),
          linkType: z.literal("Asset"),
        }),
      }),
    }),
  });

export const generateEmbeddedEntrySchema = (
  supportedEntrySchemas: z.ZodTypeAny | [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]],
) =>
  z.object({
    content: z.array(z.never()),
    nodeType: z.literal("embedded-entry-block"),
    data: z.object({
      target: Array.isArray(supportedEntrySchemas)
        ? z.union(supportedEntrySchemas)
        : supportedEntrySchemas,
    }),
  });

export const linksSchema = z.object({
  __typename: z.string(),
  assets: z
    .object({
      block: z.array(
        z.object({
          sys: z.object({
            id: z.string(),
          }),
          ...imageSchema.shape,
        }),
      ),
    })
    .optional(),
});

export const generateRichTextSchema = (
  supportedBasicSchema: typeof BASIC_NODE_SCHEMAS = BASIC_NODE_SCHEMAS,
  ...supportedEmbeddedSchemas: z.ZodDiscriminatedUnionOption<"nodeType">[]
) => {
  const unionTypes: z.ZodDiscriminatedUnionOption<"nodeType">[] = [TEXT_NODE_SCHEMA];

  const contentSchema = z.lazy(() =>
    z.array(
      z.discriminatedUnion(
        "nodeType",
        unionTypes as [
          z.ZodDiscriminatedUnionOption<"nodeType">,
          ...z.ZodDiscriminatedUnionOption<"nodeType">[],
        ],
      ),
    ),
  );

  supportedEmbeddedSchemas?.forEach((schema) => unionTypes.push(schema));
  supportedBasicSchema.forEach((name) => {
    unionTypes.push(createNodeTypeSchema(name, contentSchema));
  });

  return z
    .object({
      json: z.object({
        nodeType: z.literal(BLOCKS.DOCUMENT),
        content: contentSchema,
      }),
      links: linksSchema.optional(),
    })
    .passthrough() as unknown as z.ZodType<
    // this needs to be fix so the types are run-time safe
    Document & { json: any; links: z.infer<typeof linksSchema> | undefined }, // this is a hack to make the type system happy need to fix
    z.ZodTypeDef,
    Document & { json: any; links: z.infer<typeof linksSchema> | undefined } // this is a hack to make the type system happy need to fix
  >;
};
