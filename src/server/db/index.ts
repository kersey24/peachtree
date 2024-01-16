/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "~/env";
import * as schema from "./schema";

export const db = drizzle(
  new Client({
    url: env.DATABASE_URL,
    // password: env.DATABASE_PASSWORD,
  }).connection(),
  { schema, logger: true },
);
