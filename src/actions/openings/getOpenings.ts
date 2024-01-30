"use server";
import { count, eq, sql } from "drizzle-orm";
import React from "react";
import { db } from "~/server/db";
import { courts, reservations } from "~/server/db/schema";

type TimeSlot = {
  start: Date;
  end: Date;
  available: boolean;
};

export async function getOpenings(date: Date) {
  try {
    const dayStart = new Date(date.setHours(0, 0, 0, 0));
    const dayEnd = new Date(date.setHours(23, 59, 59, 999));
    const totalCourts = 4;
    const timeSlots = createTimeSlots(dayStart, dayEnd);

    const availableSlots: TimeSlot[] = [];

    for (const slot of timeSlots) {
      const slotStart = slot.start;
      const slotEnd = slot.end;

      const result = await db
        .select({
          value: count(reservations.id),
        })
        .from(reservations)
        .where(eq(reservations.startTime, slotStart))
        .execute();

      let reservationsCount = 0;
      if (result.length > 0 && result[0]) {
        reservationsCount = result[0].value;
      }

      // Include all slots, but mark as unavailable if necessary
      availableSlots.push({
        start: slot.start,
        end: slot.end,
        available: reservationsCount < totalCourts,
      });
    }

    console.log("Available slots:", availableSlots);

    return availableSlots;
  } catch (error) {
    console.error("Error fetching openings:", error);
    throw new Error("Failed to fetch openings");
  }
}

function createTimeSlots(start: Date, end: Date) {
  // Assuming hourly slots for simplicity. Adjust based on your requirement.
  const slots = [];
  const current = new Date(start.getTime());

  while (current < end) {
    const slotEnd = new Date(current.getTime());
    slotEnd.setHours(current.getHours() + 1);

    slots.push({ start: new Date(current.getTime()), end: slotEnd });

    // Move to the next hour
    current.setHours(current.getHours() + 1);
  }

  return slots;
}
