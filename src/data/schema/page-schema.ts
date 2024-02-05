import { z } from "zod";

import { aboutMeSchema } from "./about-schema";
import { headerSchema } from "./header-schema";
import { projectsSchema } from "./projects-schema";
import { workHistorySchema } from "./work-history-schema";

export const pageSchema = z.object({
  __typename: z.literal("Page"),
  modulesCollection: z.object({
    __typename: z.literal("PageModulesCollection"),
    items: z.array(
      z.union([aboutMeSchema, headerSchema, projectsSchema, workHistorySchema]),
    ),
  }),
  slug: z.string(),
  sys: z.object({
    id: z.string(),
  }),
});

export type PageEntry = z.infer<typeof pageSchema>;
