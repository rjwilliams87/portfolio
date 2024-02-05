import { z } from "zod";

import { generateRichTextSchema } from "./rich-text-schema";

export const WORK_HISTORY_TYPENAME = "ModuleWorkHistory";

export const workHistorySchema = z.object({
  __typename: z.literal(WORK_HISTORY_TYPENAME),
  componentsCollection: z.object({
    __typename: z.literal("ModuleWorkHistoryComponentsCollection"),
    items: z.array(
      z.object({
        __typename: z.literal("ComponentWorkHistoryItem"),
        companyName: z.string(),
        description: generateRichTextSchema(),
        endDate: z.nullable(z.string()),
        skills: z.array(z.string()),
        startDate: z.string(),
        title: z.string(),
      }),
    ),
  }),
});

export type WorkHistoryItemEntry = z.infer<
  typeof workHistorySchema.shape.componentsCollection.shape.items.element
>;
export type WorkHistoryEntry = z.infer<typeof workHistorySchema>;
