// src/db/seed.ts
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { reservations } from "./schema";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });

if (!("DATABASE_URL" in process.env))
  throw new Error("DATABASE_URL not found on .env.development");

const main = async () => {
  const client = new mysql.createConnection(process.env.DATABASE_URL);
  const db = drizzle(client);
  const data: (typeof reservations.$inferInsert)[] = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: `${i + 1}`,
      courtId: 1,
      startTime: faker.date.recent(),
      endTime: faker.date.recent(),
      userId: "1",
    });
  }

  console.log("Seed start");
  await db.insert(reservations).values(data);
  console.log("Seed done");
};

main();
