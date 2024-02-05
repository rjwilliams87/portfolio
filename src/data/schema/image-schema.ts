import { z } from "zod";

export const imageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
  contentType: z.string(),
});

export type ImageAsset = z.infer<typeof imageSchema>;
