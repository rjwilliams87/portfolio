import assert from "assert";
import { Client, cacheExchange, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    assert(spaceId, "NEXT_PUBLIC_CONTENTFUL_SPACE_ID is not set");
    assert(accessToken, "NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN is not set");

    _client = new Client({
      url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      fetchOptions: () => {
        return {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };
      },
      requestPolicy: "cache-and-network",
      exchanges: [cacheExchange, fetchExchange],
    });
  }

  const client = _client;
  return { client };
};
