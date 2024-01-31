"use server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "~/server/db";
import { reservations } from "~/server/db/schema";

export async function getCourtAvailableSlots(courtId: number, date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();

  // Generate all time slots for the day
  const allSlots = generateTimeSlots(date);

  // Fetch reserved time slots from the database
  const reservedSlotsResult = await db
    .select({
      startTime: reservations.startTime,
    })
    .from(reservations)
    .where(
      and(
        eq(reservations.courtId, courtId),
        eq(sql`YEAR(${reservations.startTime})`, year),
        eq(sql`MONTH(${reservations.startTime})`, month),
        eq(sql`DAY(${reservations.startTime})`, day),
      ),
    )
    .execute();

  // Convert to formatted strings
  const reservedSlots = reservedSlotsResult.map((row) => {
    const startTime = new Date(row.startTime);
    return startTime.toLocaleTimeString([], {
      timeStyle: "short",
    });
  });

  // Filter out reserved slots from all slots to get available slots
  const availableSlots = allSlots.filter(
    (slot) => !reservedSlots.includes(slot),
  );

  return availableSlots;
}

// Generates time slots from 9:00 AM to 6:00 PM at one-hour intervals
function generateTimeSlots(date: Date) {
  const slots = [];
  const startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    9,
  ); // Start at 9:00 AM

  for (let i = 0; i < 9; i++) {
    // 9 slots from 9:00 AM to 6:00 PM
    const timeString = startDate.toLocaleTimeString([], {
      timeStyle: "short",
    });
    slots.push(timeString);
    startDate.setHours(startDate.getHours() + 1); // Increment by one hour
  }

  return slots;
}
