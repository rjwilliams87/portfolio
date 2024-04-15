import { z } from "zod";

import { generateRichTextSchema } from "./rich-text-schema";

export const CONTACT_ME_TYPENAME = "ModuleContactMe";

export const contactMeSchema = z.object({
  __typename: z.literal(CONTACT_ME_TYPENAME),
  showContactButton: z.boolean(),
  text: generateRichTextSchema().optional(),
});

export type ContactMeEntry = z.infer<typeof contactMeSchema>;
