"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export default function ReservationPage() {
  const [selectedCourt, setSelectedCourt] = useState<number>();

  const handleCourtSelection = (court: number) => {
    setSelectedCourt(court);
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
          <MainCalendar />
          <AvailableTimeSlots />
        </div>
        <CourtInfo />
        <Link className="mt-4" href="/reserve/confirm">
          <Button className="w-full">Confirm Reservation</Button>
        </Link>
        <ReservationDetails selectedCourt={selectedCourt} />
      </main>
    </div>
  );
}

function MainCalendar() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="p-4 text-lg font-semibold">Court Availability</h1>
        <CalendarDaysIcon className="h-6 w-6" />
      </div>
      <div className="flex items-center justify-between border-b px-6 py-4">
        <h2 className="text-lg font-semibold">Monday, 17th January 2024</h2>
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
  return (
    <section className="flex flex-col gap-4 py-4">
      <h3 className="text-2xl font-bold">Select a Court</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center gap-2">
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
            <Button onClick={() => onCourtSelect(1)}>Court 1</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2">
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
            <Button onClick={() => onCourtSelect(2)}>Court 2</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2">
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
            <Button onClick={() => onCourtSelect(3)}>Court 3</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center gap-2">
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
            <Button onClick={() => onCourtSelect(4)}>Court 4</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CourtInfo() {
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

function AvailableTimeSlots() {
  return (
    <div className="flex-1 items-center justify-center gap-2 p-2 md:gap-4">
      <Calendar initialFocus mode="range" numberOfMonths={1} />
      <div className="grid gap-2">
        <h2 className="text-lg font-semibold">Available Time Slots</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button className="w-full" variant="outline">
            10:00 AM
          </Button>
          <Button className="w-full" variant="outline">
            11:00 AM
          </Button>
          <Button className="w-full" variant="outline">
            12:00 PM
          </Button>
          <Button className="w-full" variant="outline">
            1:00 PM
          </Button>
          <Button className="w-full" variant="outline">
            2:00 PM
          </Button>
          <Button className="w-full" variant="outline">
            3:00 PM
          </Button>
          <Button className="w-full" variant="outline">
            4:00 PM
          </Button>
          <Button className="w-full" variant="outline">
            5:00 PM
          </Button>
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
}: {
  selectedCourt: number | undefined;
}) {
  return (
    <div className="mt-4 space-y-2 md:mt-8 md:space-y-4">
      <h2 className="text-lg font-semibold">Reservation Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-semibold">Date</h3>
          <p>January 1, 2022</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Time</h3>
          <p>10:00 AM</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Court Number</h3>
          {selectedCourt ?? "None"}
        </div>
        <div>
          <h3 className="text-md font-semibold">Number of Players</h3>
          <p>1</p>
        </div>
      </div>
    </div>
  );
}
