"use server";
import { revalidatePath } from "next/cache";
import { reservations } from "~/server/db/schema";
import { db } from "~/server/db/index";

// actions/create-reservation.ts
export async function createReservationAction(formData: FormData) {
  "use server";

  // const id: varchar("id", { length: 255 }).notNull().primaryKey(),
  // courtId: varchar("courtId", { length: 255 }).notNull(),
  // userId: varchar("userId", { length: 255 }).notNull(),
  // startTime: timestamp("startTime", { mode: "date" }).notNull(),
  // endTime: timestamp("endTime", { mode: "date" }).notNull(),
  // create dummy datat for the reservation
  const courtId = "1";
  const userId = "1";
  const startTime = new Date(formData.get("startTime") as string);
  const endTime = new Date(formData.get("endTime") as string);
  console.log("startTime", startTime);
  console.log("endTime", endTime);

  //insert into the database
  // await db.insert(reservations).values({ courtId, userId, startTime, endTime });
  revalidatePath("/home"); // Revalidate page to see new content
}

// how do apis work?
// request -> response

// const apiroute nextrequest -> nextresponse
