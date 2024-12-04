import { z } from "zod";
import {
  AllBlogPostsDocument,
  AllBlogPostsQuery,
  AllBlogPostsQueryVariables,
} from "@/data/codegen/operations";
import { imageSchema } from "@/data/schema";
import { getUrqlClient } from "@/data/urql";

export async function getAllBlogs() {
  const { client } = getUrqlClient();
  const results = await client.query<AllBlogPostsQuery, AllBlogPostsQueryVariables>(
    AllBlogPostsDocument,
    {},
  );

  const rawBlogSchema = z.object({
    linkedFrom: z.object({
      pageCollection: z.object({
        items: z.array(z.object({ slug: z.string() })),
      }),
    }),
    title: z.string(),
    readTime: z.string(),
    publishedDate: z.string(),
    headerImage: imageSchema,
  });

  const { items } = results.data?.moduleBlogPostCollection || { items: [] };
  const postsWithLink = items.filter((post) => {
    const parsed = rawBlogSchema.safeParse(post);
    return parsed.success;
  });
  const formattedPosts = postsWithLink.map((post) => {
    const { linkedFrom, ...rest } = rawBlogSchema.parse(post);
    const [page] = linkedFrom.pageCollection.items;
    return { ...rest, slug: page.slug };
  });

  return formattedPosts;
}
