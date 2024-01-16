/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Config } from "drizzle-kit";

// import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./src/server/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  strict: true,
  tablesFilter: ["peachtreescheduler_*"],
} satisfies Config;
