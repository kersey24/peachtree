"use client";
import { set } from "date-fns";
import { on } from "events";
import Link from "next/link";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { getOpenings } from "~/actions/openings/getOpenings";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<ReservationSlot[]>([]);

  // Function to update available slots
  const updateAvailableSlots = async (date: Date) => {
    const slots = await getOpenings(date);

    //Pass in these values later from admin settings
    const openingTime = new Date(date);
    openingTime.setHours(9, 0, 0, 0);
    const closingTime = new Date(date);
    closingTime.setHours(18, 0, 0, 0);

    console.log(slots);

    // Transform each TimeSlot to ReservationSlot
    const transformedSlots: ReservationSlot[] = slots
      .filter((slot) => slot.start >= openingTime && slot.end <= closingTime)
      .map((slot) => {
        // Convert UTC to local time if necessary
        const localStart = new Date(slot.start);
        const localEnd = new Date(slot.end);

        return {
          date: localStart.toLocaleDateString(),
          timeSlot: `${localStart.toLocaleTimeString([], {
            timeStyle: "short",
          })} - ${localEnd.toLocaleTimeString([], { timeStyle: "short" })}`,
          status: slot.available ? "Available" : "Reserved",
        };
      });

    setAvailableSlots(transformedSlots);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl space-y-6 p-4">
        <h1 className="text-center text-2xl font-bold dark:text-white">
          Peach Tree Racquet Club Court Reservation
        </h1>
        <CalendarButton
          onDateSelect={updateAvailableSlots}
          onDateChange={setSelectedDate}
        />
        <ReservationTable slots={availableSlots} date={selectedDate} />
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

const CalendarButton = ({
  onDateSelect,
  onDateChange,
}: {
  onDateSelect: (date: Date) => Promise<void>;
  onDateChange: (date: Date | null) => void;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control popover visibility

  // Function to toggle popover
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  // Function to handle date selection and call server action
  const handleDateSelection = async (date: Date | undefined) => {
    if (date) {
      const selectedStartDate = date;
      setSelectedDate(selectedStartDate);
      onDateChange(selectedStartDate);
      setIsPopoverOpen(false); // Close the popover

      // Call the server action
      if (selectedStartDate) {
        const response = await onDateSelect(selectedStartDate);
      }
    } else {
      setSelectedDate(null);
      onDateChange(null);
    }
  };

  const date = selectedDate ?? undefined;

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={() => setIsPopoverOpen(!isPopoverOpen)}
    >
      <PopoverTrigger asChild>
        <Button
          className="w-[300px] justify-start text-left font-normal"
          id="date"
          variant="outline"
          onClick={togglePopover} // Toggle popover on button click
        >
          <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
          {selectedDate ? selectedDate.toLocaleDateString() : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          initialFocus
          mode="single"
          selected={date}
          defaultMonth={date ?? new Date()}
          numberOfMonths={1}
          disabled={(date) => date.getTime() < new Date().setHours(0, 0, 0, 0)}
          onSelect={handleDateSelection}
        />
      </PopoverContent>
    </Popover>
  );
};

interface ReservationSlot {
  date: string;
  timeSlot: string;
  status: "Available" | "Reserved";
}

interface ReservationTableProps {
  slots: ReservationSlot[];
  date: Date | null;
}

const ReservationTable = ({ slots, date }: ReservationTableProps) => (
  <div className="rounded-lg border shadow-sm">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Day</TableHead>
          <TableHead className="w-[120px]">Time Slot</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Reserve</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {slots.map((slot) => (
          <TableRow key={slot.date + slot.timeSlot}>
            <TableCell className="font-medium">{slot.date}</TableCell>
            <TableCell className=" font-medium">{slot.timeSlot}</TableCell>
            <TableCell>{slot.status}</TableCell>
            <TableCell className="text-right">
              {slot.status === "Available" ? (
                <Link
                  href={
                    date
                      ? `/reserve?date=${encodeURIComponent(
                          date.toISOString(),
                        )}`
                      : "#"
                  }
                >
                  <Button variant="outline">Reserve</Button>
                </Link>
              ) : (
                <Button variant="outline" disabled={true}>
                  Unavailable
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
