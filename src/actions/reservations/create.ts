"use server";
// server/actions/createReservation.ts

import { db } from "~/server/db";
import { reservations } from "~/server/db/schema";

// Assuming courtId and userId are numbers and startTime, endTime are Dates
export async function createReservation(
  courtId: number,
  userId: string,
  startTime: Date,
  endTime: Date,
) {
  try {
    const result = await db
      .insert(reservations)
      .values({
        courtId, // Ensure these column names match your schema
        userId, // e.g., 'courtId' should be the name of the column in your database
        startTime,
        endTime,
      })
      .execute();

    return result;
  } catch (error) {
    console.error("Error creating reservation:", error);
    throw new Error("Failed to create reservation");
  }
}
