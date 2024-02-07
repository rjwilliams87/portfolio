import { z } from "zod";

import { generateRichTextSchema, BASIC_NODE_SCHEMAS } from "./rich-text-schema";

export const SERVICES_MODULE_TYPENAME = "ModuleServices";

export const servicesModuleSchema = z.object({
  __typename: z.literal(SERVICES_MODULE_TYPENAME),
  componentsCollection: z.object({
    __typename: z.literal("ModuleServicesComponentsCollection"),
    items: z.array(
      z.object({
        __typename: z.literal("ComponentService"),
        title: z.string(),
        description: generateRichTextSchema(BASIC_NODE_SCHEMAS),
      }),
    ),
  }),
});

export type ServiceItemEntry = z.infer<
  typeof servicesModuleSchema.shape.componentsCollection.shape.items.element
>;
export type ServicesModuleEntry = z.infer<typeof servicesModuleSchema>;
