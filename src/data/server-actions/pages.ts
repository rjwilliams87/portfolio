import {
  AllPagesDocument,
  AllPagesQuery,
  AllPagesQueryVariables,
  LandingPageDocument,
  LandingPageQuery,
  LandingPageQueryVariables,
  PageByIdDocument,
  PageByIdQuery,
  PageByIdQueryVariables,
} from "@/data/codegen/operations";
import { pageSchema } from "@/data/schema";
import { getUrqlClient } from "@/data/urql";

export async function getAllPages() {
  const { client } = getUrqlClient();
  const results = await client.query<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, {});
  return results;
}

export async function getLandingPage() {
  const { client } = getUrqlClient();
  const results = await client.query<LandingPageQuery, LandingPageQueryVariables>(
    LandingPageDocument,
    {},
  );
  const _page = results.data?.pageCollection?.items[0];
  const page = pageSchema.parse(_page);
  return { data: page, error: results.error };
}

export async function getPageById(id: string) {
  const { client } = getUrqlClient();
  const results = await client.query<PageByIdQuery, PageByIdQueryVariables>(PageByIdDocument, {
    id,
  });
  return results;
}
