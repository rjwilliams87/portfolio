import { z } from "zod";

import { generateRichTextSchema } from "./rich-text-schema";
import { imageSchema } from "./image-schema";

export const PROJECTS_TYPENAME = "ModuleProjects";

export const projectsSchema = z.object({
  __typename: z.literal(PROJECTS_TYPENAME),
  componentsCollection: z.object({
    __typename: z.literal("ModuleProjectsComponentsCollection"),
    items: z.array(
      z.object({
        __typename: z.literal("ComponentProject"),
        description: generateRichTextSchema(),
        image: imageSchema,
        title: z.string(),
      }),
    ),
  }),
});

export type ProjectItemEntry = z.infer<
  typeof projectsSchema.shape.componentsCollection.shape.items.element
>;
export type ProjectsEntry = z.infer<typeof projectsSchema>;
