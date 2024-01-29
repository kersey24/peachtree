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
  const [availableSlots, setAvailableSlots] = useState<ReservationSlot[]>([]);

  // Function to update available slots
  const updateAvailableSlots = async (date: Date) => {
    const slots = await getOpenings(date);

    // Transform each TimeSlot to ReservationSlot
    const transformedSlots: ReservationSlot[] = slots.map((slot) => {
      return {
        date: slot.start.toLocaleDateString(), // Adjust format as needed
        timeSlot: `${slot.start.toLocaleTimeString([], {
          timeStyle: "short",
        })} - ${slot.end.toLocaleTimeString([], { timeStyle: "short" })}`, // Adjust format as needed
        status: "Available", // Assuming all fetched slots are available
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
        <CalendarButton onDateSelect={updateAvailableSlots} />
        <ReservationTable slots={availableSlots} />
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
}: {
  onDateSelect: (date: Date) => Promise<void>;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control popover visibility

  // Function to toggle popover
  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  // Function to handle date selection and call server action
  const handleDateSelection = async (dateRange: DateRange | undefined) => {
    if (dateRange) {
      const selectedStartDate = dateRange.from ?? null;
      setSelectedDate(selectedStartDate);
      setIsPopoverOpen(false); // Close the popover

      // Call the server action
      if (selectedStartDate) {
        const response = await onDateSelect(selectedStartDate);
      }
    } else {
      setSelectedDate(null);
    }
  };

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
          mode="range"
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
}

const ReservationTable = ({ slots }: ReservationTableProps) => (
  <div className="rounded-lg border shadow-sm">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Day</TableHead>
          <TableHead className="w-[100px]">Time Slot</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Reserve</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {slots.map((slot) => (
          <TableRow key={slot.date + slot.timeSlot}>
            <TableCell className="font-medium">{slot.date}</TableCell>
            <TableCell className="font-medium">{slot.timeSlot}</TableCell>
            <TableCell>{slot.status}</TableCell>
            <TableCell className="text-right">
              {slot.status === "Available" ? (
                <Link href="/reserve">
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
