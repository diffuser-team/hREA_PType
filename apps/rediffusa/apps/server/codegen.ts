import yml from "yaml";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { writeFileSync } from "fs";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const config: CodegenConfig = {
  schema: `http://localhost:/${PORT}`,
  documents: ["scripts/setup-hrea.ts"],
  generates: {
    "./scripts/gql/": {
      preset: "client-preset",
      plugins: [],
    },
  },
};

/**
 * We need to save as yml so that it can be read by graphql-codegen-esm
 */

writeFileSync("codegen.yml", yml.stringify(config));

export default config;
