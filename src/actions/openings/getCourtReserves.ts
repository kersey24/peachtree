"use server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "~/server/db"; // Ensure you have the correct path
import { reservations } from "~/server/db/schema";

export async function getCourtReserves(courtId: number, date: Date) {
  // Extract year, month, and day from the provided date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();

  const result = await db
    .select({
      startTime: reservations.startTime,
      endTime: reservations.endTime,
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

  // Process and return the results
  const timeSlots = result.map((row) => {
    const startTime = new Date(row.startTime);
    return startTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  return timeSlots;
}
