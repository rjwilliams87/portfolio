// codegen.ts
import { CodegenConfig } from "@graphql-codegen/cli";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [URL]: {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/**/*.graphql",
  generates: {
    // generate types.ts
    "src/data/codegen/types.ts": {
      plugins: ["typescript"],
      config: { avoidOptionals: true },
    },
    // generate operations.ts
    "src/data/codegen/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types",
      },
      config: {
        withHooks: false,
        avoidOptionals: true,
      },
    },
  },
};

export default config;
