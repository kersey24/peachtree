/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "~/server/db";
import { reservations, courts } from "~/server/db/schema";

interface Reservation {
  courtId: number;
  startTime: Date;
  endTime: Date;
}

interface CourtReservation {
  start: string;
  end: string;
}

// This type maps court IDs to arrays of reservations for that court
type ReservationsByCourt = Record<number, CourtReservation[]>;

export async function getDailyReservations(
  date: Date,
): Promise<ReservationsByCourt> {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();

  // Fetch all reservations for the selected day across all courts
  const reservationsResult: Reservation[] = await db
    .select({
      courtId: reservations.courtId,
      startTime: reservations.startTime,
      endTime: reservations.endTime,
    })
    .from(reservations)
    .where(
      and(
        eq(sql`YEAR(${reservations.startTime})`, year),
        eq(sql`MONTH(${reservations.startTime})`, month),
        eq(sql`DAY(${reservations.startTime})`, day),
      ),
    )
    .execute();

  // Process the reservations to group them by courtId
  const reservationsByCourt = reservationsResult.reduce<ReservationsByCourt>(
    (acc, curr) => {
      const { courtId, startTime, endTime } = curr;
      const start = new Date(startTime).toLocaleTimeString([], {
        timeStyle: "short",
      });
      const end = new Date(endTime).toLocaleTimeString([], {
        timeStyle: "short",
      });

      if (!acc[courtId]) acc[courtId] = [];
      acc[courtId]?.push({ start, end });

      return acc;
    },
    {},
  );

  return reservationsByCourt;
}
