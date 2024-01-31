"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getCourtAvailableSlots } from "~/actions/openings/getCourtOpenings";
import { set } from "date-fns";
import { createReservation } from "~/actions/reservations/create";
import { on } from "events";

export default function ReservationPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<number>();
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>();

  useEffect(() => {
    // Extract 'date' parameter from searchParams
    const dateString = searchParams.get("date");
    if (dateString) {
      try {
        const parsedDate = new Date(decodeURIComponent(dateString));
        if (!isNaN(parsedDate.getTime())) {
          // Check if the date is valid
          setSelectedDate(parsedDate);
        }
      } catch (error) {
        console.error("Error parsing date:", error);
        // Handle error (e.g., invalid date format)
      }
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (selectedCourt && selectedDate) {
      getCourtAvailableSlots(selectedCourt, selectedDate)
        .then((slots) => {
          setTimeSlots(slots);
        })
        .catch((error) => {
          console.error("Error fetching time slots:", error);
          // Handle error
        });
    }
  }, [selectedCourt, selectedDate]);

  const handleCourtSelection = (court: number) => {
    setSelectedCourt(court);
  };

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date);
  };

  const handleConfirmReservation = async () => {
    try {
      setIsSubmitting(true);

      // Example user ID - replace with actual user ID
      const userId = "example-user-id";

      // Format the start and end time for the reservation
      const startTime = new Date(
        `${selectedDate!.toISOString().split("T")[0]} ${selectedTime}`,
      );
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Assuming 1 hour duration

      // Call the server action
      const result = await createReservation(
        selectedCourt!,
        userId,
        startTime,
        endTime,
      );
      console.log("Reservation created:", result);

      // Handle post-creation logic, e.g., redirect or show a success message
    } catch (error) {
      console.error("Failed to create reservation:", error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
        <h1 className="text-lg font-semibold">Peach Tree Racquet Club</h1>
        <Button className="text-white">Login</Button>
      </header>
      <main className="flex-1 items-center justify-center p-4">
        <h1 className="text-2xl font-bold">Reserve a Court</h1>
        <SelectACourt onCourtSelect={handleCourtSelection} />
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <MainCalendar selectedDate={selectedDate} />
          <AvailableTimeSlots
            onDateChange={handleDateSelection}
            timeslots={timeSlots}
            onTimeSelect={setSelectedTime}
          />
        </div>
        <CourtInfo onNumberPlayersChange={setNumberOfPlayers} />
        <Link className="mt-4" href="/reserve/success">
          <Button
            className="w-full"
            onClick={handleConfirmReservation}
            disabled={
              isSubmitting || !selectedCourt || !selectedDate || !selectedTime
            }
          >
            Confirm Reservation
          </Button>
        </Link>
        <ReservationDetails
          selectedCourt={selectedCourt}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          numPlayers={numberOfPlayers}
        />
      </main>
    </div>
  );
}

function MainCalendar({ selectedDate }: { selectedDate: Date | null }) {
  const displayDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Select a date";

  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="p-4 text-lg font-semibold">Court Availability</h1>
        <CalendarDaysIcon className="h-6 w-6" />
      </div>
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h2 className="text-lg font-semibold">{displayDate}</h2>
        <Button variant="outline">Today</Button>
      </div>
      <div className="grid grid-cols-5 gap-4 p-6">
        <div className="col-span-1 space-y-4">
          <div className="text-sm text-gray-500">08:00 AM</div>
          <div className="text-sm text-gray-500">09:00 AM</div>
          <div className="text-sm text-gray-500">10:00 AM</div>
          <div className="text-sm text-gray-500">11:00 AM</div>
          <div className="text-sm text-gray-500">12:00 PM</div>
          <div className="text-sm text-gray-500">01:00 PM</div>
          <div className="text-sm text-gray-500">02:00 PM</div>
          <div className="text-sm text-gray-500">03:00 PM</div>
          <div className="text-sm text-gray-500">04:00 PM</div>
          <div className="text-sm text-gray-500">05:00 PM</div>
        </div>
        <div className="col-span-4 grid grid-cols-4 gap-4">
          <div className="col-span-1 space-y-2">
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
          </div>
          <div className="col-span-1 space-y-2">
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
          </div>
          <div className="col-span-1 space-y-2">
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
          </div>
          <div className="col-span-1 space-y-2">
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
            <div className="h-8 rounded bg-red-200" />
            <div className="h-8 rounded bg-blue-200" />
            <div className="h-8 rounded bg-yellow-200" />
            <div className="h-8 rounded bg-purple-200" />
            <div className="h-8 rounded bg-green-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SelectACourtProps {
  onCourtSelect: (court: number) => void;
}

function SelectACourt({ onCourtSelect }: SelectACourtProps) {
  const [activeCourt, setActiveCourt] = useState<string | null>();
  return (
    <section className="flex flex-col gap-4 py-4">
      <h3 className="text-2xl font-bold">Select a Court</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-2 rounded-md bg-gray-500">
            <img
              alt="Court 1"
              className="h-32 w-full rounded-md object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button
              onClick={() => {
                onCourtSelect(1);
                setActiveCourt("1");
              }}
              className={
                "1" === activeCourt
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            >
              Court 1
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 rounded-md bg-gray-500">
            <img
              alt="Court 2"
              className="h-32 w-full rounded-md object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button
              onClick={() => {
                onCourtSelect(2);
                setActiveCourt("2");
              }}
              className={
                "2" === activeCourt
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            >
              Court 2
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 rounded-md bg-gray-500">
            <img
              alt="Court 3"
              className="h-32 w-full rounded-md object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button
              onClick={() => {
                onCourtSelect(3);
                setActiveCourt("3");
              }}
              className={
                "3" === activeCourt
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            >
              Court 3
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2 rounded-md bg-gray-500">
            <img
              alt="Court 4"
              className="h-32 w-full rounded-md object-cover"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <Button
              onClick={() => {
                onCourtSelect(4);
                setActiveCourt("4");
              }}
              className={
                "4" === activeCourt
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            >
              Court 4
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CourtInfo({
  onNumberPlayersChange,
}: {
  onNumberPlayersChange: (number: number) => void;
}) {
  return (
    <>
      <div className="flex flex-row gap-2 space-y-2 py-4 md:flex-col md:gap-3">
        <h2 className="text-lg font-semibold">Court Information</h2>
        <div className="space-y-2">
          <Label htmlFor="number_players">Number of players</Label>
          <Input
            id="number_players"
            placeholder="Number of players"
            required
            type="number"
            onChange={(event) => {
              onNumberPlayersChange(event.target.valueAsNumber);
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="other_players">Other Players</Label>
          {/* TODO: Growable list of other players */}
          <Textarea id="other_players" placeholder="Other players..." />
          {/* <PlayerList /> */}
        </div>
      </div>
    </>
  );
}

function AvailableTimeSlots({
  onDateChange,
  timeslots,
  onTimeSelect,
}: {
  onDateChange: (date: Date) => void;
  timeslots: string[];
  onTimeSelect: (time: string | null) => void;
}) {
  const [activeTime, setActiveTime] = useState<string | null>(null);
  const router = useRouter();
  return (
    <div className="flex-1 items-center justify-center gap-2 p-2 md:gap-4">
      <Calendar
        initialFocus
        mode="range"
        numberOfMonths={1}
        disabled={(date) => date.getTime() < new Date().setHours(0, 0, 0, 0)}
        onSelect={(selectedDate) => {
          const formattedDate = selectedDate?.from;
          if (formattedDate) {
            // Assuming selectedDate is a Date object
            router.replace(
              `/reserve?date=${encodeURIComponent(
                formattedDate.toISOString(),
              )}`,
              { scroll: false },
            );
            onDateChange(formattedDate);
          }
        }}
      />
      <div className="grid gap-2">
        <h2 className="text-lg font-semibold">Available Time Slots</h2>
        <div className="grid grid-cols-2 gap-4">
          {timeslots.map((timeSlot, index) => (
            <Button
              key={index}
              className={
                activeTime === timeSlot
                  ? "w-full bg-black text-white"
                  : "w-full"
              }
              variant="outline"
              onClick={() => {
                onTimeSelect(timeSlot);
                setActiveTime(timeSlot);
              }}
            >
              {timeSlot}
            </Button>
          ))}
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea id="notes" placeholder="Any additional notes..." />
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ReservationDetails({
  selectedCourt,
  selectedDate,
  selectedTime,
  numPlayers,
}: {
  selectedCourt: number | undefined;
  selectedDate: Date | null;
  selectedTime: string | null;
  numPlayers: number | undefined;
}) {
  //check if numplayer is NaN
  if (isNaN(numPlayers!)) {
    numPlayers = 0;
  }

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "No date selected";
  return (
    <div className="mt-4 space-y-2 md:mt-8 md:space-y-4">
      <h2 className="text-lg font-semibold">Reservation Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-semibold">Date</h3>
          <p>{formattedDate}</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Time</h3>
          <p>{selectedTime ?? "No time selected"}</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Court Number</h3>
          {selectedCourt ?? "None"}
        </div>
        <div>
          <h3 className="text-md font-semibold">Number of Players</h3>
          <p>{numPlayers ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
