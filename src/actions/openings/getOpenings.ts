"use server";
import { sql } from "drizzle-orm";
import React from "react";
import { db } from "~/server/db";
import { courts, reservations } from "~/server/db/schema";

export async function getOpenings(date: Date) {
  try {
    const dayStart = new Date(date.setHours(0, 0, 0, 0));
    const dayEnd = new Date(date.setHours(23, 59, 59, 999));

    // Query to find all time slots where courts are reserved on the given day
    const reservedSlotsQuery = sql`
      SELECT DISTINCT ${reservations.startTime} 
      FROM ${reservations}
      WHERE (${reservations.startTime} BETWEEN ${dayStart} AND ${dayEnd}
      OR ${reservations.endTime} BETWEEN ${dayStart} AND ${dayEnd})
      AND ${reservations.courtId} IN (SELECT ${courts.id} FROM ${courts} WHERE ${courts.availabilty} = TRUE)
    `;

    const reservedSlots = await db.execute(reservedSlotsQuery);

    // Logic to calculate available time slots based on reserved slots
    // This is pseudo-code and needs to be implemented based on your time slot logic
    // const availableSlots = calculateAvailableSlots(
    //   dayStart,
    //   dayEnd,
    //   reservedSlots,
    // );

    // return availableSlots;
  } catch (error) {
    console.error("Error fetching openings:", error);
    throw new Error("Failed to fetch openings");
  }
}

// Implement this function based on your time slot duration
// function calculateAvailableSlots(dayStart, dayEnd, reservedSlots) {
// Calculate and return available time slots
// ...
// }
